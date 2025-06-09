'use client';
import { Card, Col, Radio, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

export interface SubscriptionOption {
    label: string;
    price: string;
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
        fontFamily: "Inter, sans-serif",
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
                style={{ width: '100%' }}
            >
                <Row gutter={[16, 16]}>
                    {options.map((opt) => (
                        <Col xs={12} sm={12} md={6} key={opt.value}>
                            <Card
                                style={{
                                    display: 'block',
                                    padding: 0,
                                    border: 'none',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '0 0 0px 0px',
                                    textAlign: 'center',
                                }
                                }
                                styles={{
                                    body: {
                                        padding: '12px',
                                        textAlign: 'center',
                                        background: "#7D7D7D", borderRadius: '0 0 0px 0px',

                                    }
                                }}
                            >
                                <Radio
                                    value={opt.value}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        color: opt.value === value ? '#f97316' : '#ccc',
                                    }}
                                >
                                    <Text style={{ color: '#fff', display: 'block', marginBottom: 4 }}>
                                        {opt.label}
                                    </Text>
                                </Radio>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                    {opt.price}
                                </Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Radio.Group>
        </div>
    );
}
