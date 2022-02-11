<template>
  <div class="right-sidebar">
    <div class="sidebar-header">
      <span>Quit</span>
      <span>Personal</span>
      <img src="https://placekitten.com/300/300" alt="user" />
    </div>
    <div class="second-section-header">
      <span>Payments</span>
      <b-button size="md">Clear</b-button>
    </div>
    <div v-for="(payment, i) in payments" :key="i">
      <PaymentsCard
        :coin="payment.coin"
        :amount="payment.amount"
        :date="payment.date"
        :color="payment.color"
        :icon="payment.icon"
      />
    </div>

    <b-row class="new-transfer-button">
      <b-col cols="3">
        <span class="pencil-icon-button">
          <b-icon icon="pencil-fill"></b-icon>
        </span>
      </b-col>
      <b-col cols="9" style="color: #6960a9">
        <b-icon icon="plus"></b-icon>
        <span class="transfer_text">New Transfer</span>
      </b-col>
    </b-row>
    <WalletsTable />
  </div>
</template>

<script>
import PaymentsCard from "./PaymentsCard.vue";
import WalletsTable from "./WalletsTable.vue";
export default {
  components: {
    PaymentsCard,
    WalletsTable,
  },
  data() {
    return {
      payments: [
        {
          coin: "LTC",
          amount: "15.08",
          date: "09/28/2020 19:22",
          icon: "cash",
          color: "#f7896f",
        },
        {
          coin: "LINK",
          amount: "956.96",
          date: "09/28/2020 19:22",
          icon: "hexagon",
          color: "#3DE2C6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.right-sidebar {
  flex: 2;
  background-color: #f9faff;
  padding: 20px 30px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header span {
  color: #939394;
  font-weight: 600;
  cursor: pointer;
}

.sidebar-header img {
  height: 50px;
  width: 50px;
  border-radius: 10px;
  cursor: pointer;
}

.second-section-header {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.second-section-header span {
  font-size: 2rem;
  font-weight: bold;
}

.second-section-header button {
  background-color: #fcfcfe;
  color: #000;
  border: none;
  font-size: 0.8rem;
  font-weight: bold;
  width: 20%;
}

.new-transfer-button {
  margin: 20px 3px;
  background-color: #d8d7eb;
  padding: 15px 4px;
  border-radius: 10px;
  cursor: pointer;
}

.transfer_text {
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 10px;
}

.pencil-icon-button {
  background-color: #fff;
  color: #1f7dfb;
  padding: 10px;
  border-radius: 10px;
}
</style>