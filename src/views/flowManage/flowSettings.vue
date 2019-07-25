<template>
    <div class="flow-settings">
        <h1>This is an flow page</h1>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator';
    import {getInfo} from "../../api";

    @Component()
    export default class FlowSettings extends Vue{

        getPersonInfo(){
            return getInfo()
        }
        async mounted(){
            try{
                let res=await this.getPersonInfo();
                console.log(res)
            }catch (e) {
                console.log(e)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
