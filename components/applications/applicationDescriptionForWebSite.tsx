'use client';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import Link from 'next/link';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

interface Props {
    title: string;
    description: string;
    avatar: React.ReactNode;
    documentationUrl: string;
    demoUrl: string;
    documentationLabel: string;
    demoLabel: string;
  
}

export default function ApplicationDescriptionForWebSite({
    title,
    description,
    avatar,
    documentationUrl,
    demoUrl,
    documentationLabel,
    demoLabel,
}: Props) {


    return (
        <Row gutter={[16, 24]} wrap style={{
            display: 'flex',
            flexWrap: 'wrap',
        }} >
            <Col
                xs={24} md={6} xl={6}
                style={{ display: "flex", justifyContent: "center",marginRight:"20px" }}
            >
                {avatar}
            </Col>

            <Col
                xs={24}
                md={16}
                xl={16}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Row justify={'space-between'}>
                    <Text style={{ fontWeight: 700, fontSize: 24, lineHeight: "28px" }}>{title}</Text>
                </Row>
                <Paragraph
                    style={{
                        marginTop: 20,
                        fontWeight: 500,
                        fontSize: 16,
                        textAlign: "justify",
                    }}
                >
                    {description}
                   
                </Paragraph>
                <div style={{ display: 'flex', gap: '10px', marginTop: 10, flexWrap:"wrap" }}>
                    <Button
                        type="primary"
                        href={documentationUrl}
                        target="_blank"
                        style={{
                            backgroundColor: "#0057D8",
                            border: "none",
                            boxShadow: "none"
                        }}
                    >
                        <span
                            style={{
                                color: "white",
                                fontSize: "16px",
                                fontWeight: 600,
                            }}
                        >
                            {documentationLabel}
                        </span>
                    </Button>
                    <Button
                        type="primary"
                        href={demoUrl}
                        target="_blank"
                        style={{
                            backgroundColor: "#0057D8",
                            border: "none",
                            boxShadow: "none"
                        }}
                    >
                        <span
                            style={{
                                color: "white",
                                fontSize: "16px",
                                fontWeight: 600,
                            }}
                        >
                            {demoLabel}
                        </span>
                    </Button>
                </div>
            </Col>
        </Row>

    );
}
