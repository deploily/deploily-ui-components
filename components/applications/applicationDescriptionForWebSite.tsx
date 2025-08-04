'use client';
import { Card, Col, Row, Space, Typography } from 'antd';
import Link from 'next/link';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

interface Props {
    title: string;
    description: string;
    avatar: React.ReactNode;
    documentationUrl: string;
    documentationLabel: string;

}

export default function ApplicationDescriptionForWebSite({
    title,
    description,
    avatar,
    documentationUrl,
    documentationLabel,
}: Props) {


    return (
        <Row gutter={[16, 24]} wrap style={{
            display: 'flex',
            flexWrap: 'wrap',
        }} >
            <Col
                xs={24} md={24} xl={4}
                style={{ display: "flex", justifyContent: "start" }}
            >
                {avatar}
            </Col>

            <Col
                xs={24}
                md={24}
                xl={20}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                }}
            >
                <Row justify={'space-between'}>
                    <Text style={{ fontWeight: 700, fontSize: 24, lineHeight: "28px" }}>{title}</Text>
                </Row>
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
