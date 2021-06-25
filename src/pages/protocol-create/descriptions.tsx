import React, { useRef } from 'react';
import { Input, Tooltip } from 'antd';
import ProDescriptions from '@ant-design/pro-descriptions';
const { TextArea } = Input;
import styles from './index.less';

// import qizhongjiImg from '../../assets/images/qizhongji.jpeg';

export default () => {
  const actionRef = useRef();
  return (
    <div>
      <div className={styles.descHeader}>
        <img width={120} src={require('/src/assets/images/qizhongji.jpeg')} />
        <span className={styles.descHeaderTitle + ' ml-10'}>汽车起重机</span>
      </div>
      <ProDescriptions
        actionRef={actionRef}
        // bordered
        formProps={{
          onValuesChange: (e, f) => console.log(f),
        }}
        request={async () => {
          return Promise.resolve({
            success: true,
            data: {
              type: '起重机',
              description: '这是一段文本columns',
              createTime: '2021-06-25 09:14:56',
              updateTime: '2021-06-25 09:14:56',
              state: 'all',
              hardwareTerminal: 'GNSS',
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
            title: '硬件终端',
            key: 'hardwareTerminal',
            dataIndex: 'hardwareTerminal',
            renderFormItem: () => {
              return <Input />;
            },
          },

          {
            title: '描   述',
            key: 'description',
            dataIndex: 'description',
            valueType: 'string',
            renderFormItem: () => {
              return <TextArea rows={2} />;
            },
          },
          {
            title: '创建时间',
            key: 'date',
            dataIndex: 'createTime',
            valueType: 'dateTime',
          },
          {
            title: '更新时间',
            key: 'date',
            dataIndex: 'updateTime',
            valueType: 'dateTime',
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
        {/*      <ProDescriptions.Item
        dataIndex="percent"
        label="百分比"
        valueType="percent"
      >
        100
      </ProDescriptions.Item> */}
      </ProDescriptions>
    </div>
  );
};
