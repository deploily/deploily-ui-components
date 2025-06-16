import { Table } from 'antd';

export interface Column{
    title: string;
    dataIndex:string ,
    render?: (text: string) => React.ReactNode;
};


export default function TableComponentWithSelection({ data, columns, onChange }: { data: any[], columns: Column[], onChange: (value: any) => void })  {
    return (
        <div>
            <Table<any>
                rowSelection={{ type: "radio",onChange:onChange }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

