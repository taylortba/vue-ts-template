/**
* Created by TaylorTang on 2019/7/2.
*/

<template>
    <a-spin :spinning="spinning">
    <a-layout style="min-height: 100vh">
        <side-bar ></side-bar>
        <a-layout >
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
            <!--<a-layout-footer>Footer</a-layout-footer>-->
        </a-layout>
    </a-layout>
    </a-spin>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import SideBar from '@/components/sideBar/sideBar.vue';
    @Component({
        components: {SideBar},
        computed:{
            getMaskStatus(){
                return this.$store.getters.maskLoadingInstance;
            }
        }
    })
    export default class Layout extends Vue{
        spinning:boolean=false;

        @Watch('getMaskStatus')
        handleSpinning(){
            this.spinning=this.$store.getters.maskLoadingInstance
        }
    }
</script>

<style lang="scss" scoped>

</style>
