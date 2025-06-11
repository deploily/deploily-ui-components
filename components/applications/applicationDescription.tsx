'use client';
import { Avatar, Card, Typography } from 'antd';

const { Title, Text } = Typography;
const { Meta } = Card;

interface Props {
    title: string;
    description: string;
    logo: string;
}

export default function ApplicationDescription({
    title,
    description,
    logo,
}: Props) {

    return (
        <Card
            style={{
                background: 'transparent',
                padding: '0px',
                borderRadius: '10px',
                maxWidth: 600,
                color: '#fff',
            }}
          
        >
            <Meta
                avatar={<Avatar src={logo} style={{ width: 50, height: 50 }} />}
                style={{ alignContent: 'center' }}
                title={<Text style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "30px",
                    lineHeight: "28px",
                    letterSpacing: "0.01em",
                    textAlign: 'center'
                }}>{title}
                </Text>}


            />
            <Typography.Paragraph style={{
                marginTop: "40px",
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "justify",
            }}>
                {description}
            </Typography.Paragraph>
        </Card>
    );
}
