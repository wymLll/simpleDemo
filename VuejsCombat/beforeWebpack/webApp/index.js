
Vue.component('webapp',{
    template: '<h3>1. 请问你的性别是：</h3>\
                <div>\
                    <input type="radio" value="男" @click = "reverse()"><label>男</label>\
                     <input type="radio" value="女"><label>女</label>\
                        <input type="radio" value="保密"><label>保密</label>\
                </div>\
                <button class="button">下一步</button>\
                <button class="button">重置</button>',
    data: function(){
        return {
            sex_list:[
                {name:'男'},
                {name:'女'},
                {name:'保密'}
            ],
            hobbies: [
                {name:'看书'},
                {name:'游泳'},
                {name:'跑步'},
                {name:'看电影'},
                {name:'听音乐'}
            ],
        }
    }
})

new Vue({
    el: "#app",
    data:{
        page:1
    },
    methods: {
        reverse: function(event){
            this.checked = !this.checked;
        }
    },
})