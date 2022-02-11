<template>
  <div class="wallet-table">
    <div style="table-header">
      <span class="header-text"> Wallets </span>
    </div>
    <div v-for="wallet in wallets" :key="wallet.coin">
      <WalletTableItem
        :coin="wallet.coin"
        :coin_fullname="wallet.coin_fullname"
        :percentage="wallet.percentage"
        :new_percentage="wallet.new_percentage"
        :color="wallet.color"
        :icon="wallet.icon"
        :icon_color="wallet.icon_color"
      />
    </div>
  </div>
</template>

<script>
import WalletTableItem from "./WalletTableItem";
export default {
  components: {
    WalletTableItem,
  },
  data() {
    return {
      wallets: [
        {
          coin: "BTE",
          coin_fullname: "Bitcoin",
          percentage: "37",
          new_percentage: "2.5",
          color: "#fef3f1",
          icon: "cash",
          icon_color: "#fb9584",
        },
        {
          coin: "DAI",
          coin_fullname: "Dai",
          percentage: "23",
          new_percentage: "+7.2",
          color: "#FCF6DF",
          icon: "handbag",
          icon_color: "#EBCA52",
        },
        {
          coin: "XRP",
          coin_fullname: "Ripple",
          percentage: "20",
          new_percentage: "-3.1",
          color: "#E1F4F8",
          icon: "wallet",
          icon_color: "#61C1D9",
        },
        {
          coin: "USDT",
          coin_fullname: "Tether",
          percentage: "17",
          new_percentage: "+1.8",
          color: "#E2F8F2",
          icon: "server",
          icon_color: "#A7EAD8",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wallet-table {
  margin-top: 50px;
}

.table-header {
  margin-bottom: 10px;
}

.header-text {
  font-size: 2rem;
  font-weight: bold;
}
</style>