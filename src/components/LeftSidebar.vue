<template>
  <div class="left-sidebar">
    <div class="logo-section">
      <img src="../assets//logo_new.png" alt="logo" />
      <h1 class="logo-text">GND CRYP</h1>
    </div>
    <div class="dashboard-icons-top">
      <div v-for="(item, i) in top_icons" :key="i">
        <DashboardIcons
          :icon="item.icon"
          :text="item.text"
          :active="item.active"
        />
      </div>
    </div>
    <div class="dashboard-icons-bottom">
      <div v-for="(item, i) in bottom_icons" :key="i">
        <DashboardIcons
          :icon="item.icon"
          :text="item.text"
          :active="item.active"
        />
      </div>
    </div>
    <div class="barner-section">
      <img src="../assets//barner.png" alt="barner" style="cursor: pointer" />
    </div>
  </div>
</template>

<script>
import DashboardIcons from "./DashboardIcons.vue";

export default {
  components: {
    DashboardIcons,
  },
  data() {
    return {
      top_icons: [
        {
          icon: "grid-fill",
          text: "Dashboard",
          active: "true",
        },
        {
          icon: "calculator",
          text: "Calculator",
          active: "false",
        },
        {
          icon: "wallet",
          text: "Wallet",
          active: "false",
        },
        {
          icon: "wallet-fill",
          text: "Savings",
          active: "false",
        },
        {
          icon: "cash",
          text: "Currencies",
          active: "false",
        },
        {
          icon: "person",
          text: "Account",
          active: "false",
        },
      ],
      bottom_icons: [
        {
          icon: "lightning",
          text: "Upcoming",
          active: "false",
        },
        {
          icon: "wallet",
          text: "Food",
          active: "false",
        },
        {
          icon: "smartwatch",
          text: "Health",
          active: "false",
        },
        {
          icon: "person",
          text: "Account",
          active: "false",
        },
      ],
    };
  },
};
</script>


<style scoped>
.left-sidebar {
  flex: 1.4;
  background-color: #f9f9f9;
  border-right: 1px solid #f3f4f5;
}

.logo-section {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
}

.dashboard-icons-top {
  margin: 15px 15px 10px 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}

.dashboard-icons-bottom {
  margin: 50px 15px 10px 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
}
.barner-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
