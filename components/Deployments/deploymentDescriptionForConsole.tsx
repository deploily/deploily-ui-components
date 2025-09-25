'use client';

import { HeartStraight } from '@phosphor-icons/react';
import { Badge, Button, Col, Row, Space, Tag, Typography } from 'antd';
import Link from "next/link";

const { Text, Paragraph } = Typography;

interface Props {
    title: string;
    description: string;
    documentationUrl: string;
    documentationLabel: string;
    price: number;
    avatar: React.ReactNode;
    is_subscribed_tag?: string;
}

export default function DeploymentDescriptionForConsole({
    title,
    description,
    price,
    avatar,
    documentationUrl,
    documentationLabel,
    is_subscribed_tag,
}: Props) {
    return (
        <Row gutter={[16, 24]} wrap style={{
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
                <Row justify={'space-between'}>
                    <Text style={{ fontWeight: 700, fontSize: 24, lineHeight: "28px" }}>{title}</Text>
                    {is_subscribed_tag && (
                        <Tag
                            color="green"
                            style={{
                                height: "fit-content",
                                fontSize: "14px",
                                fontWeight: "bold",
                                borderRadius: 20,
                                padding: "2px 10px",
                                textTransform: "capitalize",
                            }}
                        >
                            {is_subscribed_tag}
                        </Tag>
                    )}
            
                </Row>
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
                    <Link
                        type="link"
                        href={documentationUrl}
                        target="_blank"
                        style={{
                            color: "#D85912", fontWeight: 500, textDecoration: "underline"
                        }}
                    >
                        {documentationLabel}
                    </Link>
                </Paragraph>
            </Col>
        </Row>


    );
}
