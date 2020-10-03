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
* {
  box-sizing: border-box;
  margin: 0;
  border: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: rgb(203, 210, 240);
}
.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}

/* 添加框 */
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}
.input-add input {
  width: 100%;
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  color: #626262;
}
.input-add button {
  position: absolute;
  right: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: -webkit-linear-gradient(#c0a5f3, #7f95f7);
  /* background: -webkit-linear-gradient(left bottom, red, yellow); */
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
}
.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}

/* 过滤项 */
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}
.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}
.filters .filter.active {
  color: #6b719c;
  transform: scale(1.2);
}

/* 待办事项列表 */
.todo-list {
  display: grid;
  row-gap: 14px;
}
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}
.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}
.todo-item label span.check-button {
  position: absolute;
  top: 0;
}
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}
.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}
.todo-item input {
  margin-right: 16px;
  opacity: 0;
}
.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
</style>
