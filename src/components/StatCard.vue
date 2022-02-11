<template>
  <div class="stat-card" :style="`background-color: ${color}`">
    <div class="item-1">
      <span>{{ coin }}</span>
      <b-icon icon="three-dots-vertical" style="color: black"></b-icon>
    </div>
    <div class="stat-icon">
      <Bitcoin :size="120" style="color: #fefaf2" v-if="coin === 'Bitcoin'" />
      <Ethereum
        :size="120"
        style="color: #fefaf2"
        v-else-if="coin === 'Ethereum'"
      />
      <Litecoin :size="120" style="color: #fefaf2" v-else />
    </div>
    <div class="amount">
      <span class="amount-text" style="">{{ amount }}</span>
    </div>
    <div class="amount-dollars">
      <span class="amount-dollars-text">{{ dollars }} USD</span>
    </div>
  </div>
</template>

<script>
import Bitcoin from "vue-material-design-icons/Bitcoin.vue";
import Ethereum from "vue-material-design-icons/Ethereum.vue";
import Litecoin from "vue-material-design-icons/Litecoin.vue";
export default {
  props: ["coin", "amount", "dollars", "stat_image", "color"],
  components: {
    Bitcoin,
    Ethereum,
    Litecoin,
  },
};
</script>

<style scoped>
.stat-card {
  width: 170px;
  height: 250px;
  border-radius: 7px;
  padding: 15px;
}
.item-1 {
  display: flex;
  justify-content: space-between;
}

.item-1 span {
  font-weight: bold;
}

.stat-icon {
  margin: 10px auto;
}

.amount {
  color: #3e3e7a;
}

.amount-text {
  font-size: 1.3rem;
}

.amount-dollars {
  color: #3e3e7a;
}

.amount-dollars-text {
  font-size: 0.8rem;
}
</style>