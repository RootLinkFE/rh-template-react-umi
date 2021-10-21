import type { RhActionType, RhColumns } from "@/components/RhTable";
import RhTable from "@/components/RhTable";
import { DownOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { TableDropdown } from "@ant-design/pro-table";
import { Button, Dropdown, Menu, message, Space, Tag } from "antd";
import React, { useRef, useState } from "react";
import { history } from "umi";

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: RhColumns<GithubIssueItem>[] = [
  {
    dataIndex: "index",
    width: 48,
    hideInSearch: true,
  },
  {
    title: "标题",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    filterType: "query",
    tip: "标题过长会自动收缩",
  },
  {
    title: "状态",
    dataIndex: "state",
    filters: true,
    filterType: "query",
    onFilter: true,
    valueType: "select",
    width: 180,
    order: 99,
    valueEnum: {
      all: { text: "全部", status: "Default" },
      open: {
        text: "未解决",
        status: "Error",
      },
      closed: {
        text: "已解决",
        status: "Success",
        disabled: true,
      },
      processing: {
        text: "解决中",
        status: "Processing",
      },
    },
  },
  {
    title: "标签",
    dataIndex: "labels",
    filterType: "light",
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: "创建时间",
    key: "showTime",
    filterType: "light",
    dataIndex: "created_at",
    valueType: "dateTime",
    sorter: true,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    valueType: "dateRange",
    hideInTable: true,
    hideInSearch: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: "操作",
    valueType: "option",
    render: (text, record, _, action) => [
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
          { key: "copy", name: "复制" },
          { key: "delete", name: "删除" },
        ]}
      />,
    ],
  },
];

export default (props: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const actionRef = React.useRef<RhActionType>();

  const exportTupleParamsRef = useRef<{
    idList?: React.Key[];
    searchKey?: string;
    status?: string;
  }>({});

  return (
    <PageContainer
      fixedHeader
      affixProps={{ offsetTop: 48, children: null }}
      header={{
        title: props.route.name,
        breadcrumb: {},
        extra: [
          <Button
            type="primary"
            key="createBtn"
            onClick={() => {
              history.push(`/stp/data-dictionary/null`);
            }}
          >
            新建
          </Button>,
          <Button
            type="default"
            key="importBtn"
            onClick={() => {
              message.warn("todo");
            }}
          >
            批量导入
          </Button>,
          <Dropdown
            key="downloadBtn"
            overlay={
              <Menu
                onClick={async ({ key }) => {
                  if (key === "selected") {
                    if (selectedRowKeys.length === 0) {
                      message.error("请先选择要操作的数据");
                      return;
                    }

                    exportTupleParamsRef.current = { idList: selectedRowKeys };
                  } else if (key === "params") {
                    const { status, searchKey } =
                      actionRef.current?.pageInfo?.params || {};
                    exportTupleParamsRef.current = {
                      idList: [],
                      status,
                      searchKey,
                    };
                  }

                  // await download(exportTupleParamsRef.current);
                }}
              >
                <Menu.Item key="selected">当前选中数据</Menu.Item>
                <Menu.Item key="params">当前查询条件全部数据</Menu.Item>
              </Menu>
            }
          >
            <Button type="default">
              导出数据 <DownOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
    >
      <RhTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        request={async (params = {}) => {
          // 这里只是举例
          const list: any = await fetch(
            "https://proapi.azurewebsites.net/github/issues"
          ).then((resp) => resp.json());

          return {
            data: list.data,
            success: true,
            // totalPages: list.page,
            // total: list.total,
          };
        }}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        rowKey="id"
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
      />
    </PageContainer>
  );
};
