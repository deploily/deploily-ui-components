"use client";
import { Coins } from "@phosphor-icons/react";
import { ConfigProvider, Divider, Select, Typography } from "antd";

export default function SelectProfileComponent({ translations, selectedProfile, paymentProfilesList, onSelectProfile }:
    {
        translations: { title: string, profile: string, balance: string, }, selectedProfile: any, paymentProfilesList: any,
        onSelectProfile: (value: any) => void
    }) {

    const { Option } = Select;
    return (
        <>
            {<>
                <Typography.Title level={4} style={{ paddingTop: 30, paddingBottom: 20, color: "white" }}>{translations.title}</Typography.Title>
                <ConfigProvider theme={{
                    components: {
                        Select: {
                            borderRadius: 0,
                            controlHeight: 50,
                            optionSelectedBg: "#7D7D7D33",
                            optionActiveBg: "#DD8859",
                        }
                    }
                }}>
                    {<Select
                        defaultValue={selectedProfile?.id}
                        style={{ width: "100%" }}
                        dropdownRender={(menu) => (
                            <>
                                <style>
                                    {`
                      .ant-select-item-option-selected {
                      border: 1px solid #4E4E4E !important;
                      border-radius: 4px;
                      }
                    `}
                                </style>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    padding: 20,
                                }}>
                                    <span style={{ fontWeight: "bold" }}>{translations.profile}</span>
                                    <span style={{ fontWeight: "bold" }}>{translations.balance}</span>
                                    <span />
                                </div>
                                <Divider style={{ margin: 0, borderColor: '#4E4E4E' }} />
                                {menu}
                            </>
                        )}
                        onChange={onSelectProfile}
                    >
                        {(
                            <>
                                {(paymentProfilesList?.result).map((profile: any, index: number) => (
                                    <Option key={index} value={profile.id}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            paddingLeft: 10, paddingRight: 10
                                        }}>
                                            <span >{profile.name} </span>
                                            <span style={{ color: "#D85912" }}>{profile.balance}</span>

                                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                <span style={{ color: "#D85912" }}>DZD</span>
                                                <Coins size={24} color="#D85912" />
                                            </div>
                                        </div>
                                    </Option>
                                ))}</>)}
                    </Select>}
                </ConfigProvider>
            </>
            }
        </>
    )
}
