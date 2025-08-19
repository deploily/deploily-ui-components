'use client';
import { Button, Card, Divider, Typography } from 'antd';
import React, { useState } from 'react';
import { Collapse } from "antd";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { CaretRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

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
                maxWidth: "300px",
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
                            boxShadow: "none",
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

export function PaymentAppBar({
    price, buttonText, items, onClick
}: Props) {
    const [activeKey, setActiveKey] = useState<number[]>([0]);

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                // paddingInline: 16,
            }}
        >
            <Card
                style={{
                    width: "90%",
                    maxWidth: 1000,
                    background: '#202227',
                    borderRadius: '10px',
                    border: "none",
                    color: 'white',
                }}
                bodyStyle={{ padding: 0 }}
            >
                <div>
                    <Collapse
                        bordered={false}
                        activeKey={activeKey}
                        onChange={(keys) => setActiveKey((Array.isArray(keys) ? keys.map(Number) : [Number(keys)]))}
                        expandIcon={() => null}
                        items={[
                            {
                                key: 1,
                                label: (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                             height: 15,       
                                           
                                        }}
                                    >
                                        {activeKey.includes(1) ? (
                                            <CaretUp size={28}  color="#F47B20" />
                                        ) : (
                                            <CaretDown size={28}  color="#F47B20" />
                                        )}
                                    </div>
                                ),
                                children: <div className="mt-4">
                                    <PaymentDetails items={items} />
                                </div>,
                            },
                        ]}
                    />
                    <div style={{ textAlign: 'center' }}>
                        <Typography.Title level={2} style={{ color: '#F47B20', margin: 0 }}>
                            {price} <Text style={{ fontSize: 16, color: '#F47B20' }}>DZD</Text>
                        </Typography.Title>

                        <Button
                            type="primary"
                            size="large"
                            style={{
                                boxShadow: "none",
                                marginTop: 12,
                                backgroundColor: '#F47B20',
                                borderColor: '#F47B20',
                                fontWeight: 'bold',
                                fontSize: 16,
                                borderRadius: 8,
                                width: "100%",
                            }}
                            onClick={onClick}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
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
                <Text style={{ fontSize: '12px', fontWeight: 400, color: "white", width: '100%' }}>
                    {item.label}
                </Text>
                <div>
                    {
                        React.isValidElement(item.value) ? item.value :
                            <Text style={{ fontSize: '14px', fontWeight: 700, color: "white", width: '100%' }}>
                                {item.value}
                            </Text>
                    }
                </div>
            </div>
        )}
    </>
}