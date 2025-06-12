'use client';
import { Card, List, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

export interface Props {
    title: string;
    options: {
        id: number;
        icon: string;
        html_content: string;
    }[];
}

export default function PlanCard({
    title,
    options
}: Props) {
console.log("PlanCard rendered with title:", title);

    return (
        <Card
            style={{
                background: 'rgba(255, 102, 0, 0.25)',
                padding: '0px',
                borderRadius: '10px',
                border: "none",
                maxWidth: "250px",
            }}
        >
            <Typography.Title level={3} style={{ textAlign: "center" ,color: '#FF6600', fontWeight: 300, fontSize: '16px'}}>
                {title}
            </Typography.Title>
            <List
                itemLayout="horizontal"
                dataSource={options}
                renderItem={(option) => (
                    <List.Item
                    // style={{
                    //     padding: "2px 20px",
                    //     marginBottom: 12,
                    //     display: "flex",
                    //     alignItems: "center",
                    //     justifyContent: "space-between",
                    // }}
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
