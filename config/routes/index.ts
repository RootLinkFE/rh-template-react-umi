export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },

  {
    path: '/welcome',
    name: '总览',
    icon: 'dashboard',
    component: './Welcome',
  },
  {
    path: '/table',
    name: '表格示例',
    icon: 'table',
    routes: [
      {
        path: '/table/simple',
        name: '简单表格',
        component: './table/simple',
      },
      {
        path: '/table/complex',
        name: '复杂表格',
        component: './table/complex',
      },
    ],
  },
  {
    path: '/form',
    name: '表单',
    icon: 'form',
    routes: [
      {
        path: '/form/basic',
        name: '基础表单',
        component: './form/basic-form',
      },
    ],
  },
  {
    path: '/charts',
    name: '图表',
    icon: 'PieChart',
    component: './charts',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
