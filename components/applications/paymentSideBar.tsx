'use client';
import { Button, Card, Col, theme, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

export interface Props {
    price: number;
    buttonText: string;
    items: {
        label: string;
        value: string;
    }[];
    onClick: any
}

export default function PaymentSideBar({
    price, buttonText, items, onClick
}: Props) {

    return (
        <Card
            style={{
                background: theme.useToken().token.colorBgContainer,
                padding: '20px',
                borderRadius: '10px',
                border: "none",
                maxWidth: "280px",
            }}
            cover={<PaymentDetails items={items} />}
        >
            <Meta title={`${price}`} description={<Button onClick={onClick}>{buttonText}</Button>} />
        </Card>
    );
}


function PaymentDetails({ items }: {
    items: {
        label: string;
        value: string;
    }[]
}) {
    return <>
        {items.map((item, index) => <Col key={index}>
            <Text style={{ fontSize: '14px', fontWeight: 700 }}>
                {item.label}
            </Text>
            <Text style={{ fontSize: '12px', fontWeight: 400 }}>
                {item.value}
            </Text>
        </Col>)}

    </>
}