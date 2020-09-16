<template>
  <div>
    <h1>任务列表</h1>
    <p>
      任务总数：{{tasks.length}}，还有{{weiWanChengTaskNum()}}未完成，
      <input
        type="button"
        value="删除已完成"
        @click="deleteTask"
      />
    </p>
    <ul>
      <li v-for="(task,index) in tasks" :key="index">
        <input type="checkbox" v-model="task.isComplete" />
        <input
          :disabled="task.isComplete"
          class="no-border"
          :class="{complete:task.isComplete}"
          type="text"
          v-model="task.text"
        />
      </li>
    </ul>
    <input type="text" placeholder="请输入任务名" v-model="newTask" />
    <input type="button" value="添加" @click="addTask" />
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTask: "",
      tasks: [
        {
          text: "写HTML",
          isComplete: false
        },
        {
          text: "写CSS",
          isComplete: false
        },
        {
          text: "写JS交互（人机交互，和前后端交互）",
          isComplete: false
        }
      ]
    };
  },
  methods: {
    weiWanChengTaskNum() {
      let count = 0;
      this.tasks.forEach(item => {
        item.isComplete == false ? count++ : "";
      });
      return count;
    },
    addTask() {
      this.tasks.push({
        text: this.newTask,
        isComplete: false
      });
      this.newTask = "";
    },
    deleteTask() {
      let arr = [];
      for (let i in this.tasks) {
        if (this.tasks[i].isComplete == false) {
          arr.push(this.tasks[i]);
        }
      }
      this.tasks = arr;
    }
  }
};
</script>

<style scoped>
.no-border {
  border: none;
}
.complete {
  background-color: #ccc;
  text-decoration: line-through;
}
</style>