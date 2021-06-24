import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { Button, Dropdown, Menu } from 'antd';
import React, { useRef } from 'react';

export type TableListItem = {
  id?: number | string | undefined;
  key: number;
  name: string;
  containers: number;
  creator: string;
  status?: string;
  createdAt: number;
  updatedAt: number;
  description: string;
  picture: string;
  type: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
const types = ['挖掘机', '起重机', '泵机', '升降机'];

for (let i = 0; i < 20; i += 1) {
  tableListDataSource.push({
    key: i,
    name: '汽车起重机',
    picture:
      'https://d1icd6shlvmxi6.cloudfront.net/gsc/ASLBQK/38/1c/96/381c96a7d4e64aa685b5dae8d037d028/images/%E8%BF%9E%E6%8E%A5%E5%BB%BA%E6%A8%A1/u60.png?token=f686e99e7946b4b5f004e474d754e990bffe161515e458dbb22ef46f5d8e9b13',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    updatedAt: Date.now() - Math.floor(Math.random() * 2000),
    type: types[Math.floor(Math.random() * creators.length)],
    description:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '模型名称',
    dataIndex: 'name',
    ellipsis: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '创建人',
    dataIndex: 'creator',
    ellipsis: true,
  },
  {
    title: '模型描述',
    dataIndex: 'description',
    ellipsis: true,
    search: false,
  },

  {
    title: '模型分类',
    dataIndex: 'type',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'all' },
      close: { text: '起重机', status: 'Default' },
      running: { text: '挖掘机', status: 'digger' },
      online: { text: '泵车', status: 'Success' },
      error: { text: '升降机', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: true,
    hideInSearch: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record: any, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<TableListItem>
      columns={columns}
      actionRef={actionRef}
      request={(params, sorter, filter): Promise<any> => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="模型管理"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
        <Dropdown key="menu" overlay={menu}>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};
