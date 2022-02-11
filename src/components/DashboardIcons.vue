<template>
  <div class="dashboard-icon">
    <div class="wrapper">
      <span :class="active === 'true' ? 'active' : 'icon-shape'">
        <b-icon :icon="icon"></b-icon>
      </span>
    </div>
    <div class="wrapper">
      <span class="icon-text">{{ text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["text", "icon", "active"],
};
</script>

<style scoped>
.dashboard-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.wrapper {
  display: flex;
  justify-content: center;
}
.icon-shape {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eceff8;
  color: #565656;
  width: 50px;
  height: 50px;
  border-radius: 7px;
}

.icon-text {
  font-size: 0.8rem;
  text-align: center;
  margin-top: 10px;
}

.active {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52489d;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 7px;
}
</style>