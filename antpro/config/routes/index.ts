export default [
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/todolist',
    name: 'todolist',
    icon: 'smile',
    component: '@/pages/todolist',
  },

  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: '@/pages/user/login',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: '@/pages/user/register',
      },
      // 匹配不到路径自动跳转404
      {
        component: '404',
      },
    ],
  },

  // 个人主页
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: '@/pages/account/center',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: '@/pages/account/settings',
      },
      {
        component: './404',
      },
    ],
  },
  //未匹配跳转404
  {
    component: './404',
  },
];
