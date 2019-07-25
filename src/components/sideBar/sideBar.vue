<template>
    <a-layout-sider
            breakpoint="lg"
            collapsible
            v-model="collapsed"
            :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" style="text-align: left">
            <template v-for="item in permission_routers" v-if="!item.hidden&&item.children">
                <!--<无children的菜单类型>-->
                    <a-menu-item v-if="hasOneShowingChildren(item.children)"
                                 :key="item.path+'/'+item.children[0].path"
                                 @click="handleRoute(item.path+'/'+item.children[0].path)">
                        <a-icon v-if="item.meta&&item.meta.icon" :type="item.meta.icon"></a-icon>
                        <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
                    </a-menu-item>
                <!--<有children的菜单类型>-->
                <a-sub-menu v-else :index="item.name||item.path" :key="item.name">
                    <span slot="title">
                        <a-icon v-if="item.meta&&item.meta.icon" :type="item.meta.icon"></a-icon>
                        <span v-if="item.meta&&item.meta.title" >{{item.meta.title}}</span>
                    </span>
                    <template v-for="child in item.children" v-if="!child.hidden">
                        <!--<div :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></div>-->
                        <!--<router-link   :to="item.path+'/'+child.path" :key="child.name">-->
                            <a-menu-item :key="item.path+'/'+child.path" @click="handleRoute(item.path+'/'+child.path)">
                                <!--<svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>-->
                                <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                            </a-menu-item>
                        <!--</router-link>-->
                    </template>
                </a-sub-menu>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        computed:{
            ...mapGetters([
                'permission_routers'
            ]),
        }
    })
    export default class SideBar extends Vue{
        collapsed: boolean= true;

        hasOneShowingChildren(children:Array):boolean {
            const showingChildren = children.filter(item => {
                return !item.hidden
            })
            return showingChildren.length === 0;

        };
        handleRoute(route){
            this.$router.push({
                path:route
            })
        };
        mounted(){
            console.log(this.$store.getters.permission_routers)
        }
    }
</script>

<style lang="scss" scoped>
    .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 14px;
    }
</style>
