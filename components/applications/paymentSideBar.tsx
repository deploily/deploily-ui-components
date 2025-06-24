'use client';
import { Button, Card, Divider, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
const { Meta } = Card;

export interface Props {
    price: number;
    buttonText: string;
    items: {
        label: string;
        value: any;
    }[];
    onClick: any
}

export default function PaymentSideBar({
    price, buttonText, items, onClick
}: Props) {
    return (
        <Card
            style={{
                maxWidth: "280px",
                background: '#202227',
                borderRadius: '10px',
                border: "none",
                color: 'white',
            }}
            bodyStyle={{ padding: 20 }}
        >
            <div style={{ color: '#ffffff' }}>
                <PaymentDetails items={items} />
                <Divider style={{ margin: '16px 0', borderColor: '#1890ff' }} />

                <div style={{ textAlign: 'center' }}>
                    <Typography.Title level={2} style={{ color: '#F47B20', margin: 0 }}>
                        {price} <Text style={{ fontSize: 16, color: '#F47B20', }}>DZD</Text>
                    </Typography.Title>

                    <Button
                        type="primary"
                        size="large"
                        style={{
                            boxShadow:"none",
                            marginTop: 12,
                            backgroundColor: '#F47B20',
                            borderColor: '#F47B20',
                            fontWeight: 'bold',
                            fontSize: 16,
                            borderRadius: 8,
                        }}
                        onClick={() => onClick()}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </Card>
    );
}


function PaymentDetails({ items }: {
    items: {
        label: string;
        value: any;
    }[]
}) {
    return <>
        {items.map((item, index) =>
            <div style={{ padding: "5px" }} key={index}>
                <Text style={{ fontSize: '14px', fontWeight: 700, color: "white", width: '100%' }}>
                    {item.label}
                </Text>
                <div>
                {
                    React.isValidElement(item.value)? item.value :
                        <Text style={{ fontSize: '12px', fontWeight: 400, color: "white", width: '100%' }}>
                            {item.value}
                        </Text>
                }
                </div>
            </div>
        )}
    </>
}