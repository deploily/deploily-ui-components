'use client';

import { HeartStraight } from '@phosphor-icons/react';
import { Badge, Button, Col, Row, Space, Typography } from 'antd';

const { Text, Paragraph } = Typography;

interface Props {
    title: string;
    description: string;
    price: number;
    avatar: React.ReactNode;
}

export default function ApplicationDescriptionForConsole({
    title,
    description,
    price,
    avatar,
}: Props) {
    return (
        <Row gutter={[16, 16]} wrap style={{
            display: 'flex',
            flexWrap: 'wrap',
        }} >
            <Col
                xs={24} md={24} xl={8}
                style={{ display: "flex", justifyContent: "start" }}
            >
                <Badge
                    count={
                        <Button
                            style={{
                                border: 'none',
                                backgroundColor: '#fff',
                                boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                                borderRadius: '50%',
                                padding: 0,
                                width: 40,
                                height: 40,
                                minWidth: 40,
                            }}
                            icon={<HeartStraight size={35} color="#7D7D7D" />}
                        />
                    }
                    offset={[-20, 20]}
                >
                    {avatar}
                </Badge>
            </Col>  
            
            <Col
                xs={24}
                md={24}
                xl={16}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                }}
            >
                <Text style={{ fontWeight: 700, fontSize: 24, lineHeight: "28px" }}>{title}</Text>

                <Space direction="horizontal" size={8} style={{ marginTop: 8 }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: "14px",
                            fontWeight: 400,
                            letterSpacing: "0.5px",
                        }}
                    >
                        From
                    </Text>

                    <Paragraph
                        style={{
                            color: "#D85912",
                            fontSize: 16,
                            margin: 0,
                            fontWeight: 600,
                        }}
                    >
                        {Intl.NumberFormat("fr-FR", {
                            useGrouping: true,
                        }).format(price)}{" "}
                        DZD
                    </Paragraph>
                </Space>

                <Paragraph
                    style={{
                        marginTop: 20,
                        fontWeight: 500,
                        fontSize: 14,
                        textAlign: "justify",
                    }}
                >
                    {description}
                </Paragraph>
            </Col>
        </Row>


    );
}
