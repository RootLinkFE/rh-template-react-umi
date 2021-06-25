import RhSider from '@/components/layout/RhSider';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useHistory, Link } from 'umi';
import Analysis from './analysis/index';
import Demo from './demo/index';

const { Header, Content, Sider } = Layout;

const Team: React.FC = function ({ children }) {
  const history = useHistory();
  return (
    <Layout>
      {/* hasSider */}
      {/* <Sider className={styles.sidebar} width={220}>
        <RhSider
          menus={[
            {
              name: '首页',
              link: '/',
              icon: 'icon-signboard',
            },
            {
              name: '中屏',
              link: '/center',
              icon: 'icon-xiangmu',
            },
            {
              name: '左屏',
              link: '/left',
              icon: 'icon-xiangmu',
            },
            {
              name: '右屏',
              link: '/right',
              icon: 'icon-xiangmu',
            },
          ]}
        ></RhSider>
      </Sider> */}
      <Content style={{ padding: '20px', minHeight: 280 }}>
        {children}
        <Analysis />
        <Link to={'/demo'} className="block mt-50 text-2xl">
          demo
        </Link>
      </Content>
    </Layout>
  );
};

export default Team;
