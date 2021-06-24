const routes = [
  { name: '首页', path: '/', component: '@/pages/index' },
  {
    name: '模型管理',
    path: '/protocol-manage',
    component: '@/pages/protocol-manage/index',
  },
  {
    name: '协议建模',
    path: '/protocol-create',
    component: '@/pages/protocol-create/index',
  },
  { path: '/demo', component: '@/pages/demo/index' },
  {
    component: './404',
  },
];

export default routes;
