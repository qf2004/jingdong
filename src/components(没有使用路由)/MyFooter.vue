<template>
    <ul class="box">
        <li>首页</li>
        <li>分类</li>
        <li>购物车</li>
        <li>我的</li>
    </ul>
</template>

<script>

export default {
    name:"MyFooter"
}

</script>

<style scoped>

.box{
    margin-top:10px; 
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;
}

li{
    flex:1;
    border: 1px solid black;
    text-align: center;
    line-height: 35px;
    background-color:skyblue;
    box-sizing: border-box;
}


</style>