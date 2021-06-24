import routes from './router';
import { defineConfig } from 'umi';
import defaultSettings from '../src/defaultSettings';

export default defineConfig({
  title: defaultSettings.title,
  nodeModulesTransform: {
    type: 'none',
  },
  layout: { name: defaultSettings.title, locale: true, layout: 'side' },
  publicPath: '/',
  routes: routes,
  fastRefresh: {},
  copy: [],
});
