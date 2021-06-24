import RhSider from '@/components/layout/RhSider';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useHistory, Link } from 'umi';
import styles from './index.less';

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
      <Content style={{ padding: '0 20px', minHeight: 280 }}>
        {children}
        <Link
          to={'/demo'}
          style={{ display: 'block', marginTop: '50px', fontSize: 16 }}
        >
          G2 BizCharts Demo
        </Link>
      </Content>
    </Layout>
  );
};

export default Team;
