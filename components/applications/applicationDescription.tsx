'use client';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;
const { Meta } = Card;

interface Props {
    title: string;
    description: string;
    avatar: React.ReactNode;
}

export default function ApplicationDescription({
    title,
    description,
    avatar,
}: Props) {


    return (
        <Card
            style={{
                background: 'transparent',
                padding: '0px',
                border:"none",
                maxWidth: 600,
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
            <Typography.Paragraph style={{
                marginTop: "40px",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "justify",
                color: "white"

            }}>
                {description}
            </Typography.Paragraph>
        </Card>
    );
}
