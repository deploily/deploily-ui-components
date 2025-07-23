'use client';
import { Card, Typography } from 'antd';
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
        <Card
            style={{
                background: 'transparent',
                padding: '0px',
                border: "none",
                width: "100%",
                color: '#fff',
            }}

        >
            <Meta
                avatar={avatar}
                style={{ alignContent: 'center', alignItems: "center" }}
                title={<Text style={{
                    fontWeight: 700,
                    fontSize: "30px",
                    lineHeight: "28px",
                    letterSpacing: "0.01em",
                    textAlign: 'center',
                    color: "white"
                }}>{title}
                </Text>}


            />
            <Paragraph
                style={{
                    marginTop: 20,
                    fontWeight: 500,
                    fontSize: 14,
                    textAlign: "start",
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
        </Card>
    );
}
