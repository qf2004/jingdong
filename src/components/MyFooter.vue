<template>
    <ul class="box">        
        <li><router-link to="/index">首页</router-link></li>
        <!-- <li><router-link to="/bookType">分类</router-link></li> -->
        <!-- <li @click="goType" >分类</li> -->
       <li><router-link :to="{name:'BookType'}">分类</router-link></li>
       <li><router-link :to="{name:'Shoppingcar'}">购物车</router-link></li>      
       <li><router-link :to="{name:'My'}">我的</router-link></li>
    </ul>
</template>
<script>

export default {
    name:"MyFooter",
    methods:{
        goType(){
            // this.$router.push("/bookType");
            this.$router.push({
                path:"/bookType"
            });
        }
    }
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