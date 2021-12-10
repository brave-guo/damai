let buy = new Vue({
    el:'#buy',
    data:{
        isShow:false,
        bool:false,
        condition:true,
    },
    methods: {
        show(){
            this.isShow=true
        },
        no_show(){
            this.isShow=false
        },
        go_index(){
            window.location='../html/index.html';
        },
        over(){
            this.bool=true;
            this.condition=false
        }
    }
})