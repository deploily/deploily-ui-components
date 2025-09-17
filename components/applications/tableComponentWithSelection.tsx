import { Table } from 'antd';
import { useEffect, useRef, useState } from 'react';
import './TableDesign.module.css';

export interface Column {
    title: string;
    dataIndex: string;
    render?: (text: any) => React.ReactNode;
    fixed?: 'left' | 'right';
    width?: number | string;
}

export default function TableComponentWithSelection({
    selectedRowId,
    data,
    columns,
    onChange,
}: {
    selectedRowId: number | undefined;
    data: any[];
    columns: Column[];
    onChange: (value: any) => void;
}) {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(
        selectedRowId ? [selectedRowId] : []
    );

    const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({});

    useEffect(() => {
        if (selectedRowId !== undefined && selectedRowKeys[0] !== selectedRowId) {
            setSelectedRowKeys([selectedRowId]);
        }
    }, [selectedRowId]);

    // Scroll selected row into view only inside table body
    useEffect(() => {
        if (selectedRowKeys.length > 0) {
            const key = selectedRowKeys[0];
            const rowEl = rowRefs.current[String(key)];
            if (rowEl) {
                const tableBody = rowEl.closest('.ant-table-body') as HTMLDivElement | null;
                if (tableBody) {
                    const rowTop = rowEl.offsetTop;
                    const rowBottom = rowTop + rowEl.offsetHeight;
                    const visibleTop = tableBody.scrollTop;
                    const visibleBottom = visibleTop + tableBody.clientHeight;

                    if (rowTop < visibleTop) {
                        tableBody.scrollTo({ top: rowTop, behavior: 'smooth' });
                    } else if (rowBottom > visibleBottom) {
                        tableBody.scrollTo({
                            top: rowBottom - tableBody.clientHeight,
                            behavior: 'smooth',
                        });
                    }
                }
            }
        }
    }, [selectedRowKeys, columns]);

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
                    type: 'radio',
                    onChange: (newSelectedRowKeys: React.Key[]) => {
                        setSelectedRowKeys(newSelectedRowKeys);
                        onChange(newSelectedRowKeys[0]);
                    },
                    selectedRowKeys,
                }}
                rowClassName={(record) =>
                    selectedRowKeys.includes(record.key) ? 'selected-row' : ''
                }
                components={{
                    body: {
                        row: (props: any) => {
                            const { 'data-row-key': key } = props as any;
                            return (
                                <tr
                                    {...props}
                                    ref={(el) => {
                                        rowRefs.current[key] = el;
                                    }}
                                />
                            );
                        },
                    },
                }}
                scroll={{ x: 730, y: 400 }}
                pagination={false}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
}
