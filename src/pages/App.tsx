import TeamHeader from '@/components/layout/RhHeader';
import { Layout, Menu, Breadcrumb, Card, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import styles from './App.module.less';
const { Header, Content, Sider } = Layout;

const DefaultLayout: React.FunctionComponent = function ({ children }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout
        className={styles.team + ' team-root antd-kube-theme'}
        style={{ height: '100vh' }}
      >
        <Header className={styles.header}>
          <TeamHeader />
        </Header>
        <Content style={{ padding: '20px 20px 24px' }}>{children}</Content>
      </Layout>
    </ConfigProvider>
  );
};
export default DefaultLayout;
