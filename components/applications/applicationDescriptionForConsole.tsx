'use client';
import { HeartStraight } from '@phosphor-icons/react';
import { Badge, Button, Card, Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;
const { Meta } = Card;

interface Props {
    title: string;
    description: string;
    avatar: React.ReactNode;
}

export default function ApplicationDescriptionForConsole({
    title,
    description,
    avatar,
}: Props) {


    return (<Row gutter={[16, 16]}
        style={{
            display: 'flex',
            flexWrap: 'wrap',
        }} >
        <Col span={8}>
            <Badge
                count={
                    <Button
                        style={{
                            border: "none",
                            backgroundColor: "#fff",
                            boxShadow: "0 0 4px rgba(0,0,0,0.1)",
                            borderRadius: "50%",
                            padding: 0,
                            width: 40,
                            height: 40,
                            minWidth: 40,
                        }}
                        icon={
                            // currentService.is_in_favorite === true ? (
                            // <HeartStraight size={35} weight="fill" color="#FC3232" />
                            // ) : (
                            <HeartStraight size={35} color="#7D7D7D" />
                            // )
                        }
                    // onClick={() => handleFavoriteService(currentService.id)}
                    />
                }
                offset={[-20, 20]}
            >
                {avatar}
            </Badge>
        </Col>

        <Col span={16} style={{ flexDirection: "column", justifyContent: "start" }}>
            <Text style={{
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "28px",
                letterSpacing: "0.01em",
                textAlign: 'center',
            }}>{title}
            </Text>
            <Typography.Paragraph style={{
                marginTop: "40px",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "justify",

            }}>
                {description}
            </Typography.Paragraph>
        </Col>
    </Row>
    );
}
