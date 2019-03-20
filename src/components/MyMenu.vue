<template id="menu-template">
  <Menu active-name="11" theme="light" width="auto" :open-names="['1']">
    <Submenu v-for="submenu in modelData" :key="submenu.id" :submenu="submenu" :name="submenu.id">
      <template slot="title">
        <Icon :type="submenu.icon"></Icon>
        {{submenu.title}}
      </template>
      <MenuItem v-for="menu in submenu.child"
                :key="menu.id" :menu="menu"
                :name="menu.id"
                :to="menu.url"
                @click.native="menuClick(menu.id,submenu.id,submenu.title,menu.text)">{{menu.text}}
      </MenuItem>
    </Submenu>
  </Menu>
</template>

<script>


  export default {
    name: "MyMenu",
    props: {
      breadcrumbItems: {type: Array}
    },
    data() {
      return {
        msg: 'ss',
        modelData: [
          {
            id: 1,
            title: '系统管理',
            icon: 'ios-navigate',
            child: [
              {
                id: '11',
                text: '菜单管理',
                url: '/sys/menu/view'
              },
              {
                id: '12',
                text: '权限管理',
                url: '/sys/permission/view'
              },
              {
                id: '13',
                text: '角色管理',
                url: '/sys/role/view'
              },
              {
                id: '14',
                text: '用户管理',
                url: '/sys/user/view'
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
    },
    methods: {
      menuClick: function (id, submenuId, submenuTitle, menuTile) {
        if (this.breadcrumbItems.length == 2) {
          this.breadcrumbItems.pop();
        } else if (this.breadcrumbItems.length == 3) {
          this.breadcrumbItems.pop();
          this.breadcrumbItems.pop();
        }
        this.breadcrumbItems.push({id: submenuId, title: submenuTitle});
        this.breadcrumbItems.push({id: id, title: menuTile});
        this.$emit("changeBread", this.breadcrumbItems);
      }
    }

  }
</script>

<style scoped>

</style>
