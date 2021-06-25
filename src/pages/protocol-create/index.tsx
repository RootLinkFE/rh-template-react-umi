import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import Descriptions from './descriptions';
import Tree from './tree';

export default function IndexPage() {
  return (
    <div
      style={{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        height: '100vh',
        background: '#F5F7FA',
      }}
    >
      <PageContainer
        // fixedHeader
        ghost
        loading={false}
        header={{
          title: '',
          breadcrumb: {
            routes: [
              {
                path: '',
                breadcrumbName: '协议建模',
              },
              {
                path: '',
                breadcrumbName: '模型管理',
              },
              {
                path: '',
                breadcrumbName: '起重机',
              },
            ],
          },
        }}
      >
        <div>
          <ProCard direction="column" ghost gutter={[0, 16]}>
            <ProCard style={{ height: 200 }}>
              <Descriptions></Descriptions>
            </ProCard>
            <ProCard gutter={16} ghost style={{ height: 200 }}>
              <ProCard colSpan={8}>
                <Tree></Tree>
              </ProCard>
              <ProCard colSpan={16}>
                <h3>这里有东西</h3>
              </ProCard>
            </ProCard>
          </ProCard>
        </div>
      </PageContainer>
    </div>
  );
}
