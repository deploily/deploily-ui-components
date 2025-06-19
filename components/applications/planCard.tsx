'use client';
import { Card, List, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

export interface Props {
    id: number;
    price: any;
    title: string;
    options: {
        id: number;
        icon: string;
        html_content: string;
    }[];
    onClick: any,
    styles: any
}

export default function PlanCard({
    id,
    styles,
    title,
    options,
    price,
    onClick
}: Props) {

    return (
        <Card
            style={{
                ...styles,
                background: 'rgba(255, 102, 0, 0.25)',
                padding: '0px',
                borderRadius: '10px',
                border: "none",
                maxWidth: "250px",
            }}
            onClick={() => onClick(id)}
        >
            <Typography.Title level={3} style={{ textAlign: "center", color: '#FF6600', fontWeight: 300, fontSize: '16px' }}>
                {title}
            </Typography.Title>
            <div style={{ textAlign: 'center' }}>
                <Typography.Paragraph style={{ fontSize: 18, fontWeight: 600, color: '#FF6600',textAlign: "center" }}>
                    {Intl.NumberFormat('fr-FR', { useGrouping: true }).format(price)}
                    <span style={{ fontSize: 16, fontWeight: 400 }}> DZD/month</span>
                </Typography.Paragraph>
            </div>
            <List
                itemLayout="horizontal"
                dataSource={options}
                renderItem={(option) => (
                    <List.Item
                        style={{
                            border: "none"
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {option.icon}
                            <Text style={{ marginLeft: 4, fontSize: '16px', fontWeight: 300, color: '#fff' }}>
                                {option.html_content}
                            </Text>

                        </div>
                    </List.Item>
                )}
            />
           
        </Card>
    );
}
