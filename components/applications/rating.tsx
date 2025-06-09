'use client';
import { Rate, Row, Typography } from 'antd';

const { Title, Text } = Typography;


interface Props {
    ratingValue: number;
}

export default function Rating({
    ratingValue
}: Props) {

    const typographyStyle = {
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#F6E309"
    }

    return (
        <Row justify="space-between" align="middle" style={{  maxWidth: 500 }}>
            <Rate value={ratingValue} disabled />
            <span style={typographyStyle}>{ratingValue}</span>
        </Row>
    );
}
