import routes from './router';
import { defineConfig } from 'umi';
import defaultSettings from '../src/defaultSettings';

export default defineConfig({
  title: defaultSettings.title,
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  publicPath: '/',
  routes: routes,
  fastRefresh: {},
  copy: [],
});
