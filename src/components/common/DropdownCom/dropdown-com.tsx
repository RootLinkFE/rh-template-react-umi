import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
const { SubMenu } = Menu;

export type MenuType = {
  name?: string;
  key?: string;
  icon?: string;
  children?: Omit<MenuType, 'children'>[];
  type?: 'divider' | 'group';
  onClick?: Function;
};

export type DropdownType = {
  title: string | React.ReactNode;
  menus: Array<MenuType>;
  record?: any;
};

const renderMenu = (
  menuList: Array<MenuType>,
  record = {},
  customMethod?: Function,
): React.ReactElement => {
  const _onClick = (event: any, clickObj: any = {}) => {
    //隐藏dropdown
    if (customMethod) {
      customMethod(false);
    }
    if (clickObj.onClick) {
      clickObj.onClick.call(null, clickObj, record);
    }
  };
  return (
    <>
      <Menu
        style={{
          boxShadow:
            '0 3px 12px 0 rgb(0 0 0 / 12%), 0 0.5px 1.5px 0 rgb(0 0 0 / 8%)',
        }}
      >
        {menuList.map((menu, index) => {
          if (menu.type && menu.type === 'divider') {
            return <Menu.Divider key={'divider' + index} />;
          }
          if (menu.children && menu.children.length > 0) {
            return (
              <SubMenu title={menu.name} key={menu.key}>
                {menu.children.map((child) => (
                  <Menu.Item
                    onClick={(e) => {
                      _onClick(e, child);
                    }}
                    key={child.key}
                    icon={child.icon}
                  >
                    {child.name}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item
              onClick={(e) => {
                _onClick(e, menu);
              }}
              key={menu.key}
              icon={menu.icon}
            >
              {menu.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
};

const DropdownCom: React.FC<DropdownType> = ({ title, menus, record }) => {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };
  return (
    <>
      <Dropdown
        overlay={renderMenu(menus, record, setVisible)}
        trigger={['click']}
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{ padding: '0 10px' }}
        >
          {title}
        </a>
      </Dropdown>
    </>
  );
};

export { DropdownCom };
