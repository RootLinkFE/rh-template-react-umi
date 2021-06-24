import IconFont from '@/components/common/IconFont';
import { StarOutlined } from '@ant-design/icons';
import { Card, Menu } from 'antd';
import { isString } from 'lodash';
import React from 'react';
import { useHistory, useLocation } from 'umi';
import styles from './index.module.less';

const { SubMenu, ItemGroup, Item } = Menu;

type MenuType = {
  name?: string;
  icon?: string | JSX.Element;
  type?: 'menu' | 'divider' | 'group';
  link?: string;
  onClick?: Function;
  children?: (Omit<MenuType, 'children'> & { type: 'menu' })[];
};

type SiderPropsType = {
  nameplate?: {
    title: string;
    description: string;
    icon: string;
  };
  menus: MenuType[];
  wrapComponent?: React.ComponentType;
};

const RhSider: React.FC<SiderPropsType> = function ({
  nameplate,
  menus,
  wrapComponent: Wrap,
}) {
  const history = useHistory();

  function renderMenuIcon(icon: MenuType['icon']): React.ReactNode {
    if (!icon) {
      return <StarOutlined />;
    }
    if (isString(icon)) {
      return <IconFont type={icon}></IconFont>;
    }
    return icon;
  }

  function renderMenuItem(menu: MenuType): React.ReactNode {
    function _onClick(...args: any[]) {
      if (menu.onClick) {
        menu.onClick.apply(null, args);
      }
      if (menu.link) {
        history.push(menu.link);
      }
    }
    return (
      <Menu.Item
        onClick={_onClick}
        icon={renderMenuIcon(menu.icon)}
        key={menu.link}
      >
        {menu.name}
      </Menu.Item>
    );
  }

  function renderMenus(): React.ReactElement {
    const location = useLocation();
    return (
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{
          height: '100%',
          background: 'transparent',
          color: 'hsla(0,0%,100%,.65)',
          fontWeight: 500,
        }}
        inlineIndent={12}
        triggerSubMenuAction="hover"
      >
        {menus.map((menu) => {
          if (menu.type === 'divider') {
            return <Menu.Divider />;
          }
          if (menu.children?.length) {
            if (menu.type === 'group') {
              return (
                <ItemGroup key={menu.link} title={menu.name}>
                  {menu.children.map(renderMenuItem)}
                </ItemGroup>
              );
            } else {
              return (
                <SubMenu
                  title={menu.name}
                  key={menu.link}
                  icon={renderMenuIcon(menu.icon)}
                >
                  {menu.children.map(renderMenuItem)}
                </SubMenu>
              );
            }
          } else {
            return renderMenuItem(menu);
          }
        })}
      </Menu>
    );
  }

  function renderNamePlate(): React.ReactNode {
    if (!nameplate) return null;
    return (
      <div className={styles.title}>
        <h1>VisualLargeScreen</h1>
      </div>
    );
  }

  function renderSider(): React.ReactElement {
    return (
      <div className={styles.sidebar}>
        {renderNamePlate()}
        {renderMenus()}
      </div>
    );
  }

  return Wrap ? <Wrap>{renderSider()}</Wrap> : renderSider();
};
export default RhSider;
