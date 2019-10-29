<!--
  desc：功能描述
  author：liubo
-->
<template>
    <div class=''>
        <editableTable :list='list' :tableData="tableData" @tableDelete="handleDelete('table','tableData')" ref="table" @tableAdd="handleAdd('tableData')"></editableTable>
    </div>
</template>

<script>
import editableTable from "../components/EditableTable"
import {editableTableMixins} from "../mixins/EditableTable"
export default {
//import引入的组件需要注入到对象中才能使用
components: {editableTable},
data() {
//这里存放数据
  return {
    list:[{label:"姓名",width:"",placeholder:"请输入内容",type:"text",model:"name"},{label:"日期",width:"",placeholder:"请输入内容",type:"date",model:"date"},
    {label:"地址",width:"",placeholder:"请输入内容",type:"text",model:"address"},],
    tableData:[{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
  };
},
computed: {},
watch: {},
mixins:[editableTableMixins],
props:{},
methods: {

},
created() {

},
mounted() {

},
beforeCreate() {},
beforeMount() {},
beforeUpdate() {},
updated() {},
beforeDestroy() {},
destroyed() {},
activated() {},
}
</script>
<style  scoped>

</style>