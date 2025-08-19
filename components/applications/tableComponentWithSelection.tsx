import { Table } from 'antd';
import { useState } from 'react';
import './TableDesign.module.css';
export interface Column {
    title: string;
    dataIndex: string,
    render?: (text: any) => React.ReactNode;
    fixed?: 'left' | 'right';
    width?: number | string;

};


export default function TableComponentWithSelection({ selectedRowId, data, columns, onChange }:
    {
        selectedRowId: number | undefined, data: [], columns: Column[],
        onChange: (value: any) => void
    }) {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(selectedRowId ? [selectedRowId] : []);

    return (
        <div>
            <style>
                {`
                    .myTable .selected-row:hover td {
                        background-color: transparent !important;
                    }
                `}
            </style>

            <Table<any>
                className="myTable"
                rowSelection={{
                    type: "radio",
                    onChange: (newSelectedRowKeys: React.Key[]) => {
                        setSelectedRowKeys(newSelectedRowKeys);
                        onChange(newSelectedRowKeys[0]);
                    },
                    selectedRowKeys,
                }}
                rowClassName={(record) =>
                    selectedRowKeys.includes(record.key) ? "selected-row" : ""
                }
                scroll={{ x: 730, y: 400 }}
                pagination={false}
                columns={columns}
                dataSource={data}
            />
        </div>

    );
};

