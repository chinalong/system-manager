<template>
  <div class="filterColumns">
    <Table
      :columns="columns"
      :data="data"
      :show-header="true"
      :disabled-hover="true"
      :border="true"></Table>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Table,
    Button,
    Input,
    Select,
    Option
  } from 'iview';

  Vue.component('Table', Table);
  Vue.component('Button', Button);
  Vue.component('Input', Input);
  Vue.component('Select', Select);
  Vue.component('Option', Option);
  export default {
    name: "FilterTable",
    props: {
      filterColumns: Array,
      search: Array
    },
    data() {
      return {
        columns: [],
        data: [{}]
      }
    },
    mounted: function () {
      this.init();
    },
    methods: {
      init() {
        let vm = this;
        const data = this.filterColumns;
        const columnsTitle = [];
        const defaultPlaceholder = '请输入';
        for (let i = 0, length = data.length; i <= length - 1; i++) {
          let filter = data[i].filter;
          if (filter) {
            if (filter.type == 'Input') {
              columnsTitle.push({
                title: data[i].title,
                width: 200,
                key: data[i].key,
                render: function (h, params) {
                  return h('div', [
                    h('Input', {
                      props: {type: 'text', search: true, placeholder: defaultPlaceholder + data[i].title},
                      on: {
                        'on-search': function (val) {
                          vm.checkSearch(data[i].key, val);
                        }
                      }
                    })
                  ]);
                }
              });
            } else if (filter.type == 'Select') {
              columnsTitle.push({
                title: data[i].title,
                width: 200,
                key: data[i].key,
                render: function (h, params) {
                  let optionRender = [];
                  for (let index in filter.option) {
                    optionRender.push(h('Option', {
                      props: {
                        value: filter.option[index].value,
                        label: filter.option[index].name
                      }
                    }));
                  }
                  return h('div', [
                    h('Select', {
                      on: {
                        'on-change': function (val) {
                          vm.checkSearch(data[i].key, val);
                        }
                      }
                    }, optionRender)
                  ]);
                }
              });
            }
          }
        }
        this.columns = columnsTitle;
      },
      checkSearch: function (key, value) {
        let checkSearch = this.search;
        let checkedBool = false;
        if (checkSearch.length > 0) {
          checkSearch.forEach(function (item) {
            if (item.key == key) {
              item.value = value;
              checkedBool = true;
            }
          });
          if (!checkedBool) {
            checkSearch.push({key: key, value: value});
          }
        } else {
            checkSearch.push({key: key, value: value});
        }


        this.$emit("search", checkSearch);
      }

    }
  }
</script>

<style scoped>

</style>
