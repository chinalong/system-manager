<template>
  <div>
    <FilterTable :filterColumns="columns" v-on:search="onSearch($event)" :search="search"></FilterTable>
    <div slot="toolButtons">
      <Button type="primary">新增</Button>
      <Button type="error">删除</Button>
    </div>

    <Table :columns="columns"
           :data="data"
           @on-select="onSelect"
           :border="true"
           :stripe="true"></Table>
    <Page :current="1"
          :total="100"
          :page-size-opts="[10,20,30]"
          :placement="'top'"
          :show-total="true"
          :show-elevator="true"
          :show-sizer="true"
          :prev-text="'上一页'"
          :next-text="'下一页'"
          :stripe="true"
          :border="true"
          @on-change="changeData"></Page>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Table,
    Page,
    Button
  } from 'iview';
  import FilterTable from '../../util/FilterTable';
  import http from '../../../http.js';

  Vue.component('Table', Table);
  Vue.component('Page', Page);
  Vue.component('Button', Button);
  Vue.component('FilterTable', FilterTable);
  export default {
    name: "UserView",
    data() {
      return {
        msg: '用户列表',
        search: [],
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '账号',
            key: 'id'
          },
          {
            title: '账号',
            key: 'account',
            filter: {
              type: 'Input'
            }
          },
          {
            title: '姓名',
            key: 'name',
            filter: {
              type: 'Input'
            }
          },
          {
            title: '性别',
            key: 'sex',
            filter: {
              type: 'Select',
              option: [
                {
                  value: -1,
                  name: '全部'
                },
                {
                  value: 0,
                  name: '女'
                },
                {
                  value: 1,
                  name: '男'
                }
              ]
            }
          },
          {
            title: '联系电话',
            key: 'telephone',
            filter: {
              type: 'Input'
            }
          },
          {
            title: '操作',
            key: 'action',
            render: function (h, params) {
              return h('div', [
                h('Button', {props: {type: 'info'}, style: {marginRight: '5px'}}, '查看'),
                h('Button', {props: {type: 'primary'}, style: {marginRight: '5px'}}, '编辑'),
                h('Button', {props: {type: 'error'}, style: {marginRight: '5px'}}, '删除')
              ]);
            }
          }
        ],
        data: []
      }
    },
    mounted: function () {
      const data = [];
      for (let i = 1; i <= 10; i++) {
        data.push({
          id: i,
          account: 'admin' + i,
          name: '管理员' + i,
          sex: i % 2 == 0 ? '男' : '女',
          telephone: '15912345678'
        });
      }
      this.data = data;
      http.fetchGet("/api/user/find", null).then(function (response) {
        console.log(response);
      });
    },
    methods: {
      loadData: function () {
        const data = [];
        for (let i = 1; i <= 10; i++) {
          data.push({
            id: Math.floor(Math.random() * 100 + 1),
            account: 'admin' + Math.floor(Math.random() * 100 + 1),
            name: '管理员' + Math.floor(Math.random() * 100 + 1),
            sex: i % 2 == 0 ? '男' : '女',
            telephone: '15912345678'
          });
        }
        return data;
      },
      changeData: function () {
        this.data = this.loadData();
      },
      onSelect: function (selection, row) {

      },
      onSearch: function (search) {
        alert(JSON.stringify(search));
      }

    }
  }
</script>

<style scoped>

</style>
