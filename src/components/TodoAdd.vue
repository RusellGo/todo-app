<template>
  <div class="input-add">
    <input type="text" />
    <button>
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
};
</script>

<style scoped>
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
</style>