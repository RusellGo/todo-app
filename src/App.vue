<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Q 待办事项！</h1>
      <div class="input-add">
        <input type="text" />
        <button>
          <i class="plus"></i>
        </button>
      </div>
      <div class="filters">
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <div class="todo-list">
        <div class="todo-item">
          <label for="todo1">
            <input type="checkbox" id="todo1" />
            Todo1
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label for="todo2">
            <input type="checkbox" id="todo2" />
            Todo2
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label for="todo3">
            <input type="checkbox" id="todo3" />
            Todo3
            <span class="check-button"></span>
          </label>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
