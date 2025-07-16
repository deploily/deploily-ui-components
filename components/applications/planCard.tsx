'use client';
import { Check } from '@phosphor-icons/react';
import { Card, Col, Row, theme, Typography } from 'antd';


export interface Props {
    id: number;
    price: any;
    title: string;
    subscription_category: string;
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
    price,
    subscription_category,
    options,
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
                minWidth: 220,
                maxWidth: 300,
            }}
            styles={{
                body: { flex: 1, display: "flex", flexDirection: "column", paddingBottom: 0 },
            }}
        >
  
                <Typography.Title level={3} style={{ textAlign: "center"}}>
                    {title}
                </Typography.Title>

                <Typography.Paragraph
                    style={{ fontSize: 25, fontWeight: 600, textAlign: "center",color: token.colorPrimary }}
                >
                    {Intl.NumberFormat("fr-FR", { useGrouping: true }).format(price)}
                    <span style={{ fontSize: 16, fontWeight: 400 }}>
                        {" "}
                        DZD/
                        {subscription_category}
                    </span>
                </Typography.Paragraph>

                <div style={{ flex: 1, paddingBottom: "16px" }}>
                    {options.map((row) => (
                        <Row gutter={16} key={row.id} align="middle">
                            <Col span={3}>
                                {row.icon ? row.icon : <Check size={24}  />}
                            </Col>
                            <Col span={21}>
                                <Typography.Paragraph
                                    style={{
                                        fontSize: 16,
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
        </Card>
        );
}
