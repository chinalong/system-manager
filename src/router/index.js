import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Main from '@/components/Main';
import MenuView from '@/components/system/menu/MenuView';
import PermissionView from '@/components/system/permission/PermissionView';
import RoleView from '@/components/system/role/RoleView';
import UserView from '@/components/system/user/UserView';

Vue.use(Router);

export default new Router({
  mode: 'history',//history去掉#，hash是有#的
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'home',
          component: Home
        }
      ],
      redirect: '/home'  //进入主页后，默认使用子路由home
    },
    {
      path: '/sys/menu',
      component: Main,
      children: [
        {
          path: 'view',
          component: MenuView
        }
      ]
    },
    {
      path: '/sys/permission',
      component: Main,
      children: [
        {
          path: 'view',
          component: PermissionView
        }
      ]
    },
    {
      path: '/sys/role',
      component: Main,
      children: [
        {
          path: 'view',
          component: RoleView
        }
      ]
    },
    {
      path: '/sys/user',
      component: Main,
      children: [
        {
          path: 'view',
          component: UserView
        }
      ]
    }

  ]
});
