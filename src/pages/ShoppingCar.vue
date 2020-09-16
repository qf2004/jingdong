<template>
  <div>
    <table>
      <tr>
        <td>
          <input type="checkbox" v-model="checkAll" @change="checkAllFn" />
        </td>
        <td>编号</td>
        <td>名字</td>
        <td>价格</td>
        <td>数量</td>
        <td>金额</td>
        <td>操作</td>
      </tr>
      <tr v-for="(goods,index) in goodslist" :key="goods.id">
        <td>
          <input type="checkbox" v-model="goods.checked" @change="backCheckFn" />
        </td>
        <td>{{goods.id}}</td>
        <td>{{goods.name}}</td>
        <td>{{goods.price}}</td>
        <td>
          <input type="button" value=" - " @click="reduceFn(index)" />
          {{goods.count}}
          <input type="button" value=" + " @click="addFn(index)" />
        </td>
        <td>{{goods.price*goods.count}}</td>
        <td>
          <input type="button" value="删除" @click="delFn(index)" />
        </td>
      </tr>
    </table>
    <hr />
    <p>总计：{{totalMoneyFn()}}</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      checkAll: false, //绑定的是全选
      goodslist: [
        { checked: false, id: "01001", name: "铅笔", price: 1.5, count: 5 },
        { checked: false, id: "01002", name: "钢笔", price: 35, count: 2 },
        { checked: false, id: "01003", name: "毛笔", price: 25, count: 1 },
        { checked: true, id: "01004", name: "签字笔", price: 5, count: 2 },
        { checked: false, id: "01005", name: "圆珠笔", price: 2, count: 5 }
      ]
    };
  },
  methods: {
    reduceFn(idx) {
      if (this.goodslist[idx].count > 1) {
        this.goodslist[idx].count--;
      }
    },
    addFn(idx) {
      this.goodslist[idx].count++;
    },
    checkAllFn() {
      this.goodslist.forEach(item => {
        item.checked = this.checkAll;
      });
    },
    backCheckFn() {
      let isAllChecked = true; //假定全部选中
      for (let i = 0; i < this.goodslist.length; i++) {
        if (!this.goodslist[i].checked) {
          isAllChecked = false;
          break;
        }
      }
      this.checkAll = isAllChecked;
    },
    totalMoneyFn() {
      let money = 0;
      this.goodslist.forEach(goods => {
        if (goods.checked) {
          money += goods.price * goods.count;
        }
      });
      return money;
    },
    delFn(idx) {
      if (confirm("亲，您真的要删除吗？")) {
        this.goodslist.splice(idx, 1);
      }
    }
  }
};
</script>

<style>
</style>