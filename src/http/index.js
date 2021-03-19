import api from "./api";

const install = (app) => {
  if (install.installed) {
    return;
  }
  install.installed = true;
  app.config.globalProperties.$api = api;
};

export default install;
