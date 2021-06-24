import routes from './router';
import theme from './theme';
import { defineConfig } from 'umi';
import defaultSettings from '../src/defaultSettings';

const favicon = 'https://www.sanygroup.com/img/favicon.ico';

export default defineConfig({
  title: defaultSettings.title,
  favicon,
  theme,
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: defaultSettings.title,
    locale: true,
    logo: favicon,
    layout: 'side',
  },
  publicPath: '/',
  routes: routes,
  fastRefresh: {},
  copy: [],
});
