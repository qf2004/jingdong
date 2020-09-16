<template>
  <div class="box">
      <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
      </div>
      <div>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
      </div>
  </div>
</template>

<script>

export default {
    name:"Search"
}

</script>

<style scoped>
.box{
    width: 100%;
    height: 160px;
    background-color: pink;
    overflow: auto;
}

.box>div{    
    height:80px;
    width: 480px;
    /* display: flex;
    justify-content:space-around;
    align-items: center; */

}

.box>div>span{
    display: block;
    text-align: center;
    line-height: 50px;
    width:50px;
    height: 50px;
    border-radius:50%;
    background-color: hotpink;
    margin: 15px;
    float: left;
}


</style>