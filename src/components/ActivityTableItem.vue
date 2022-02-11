<template>
  <div class="activity-table">
    <div class="item-1">
      <span class="icon-wrapper" :style="`background-color:${color}`">
        <b-icon
          :icon="service_icon"
          class="item_icon"
          :style="`color: ${service_icon_color}`"
        ></b-icon>
      </span>
      <div class="item-1-text">
        <span>{{ service }}</span>
        <span>{{ service_type }}</span>
      </div>
    </div>
    <div class="item-2">
      <span>{{ wallet }}</span>
      <span>{{ wallet_type }}</span>
    </div>
    <div class="item-3">
      <span>{{ date }}</span>
      <span>{{ date_note }}</span>
    </div>
    <div class="item-4">
      <span>{{ amount }} {{ amount_wallet }}</span>
      <span>{{ amount_note }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "service",
    "service_icon",
    "service_icon_color",
    "color",
    "service_type",
    "wallet",
    "wallet_type",
    "date",
    "date_note",
    "amount",
    "amount_wallet",
    "amount_note",
  ],
};
</script>

<style scoped>
.activity-table {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 10px;
}

.item-1 {
 grid-column: 1 /  span 2;
  display: flex;
}

.item_icon {
  width: 20px;
  height: 20px;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-1-text {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}

.item-1-text span:nth-child(1) {
  font-size: 0.9rem;
  font-weight: bold;
}

.item-1-text span:nth-child(2) {
  font-size: 0.8rem;
}

.item-2 {
  display: flex;
  flex-direction: column;
}

.item-2 span:nth-child(1) {
  font-size: 0.9rem;
  font-weight: bold;
}

.item-2 span:nth-child(2) {
  font-size: 0.8rem;
}

.item-3 {
  display: flex;
  flex-direction: column;
}

.item-3 span:nth-child(1) {
  font-size: 0.9rem;
  font-weight: bold;
}

.item-3 span:nth-child(2) {
  font-size: 0.8rem;
}

.item-4 {
  display: flex;
  flex-direction: column;
}

.item-4 span:nth-child(1) {
  font-size: 0.9rem;
  font-weight: bold;
}

.item-4 span:nth-child(2) {
  font-size: 0.8rem;
}
</style>