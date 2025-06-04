'use client';
import { Radio, Typography, Card, Row, Col } from 'antd';
import { useState, useEffect } from 'react';

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

    return (
        <div
            style={{
                background: '#1f1f1f',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: 600,
            }}
        >
            <Title level={5} style={{ color: 'orange', marginBottom: 20 }}>
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
                            <Radio.Button
                                value={opt.value}
                                style={{
                                    display: 'block',
                                    padding: 0,
                                    border: 'none',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Card
                                    bodyStyle={{
                                        padding: '12px',
                                        textAlign: 'center',
                                        background: value === opt.value ? '#2b2b2b' : '#3a3a3a',
                                        border:
                                            value === opt.value ? '2px solid orange' : '1px solid #555',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Text style={{ color: '#fff', display: 'block', marginBottom: 4 }}>
                                        {opt.label}
                                    </Text>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                        {opt.price}
                                    </Text>
                                </Card>
                            </Radio.Button>
                        </Col>
                    ))}
                </Row>
            </Radio.Group>
        </div>
    );
}
