const { getThemeVariables } = require('antd/dist/theme');
const theme = getThemeVariables({
  // compact: true,
});

Object.assign(theme, {
  // main
  'primary-color': '#e60000',
  'link-color': '#e60111',
  // 'link-color': '#242e42', // 灰黑
  'link-hover-color': '#d12d25',
  'ink-active-color': '#e60111',
  // Background color for `<body>`
  'body-background': '#eff4f9',
  // layout
  // "layout-body-background": "#eff4f9",
  // "layout-sider-background": "#eff4f9",
  // card
  'card-radius': '4px',
  'card-padding-base': '12px',
  'card-inner-head-padding': '10px',
  // button
  'btn-font-weight': '400',
  'btn-border-radius-base': '100px',
  'btn-border-radius-sm': '80px',
  'btn-shadow': '0 8px 16px 0 rgb(35 45 65 / 28%)',
  'btn-padding-horizontal-base': '22px',

  'btn-primary-bg': '#e60000',
});

export default theme;
