import React, { useRef } from 'react';
import { Input, Tooltip } from 'antd';
import ProDescriptions from '@ant-design/pro-descriptions';

export default () => {
  const actionRef = useRef();
  return (
    <ProDescriptions
      actionRef={actionRef}
      // bordered
      formProps={{
        onValuesChange: (e, f) => console.log(f),
      }}
      title="汽车起重机"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            rate: 5,
            type: '起重机',
            description: '这是一段文本columns',
            date: '20200809',
            money: '1212100',
            state: 'all',
            state2: 'open',
          },
        });
      }}
      editable={{}}
      columns={[
        {
          title: '物模型',
          key: 'text',
          dataIndex: 'type',
        },
        {
          title: '状态',
          key: 'state',
          dataIndex: 'state',
          valueType: 'select',
          editable: false,
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
          },
        },
        {
          title: '状态2',
          key: 'state2',
          dataIndex: 'state2',
          renderFormItem: () => {
            return <Input />;
          },
        },
        {
          title: '时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },
        {
          title: 'Rate',
          key: 'rate',
          dataIndex: 'rate',
          valueType: 'rate',
        },
        {
          title: 'money',
          key: 'money',
          dataIndex: 'money',
          valueType: 'money',
          render: (dom, entity, index, action) => {
            return (
              <Tooltip title="点击进入编辑状态">
                <div
                  onClick={() => {
                    action?.startEditable('money');
                  }}
                >
                  {dom}
                </div>
              </Tooltip>
            );
          },
        },
        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" key="link">
              事件
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="warning">
              命令
            </a>,
          ],
        },
      ]}
    >
      <ProDescriptions.Item
        dataIndex="percent"
        label="百分比"
        valueType="percent"
      >
        100
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};
