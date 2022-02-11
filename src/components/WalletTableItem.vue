<template>
  <div class="wallet-item">
    <div class="left-item">
      <span class="item-icon" :style="`background-color: ${color}`"
        ><b-icon :icon="icon" :style="`color: ${icon_color}`"></b-icon
      ></span>
      <div class="left-item-text">
        <span>{{ coin }}</span>
        <span>{{ coin_fullname }}</span>
      </div>
    </div>
    <div class="right-item">
      <span>{{ percentage }}%</span>
      <span>{{ new_percentage }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "coin",
    "coin_fullname",
    "percentage",
    "new_percentage",
    "color",
    "icon",
    "icon_color",
  ],
};
</script>

<style scoped>
.wallet-item {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}

.left-item {
  display: flex;
  justify-content: space-between;
}

.item-icon {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.left-item-text {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.left-item-text span:nth-child(1) {
  font-weight: bold;
}
.left-item-text span:nth-child(2) {
  font-size: 0.8rem;
}

.right-item {
  display: flex;
  flex-direction: column;
}

.right-item span:nth-child(1) {
  font-weight: bold;
}
.right-item span:nth-child(2) {
  font-size: 0.8rem;
  color: #b2edde;
}
</style>