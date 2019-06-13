Vue.component('tabs',{
    template: ' <div class="tabs">\
                    <div class="tabs-bar">\
                    <!-- 标签页标题，使用 v-for -->\
                        <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">\
                            {{item.label}}\
                        </div>\
                    </div>\
                    <div class="tabs-content">\
                    <!-- slot嵌套pane -->\
                        <slot></slot>\
                    </div>\
                </div>',
    data: function(){
        return {
            currentVlue: this.value,
            navList: []
        }
    },

    methods: {
        tabCls: function(item){
            return ['tabs-bar',{
                'tabs-bar-active': item.name === this.currentVlue
            }]
        },
        getTabs(){
            return this.$children.filter(function(item){
                return item.$options.name==='pane';
            })
        },
        updateNav(){
            this.navList = [];
            var _this = this;

            this.getTabs().forEach((pane,index) => {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });

                if(!pane.name) pane.name = index;

                if(index === 0){
                    if(!_this.currentVlue){
                        _this.currentVlue = pane.name || index;
                    }
                }
            });

            this.updateStatus();
        },
        updateStatus(){
            var tabs = this.getTabs();
            var _this = this;
            tabs.forEach(function(tab){
                return tab.show = tab.name === _this.currentVlue;
            })
        },
        handleChange: function(index){
            var nav = this.navList[index];
            var name = nav.name;
            this.currentVlue = name;
            this.$emit('input',name);
            this.$emit('on-click',name);
        }
    },
    watch: {
        value: function(val){
            this.currentVlue = val;
        },
        currentVlue: function(){
            this.updateStatus();
        }
    },
})