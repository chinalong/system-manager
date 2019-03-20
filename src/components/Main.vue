<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-logo" @click="defaultBread">
            <router-link to="/home">{{msg}}</router-link>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout class="SiderLayout">
        <Sider hide-trigger :style="{background: '#fff',minHeight:'280px'}">
          <!--自定义菜单组件-->
          <my-menu :breadcrumbItems="breadcrumbItems" v-on:changeBread="changedItems($event)"></my-menu>

          <!--<my-menu2 :modelData="modelData"></my-menu2>-->
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem v-for="breadcrumbItem in breadcrumbItems" :key="breadcrumbItem.title">
              {{breadcrumbItem.title}}
            </BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Layout,
    Header,
    Menu,
    MenuItem,
    MenuGroup,
    Icon,
    Sider,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Content
  } from 'iview';
  import MyMenu from './MyMenu';

  Vue.component('Layout', Layout);
  Vue.component('Header', Header);
  Vue.component('Menu', Menu);
  Vue.component('MenuItem', MenuItem);
  Vue.component('MenuGroup', MenuGroup);
  Vue.component('Icon', Icon);
  Vue.component('Sider', Sider);
  Vue.component('Submenu', Submenu);
  Vue.component('Breadcrumb', Breadcrumb);
  Vue.component('BreadcrumbItem', BreadcrumbItem);
  Vue.component('Content', Content);
  Vue.component('my-menu', MyMenu);
  export default {
    name: 'Main',
    methods: {
      changedItems: function (items) {
        this.breadcrumbItems = items;
      },
      defaultBread: function () {
        if (this.breadcrumbItems.length == 2) {
          this.breadcrumbItems.pop();
        } else if (this.breadcrumbItems.length == 3) {
          this.breadcrumbItems.pop();
          this.breadcrumbItems.pop();
        }
      }
    },
    data() {
      return {
        isCollapsed: false,
        msg: 'system-manager',
        breadcrumbItems: [
          {
            id: 0,
            title: '主页'
          }
        ],
        modelData: [
          {
            id: 1,
            title: '系统管理',
            icon: 'ios-navigate',
            child: [
              {
                id: '11',
                text: '菜单管理'
              },
              {
                id: '12',
                text: '权限管理'
              },
              {
                id: '13',
                text: '角色管理'
              },
              {
                id: '14',
                text: '用户管理'
              }
            ]
          },
          {
            id: 2,
            title: '文章管理',
            icon: 'ios-navigate',
            child: [
              {
                id: '21',
                text: '文章列表'
              },
              {
                id: '22',
                text: '创建文章'
              },
              {
                id: '23',
                text: '文章数据'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .ivu-layout-header {
    padding: 0;
  }

  .SiderLayout {

  }

</style>
