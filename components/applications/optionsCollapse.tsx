'use client';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { Collapse, List, Radio, theme, Typography } from 'antd';
export interface OptionItem {
    leading?: any;
    title?: any;
    trailing?: any;
    value?: string;
}

export interface Props {
    options: OptionItem[],
    title: string,
    selectedOption?: string,
    onChange: (value: string) => void;
}
export default function OptionsCollapse({ title, options, selectedOption, onChange }: Props) {
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
                isActive ? <CaretUp size={24} color="#ff6600" /> : <CaretDown size={24} color="#ff6600" />
            )}
            expandIconPosition="end"
            style={{
                borderRadius: '8px',
                backgroundColor: '#202227', //darkGrey
                width: '100%',
            }}
            items={[{
                key: title,
                label: (
                    <Typography.Title level={3} style={{ fontWeight: 300, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%', color: theme.useToken().token.colorWhite }}>
                        {title}
                    </Typography.Title>
                ),
                children: (
                    OptionsList({ options, selectedOption, onChange })
                )
            }
            ]}
        />
    );
}

export function OptionsList({ options, selectedOption, onChange }: { options: OptionItem[], selectedOption: any, onChange: (value: string) => void }) {
    const { token } = theme.useToken();
    return <List
        itemLayout="horizontal"
        dataSource={options}
        renderItem={(item) => (
            <Option option={item} onChange={onChange} selectedOption={selectedOption} />
        )}
    />;
}




export function Option({ option, selectedOption, onChange }: { option: OptionItem, selectedOption: any, onChange: (value: string) => void }) {
    const { token } = theme.useToken();

  
    return <List.Item
        // onClick={() => { setDiscount(item.discount ?? 0) }}
        style={{
            backgroundColor: "#7D7D7D",
            padding: "2px 20px",
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}
    >
        <div style={{ display: "flex", alignItems: "center" }}>
            <Radio value={option.value} checked={option.value === selectedOption} onChange={() => onChange(option.value ?? "")}></Radio>
            {option.leading}
            {option.title}
        </div>
        {option.trailing}
    </List.Item>
  
}


// Then in your CSS:

