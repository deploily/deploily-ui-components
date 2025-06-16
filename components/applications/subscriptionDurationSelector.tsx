'use client';
import { Card, Col, Radio, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

export interface SubscriptionOption {
    label: string;
    value: string;
}

interface Props {
    title: string;
    options: SubscriptionOption[];
    initialValue?: string;
    onChange?: (value: string) => void;
}

export default function SubscriptionDurationSelector({
    title,
    options,
    initialValue,
    onChange,
}: Props) {
    const [value, setValue] = useState(initialValue ?? options[0]?.value ?? '');

    useEffect(() => {
        if (onChange) onChange(value);
    }, [value]);

    const typographyStyle = {
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.01em",
        color: "#FF6600"
    }

    return (
        <div
            style={{
                background: '#1f1f1f',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: 500,
            }}
        >
            <Title level={5} style={typographyStyle}>
                {title}
            </Title>
            <Radio.Group
                onChange={(e) => setValue(e.target.value)}
                value={value}
                style={{ width: '100%', margin: "0px" }}
            >
                <Row gutter={[16, 16]}>
                    {options.map((opt) => (
                        <Col >
                            <Card
                                style={{
                                    display: 'block',
                                    border: 'none',
                                    width: '95px',
                                    borderRadius: '0 0 0px 0px',
                                    margin: '0 0 0px 0px',
                                    textAlign: 'center',
                                    background: "#7D7D7D",
                                    alignItems: 'center'
                                }
                                }
                                styles={{
                                    body: {
                                        padding: '1px',
                                        paddingTop:"5px",
                                        paddingBottom:"5px",
                                        textAlign: 'center',
                                        height: "100%",
                                        alignContent: "center"
                                    }
                                }}
                            >
                                <Radio
                                    value={opt.value}
                                    style={{
                                        color: opt.value === value ? '#f97316' : '#ccc',
                                        paddingBottom: '5px'
                                    }}
                                >
                                    <Text style={{ color: '#fff', fontSize: '12px', fontWeight: 400 }}>
                                        {opt.label}
                                    </Text>
                                </Radio>


                            </Card>
                        </Col>
                    ))}
                </Row>
            </Radio.Group>
        </div>
    );
}
