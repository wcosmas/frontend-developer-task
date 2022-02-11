<template>
  <b-card class="payments-card">
    <div class="header-card">
      <div class="coin-name">
        <span class="rounded-button" :style="`background-color:${color}`"
          ><b-icon :icon="icon"></b-icon
        ></span>
        <span>Received {{ coin }}</span>
        <b-icon icon="chevron-down"></b-icon>
      </div>
      <span class="currency-button">+ {{ amount }} USD</span>
    </div>
    <div class="card-body-section">
      <div class="time-pane">
        <span>{{ date }}</span>
      </div>
      <div class="group-avatar">
        <b-avatar-group size="40px">
          <b-avatar
            src="https://placekitten.com/300/300"
            variant="info"
          ></b-avatar>
          <b-avatar
            src="https://placekitten.com/320/320"
            variant="dark"
          ></b-avatar>
          <b-avatar
            icon="music-note"
            style="background-color: #fedfe2; color: #fdb4bb"
          ></b-avatar>
        </b-avatar-group>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ["coin", "amount", "date", "icon", "color"],
};
</script>

<style scoped>
.payments-card {
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px 5px;
}
.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coin-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coin-name span:nth-child(2) {
  margin-right: 5px;
  font-weight: bold;
  font-size: 0.8rem;
}

.rounded-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}

.time-pane span:nth-child(1) {
  font-size: 0.9rem;
  font-weight: 600;
}

.currency-button {
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

.card-body-section {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>