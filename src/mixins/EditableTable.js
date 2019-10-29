// 配合可编辑表格组件进行使用
export  const editableTableMixins={
    data(){
        return {
            
        }
    },
     methods:{
        handleDelete(tableRef,data){
            let dId=this.$refs[tableRef].selection;
            let tThis=this[data];
            for (let i = 0; i < dId.length; i++) {
                const ele = dId[i];
                for (let j = 0; j < tThis.length; j++) {
                    const ele1 = tThis[j];
                    if(ele.id===ele1.id){
                        this[data].splice(j,1)
                    }
                }
            }
        },
        handleAdd(table){
            this[table].push({id:new Date().getTime()})
        },
     },
     mounted(){
     },
}