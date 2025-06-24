'use client';

import { HeartStraight } from '@phosphor-icons/react';
import { Badge, Button, Col, Row, Typography } from 'antd';

const { Text, Paragraph } = Typography;

interface Props {
    title: string;
    description: string;
    price?: number;
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
                style={{ display: "flex", justifyContent: "start"  }}
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
                xs={24} md={24} xl={16} 
                style={{
                    flexDirection: "column", justifyContent: "start",
                        // paddingLeft: window.innerWidth >= 700 ? '30px' : '0px',
                }}
            >
                <Text style={{ fontWeight: 700, fontSize: 24, lineHeight: '28px' }}>{title}</Text>
                {price !== undefined && (
                    <Text style={{ fontWeight: 700, fontSize: 24, lineHeight: '28px', marginTop: 4 }}>
                        {price} DZD
                    </Text>
                )}
                <Paragraph
                    style={{
                        marginTop: 20,
                        fontWeight: 500,
                        fontSize: 14,
                        textAlign: 'justify',
                    }}
                >
                    {description}
                </Paragraph>
            </Col>
        </Row>
      
      
    );
}
