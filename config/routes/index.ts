export default [
  {
    path: "/user",
    layout: false,
    routes: [
      {
        path: "/user",
        routes: [
          {
            name: "login",
            path: "/user/login",
            component: "./user/Login",
          },
        ],
      },
    ],
  },

  {
    path: "/welcome",
    name: "总览",
    icon: "dashboard",
    component: "./Welcome",
  },

  {
    path: "/",
    redirect: "/welcome",
  },
  {
    component: "./404",
  },
];
