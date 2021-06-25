import React from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const treeData = [
  {
    title: '汽车起重机',
    key: '0-0',
    children: [
      {
        title: '主臂',
        key: '0-0-0',
        children: [
          {
            title: '油缸',
            key: '0-0-0-0',
          },
          {
            title: '臂架',
            key: '0-0-0-1',
          },
          {
            title: 'PM',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '发动机',
        key: '0-0-1',
        children: [
          {
            title: 'PG1',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: '起升机构',
        key: '0-0-2',
        children: [
          {
            title: '液压马达',
            key: '0-0-2-0',
          },
          {
            title: '减速器',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
];

export default () => {
  const onSelect = (selectedKeys: any, info: any) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};
