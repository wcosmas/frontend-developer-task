<template>
  <div class="stat-crousel">
    <div class="item-carousel">
      <div v-for="(stat, i) in stats" :key="i">
        <StatCard
          :coin="stat.coin"
          :amount="stat.amount"
          :dollars="stat.dollars"
          :stat_image="stat.stat_image"
          :color="stat.color"
        />
      </div>
    </div>
    <SliderIndexPanel />
  </div>
</template>

<script>
import StatCard from "./StatCard.vue";
import SliderIndexPanel from "./SliderIndexPanel.vue";
export default {
  components: {
    StatCard,
    SliderIndexPanel,
  },
  data() {
    return {
      stats: [
        {
          coin: "Bitcoin",
          amount: "0.2231345 BTC",
          dollars: "11,032.24",
          stat_image: "../assets/bitcoin-logo.png",
          color: "#fdedd5",
        },
        {
          coin: "Ethereum",
          amount: "10.612356 ETH",
          dollars: "1242.31",
          stat_image: "../assets/ethereum.png",
          color: "#FDE5F9",
        },
        {
          coin: "Litecoin",
          amount: "120.235 LTC",
          dollars: "37,747.78",
          stat_image: "../assets/litecoin.png",
          color: "#B7E0E9",
        },
      ],
    };
  },
};
</script>

<style scoped>
.stat-crousel {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}

.item-carousel {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
