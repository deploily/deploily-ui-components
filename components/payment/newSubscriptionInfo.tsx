"use client";
import { Card, Col, Row, Space, Typography } from "antd";

export interface NewSubscriptionInfoInterface {
    applicationName: {
        label: string;
        value: string
    };
    options: {
        label: string;
        value: string
    };
    duration: {
        label: string;
        value: string
    };
    providerName: {
        label: string;
        value: string
    };
    resourceType: {
        label: string;
        value: string
    };
    resourcePlanOptions: {
        label: string;
        value: string
    };
    totalAmount: {
        label: string;
        value: string
    };
}

export default function NewSubscriptionInfo({ title, newSubscriptionInfo }: { title: string, newSubscriptionInfo: NewSubscriptionInfoInterface }) {
    console.log(newSubscriptionInfo);

    return (
        <>
            <Typography.Title style={{ paddingBottom: 30, fontSize: "20px", fontWeight: 700, color: "white" }}>{title}</Typography.Title>
            <Card style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderColor: "#4E4E4E",
                backgroundColor: "#0C0D11",
                boxShadow: "none",
            }}
            >
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Row gutter={16} align="top" >
                        <Item label={newSubscriptionInfo.applicationName.label} value={newSubscriptionInfo.applicationName.value} />
                    </Row>
                    <Row gutter={16} align="top" >
                        <Item label={newSubscriptionInfo.options.label} value={newSubscriptionInfo.options.value} />
                    </Row>
                    <Row gutter={16} align="top" >
                        <Item label={newSubscriptionInfo.duration.label} value={newSubscriptionInfo.duration.value} />
                    </Row>
                    <Row gutter={16} align="top" >
                        <Item label={newSubscriptionInfo.providerName.label} value={newSubscriptionInfo.providerName.value} />
                    </Row>
                    <Row gutter={16} align="top" >
                        <Item label={newSubscriptionInfo.resourceType.label} value={newSubscriptionInfo.resourceType.value} />
                    </Row>
                    <Row gutter={16} align="top" >
                        <Item label={newSubscriptionInfo.resourcePlanOptions.label} value={newSubscriptionInfo.resourcePlanOptions.value} />
                    </Row>
                    <Row gutter={16} align="top" >
                        <Col span={14} >  <Typography.Text strong style={{ color: "white" }} >{newSubscriptionInfo.totalAmount.label}</Typography.Text></Col>
                        <Col span={10}>
                            <Typography.Text strong style={{ fontSize: 16, fontWeight: 700, color: "white" }}>
                                {newSubscriptionInfo.totalAmount.value}
                            </Typography.Text>

                        </Col>
                    </Row>


                </Space>
            </Card>
        </>
    )
}


function Item({ label, value }: { label: string, value: string }) {
    return (
        < >
            <Col span={14} >  <Typography.Text strong style={{ color: "white" }}>{label}</Typography.Text></Col>
            <Col span={10} > <Typography.Text style={{ color: "white" }}>{value}</Typography.Text></Col>
        </>
    );
}