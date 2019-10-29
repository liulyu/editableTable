<!--
  desc：可编辑表格公共组件
  author：liubo
-->
<template>
    <div class=''>
        <el-col class="table-show-handle">
            <el-button @click="handldAdd"    type="primary" plain size="mini">新增</el-button>
            <el-button @click="setCurrent"   type="primary" plain size="mini">保存</el-button>
            <el-button @click="handldDelete" type="primary" plain size="mini">删除</el-button>
        </el-col>
        <el-table :data="tableData" class="tb-edit" size="mini" width="100%"  :header-cell-style="{background:'#ededed'}" highlight-current-row @row-dblclick="handleCurrentChange" ref="singleTable" @select="handleSelect">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column :label="item.label" width="item.width" v-for="(item,index) in list" :key="index">
                <template slot-scope="scope">
                    <el-input size="small" v-model="scope.row[item.model]" :placeholder="item.placeholder" @change="handleEdit(scope.$index, scope.row)" v-if="item.type==='text'"></el-input>
                    <el-date-picker
                        v-model="scope.row[item.model]"
                        type="datetime"
                        v-if="item.type==='date'"
                        :placeholder="item.placeholder">
                    </el-date-picker>
                     <span v-if="item.type==='date'">{{changeDate(scope.row[item.model])}}</span>
                     <span v-if="item.type==='text'">{{scope.row[item.model]}}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
    return {
        selection:[]
    };
},
computed: {
    
},
watch: {},
props:{
    list:{
        type:Array
    },
    tableData:{
        type:Array
    }
},
methods: {
    handldAdd(){
        this.$emit("tableAdd")
    },
    handldDelete(){
         this.$confirm('请确定是否删除选中内容?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$emit("tableDelete")
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
    },
    handleSelect(selection,row){
        this.selection=selection
    },
    handleCurrentChange(){},
    handleEdit(){},
    handleDelete(index, row) {
        console.log(index, row);
    },
    setCurrent(){
        this.$refs.singleTable.setCurrentRow();
    },
    changeDate(date){
        if(!date){
            return 
        }
        var fullDate=new Date(date);
        return fullDate.getFullYear()+"-"+this.formatDate((parseInt(fullDate.getMonth())+1))+"-"+this.formatDate(fullDate.getDate())+" "+
        this.formatDate(fullDate.getHours())+":"+this.formatDate(fullDate.getMinutes())+":"+this.formatDate(fullDate.getSeconds())
    },
    formatDate(date){
        if(date.toString().length<2){
            return "0"+date
        };
        return date
    }
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
    .tb-edit /deep/ .el-input {
            display: none
        }
    .tb-edit /deep/ .current-row .el-input {
        display: block
    }
    .tb-edit /deep/ .current-row .el-input+span {
        display: none
    }
    .table-show-handle{
        height: 40px;
        line-height: 40px;
        text-align: left
    }
</style>