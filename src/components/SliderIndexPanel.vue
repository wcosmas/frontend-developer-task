<template>
  <div class="index-panel">
    <span class="current-index"></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.index-panel {
  width: 40%;
  height: 8px;
  background-color: #f7f8fa;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.current-index {
  width: 20%;
  height: 8px;
  border-radius: 10px;
  background-color: #3a41f8;
}
</style>