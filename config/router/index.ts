const routes = [
  { name: '首页', path: '/', component: '@/pages/index' },
  { name: '左屏', path: '/left', component: '@/pages/left/index' },
  { name: '右屏', path: '/right', component: '@/pages/right/index' },
  { path: '/demo', component: '@/pages/demo/index' },
  {
    component: './404',
  },
];

export default routes;
