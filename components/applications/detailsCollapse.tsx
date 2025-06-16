"use client";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Collapse, theme, Typography } from "antd";
export interface CollapseItem {
    label: string,
    children: string
}
export default function DetailsCollapse({ items, style }: { items?: CollapseItem[] | undefined, style?: React.CSSProperties }) {
    const { token } = theme.useToken();
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={[items && items.length > 0 ? '0' : '']}
            expandIcon={({ isActive }) => (isActive ? <CaretUp /> : <CaretDown />)}
            expandIconPosition="end"
            style={style || {borderRadius: '8px',
                backgroundColor: '#202227', //darkGrey
                    maxWidth: '500px'}
}
            items={items?.map((item,index) => ({
                key: index.toString(),
                label: (
                    <Typography.Title level={3} style={{ fontWeight: 700, fontSize: '16px',lineHeight:'100%',letterSpacing:'0%', color:token.colorPrimary }}> 
                        {item.label}
                    </Typography.Title>
                ),
                children: (
                    <Typography.Paragraph style={{ fontWeight: 400, fontSize: '12px', lineHeight: '24px', letterSpacing: '0%'}}>
                        {item.children}
                    </Typography.Paragraph>
                ),
            })) || []}
        />
    )

}
