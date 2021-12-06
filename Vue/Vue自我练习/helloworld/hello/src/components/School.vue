<template>
    <div class="demo">
        <h2>学校名字：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我出好康的</button>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'清华大学',
            address:'北京'
        }
    },
    methods: {
        showName(){
            alert(this.name);
        }
    },
}
</script>

<style>
    .demo{
        background: aqua;
    }
</style>