'use client';
import { Check } from '@phosphor-icons/react';
import { Button, Card, Col, List, Row, theme, Typography } from 'antd';

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

    const {token}=theme.useToken()

    return (
        <Card
            onClick={() => onClick(id)}
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                borderColor: styles.color ?? 'grey',
                boxShadow:styles.boxShadow,
                minWidth: 200,
                maxWidth: 250,
            }}
            styles={{
                body: { flex: 1, display: "flex", flexDirection: "column", paddingBottom: 0 },
            }}
        >


            <Typography.Title level={3} style={{ textAlign: "center" }}>
                {title}
            </Typography.Title>

            <Typography.Paragraph style={{ fontSize: 25, fontWeight: 600, color: styles.color ?? token.colorPrimary, textAlign: "center" }}>
                {Intl.NumberFormat('fr-FR', { useGrouping: true }).format(price)}
                <span style={{ fontSize: 16, fontWeight: 400 }}> DZD/{"month"}</span>
            </Typography.Paragraph>

            <div style={{ flex: 1, paddingBottom: "16px" }}>
                {options.map((row:any) => (
                    <Row gutter={16} key={row.id} align="middle">
                        <Col span={3}  >
                            <Check size={24} color={'grey'} />
                        </Col>
                        <Col span={21}>
                            <Typography.Paragraph
                                style={{
                                    fontSize: 16,
                                    color: 'grey',
                                    margin: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24,
                                }}
                            >
                                <div
                                    dangerouslySetInnerHTML={{ __html: row.html_content }}
                                    style={{ margin: 0, lineHeight: "24px" }}
                                />
                            </Typography.Paragraph>
                        </Col>
                    </Row>

                ))}
            </div>

            <div
                style={{
                    padding: "16px",
                    display: "inline-block",
                }}
            >
            </div>
        </Card>
        );
}
