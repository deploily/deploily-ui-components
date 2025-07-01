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
            <Table<any>
                className={"myTable"}
                rowSelection={{
                    type: "radio",
                    onChange: (newSelectedRowKeys: React.Key[]) => {
                        setSelectedRowKeys(newSelectedRowKeys);
                        onChange(newSelectedRowKeys[0]);
                    },
                    selectedRowKeys
                }}
                scroll={{ x: 730, y: 400 }}
                columns={columns}
                dataSource={data}
            /></div>

    );
};

