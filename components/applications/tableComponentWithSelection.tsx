import { Table } from 'antd';
import './TableDesign.module.css';
export interface Column {
    title: string;
    dataIndex: string,
    render?: (text: any) => React.ReactNode;
};


export default function TableComponentWithSelection({ data, columns, onChange }: { data: [], columns: Column[], onChange: (value: any) => void }) {
    return (
        <Table<any>
            className={"myTable"}
            rowSelection={{ type: "radio", onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => onChange(selectedRows[0]) }}
            columns={columns}
            dataSource={data}
        />
    );
};

