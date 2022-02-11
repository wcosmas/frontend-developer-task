<template>
  <div class="main-content">
    <div class="search-bar">
      <b-icon icon="search"></b-icon>
      <input type="text" placeholder="Search..." />
    </div>
    <div class="welcome-words">
      <span>Hi,</span><span>mikey</span>
      <span class="badge-count">23</span>
    </div>
    <StatCarousel />
    <div class="table-toggle-icon">
      <span class="toggle-icon">
        <b-icon icon="chevron-down" class="chevron_icon"></b-icon>
      </span>
    </div>
    <LatestActivityTable />
  </div>
</template>

<script>
import StatCarousel from "./StatCarousel.vue";
import LatestActivityTable from "./LatestActivityTable.vue";
export default {
  components: {
    StatCarousel,
    LatestActivityTable,
  },
};
</script>

<style scoped>
.main-content {
  flex: 3;
  background-color: white;
  padding: 20px 50px;
}

.search-bar {
  border-radius: 30px;
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.search-bar input {
  border: none;
  flex-grow: 1;
  margin-left: 5px;
  background-color: #f7f8fa;
}
.search-bar input:focus {
  outline: none;
}

.welcome-words {
  margin-top: 20px;
  position: relative;
}

.welcome-words span:nth-child(1) {
  font-weight: 600;
  font-size: 2.5rem;
}

.welcome-words span:nth-child(2) {
  font-size: 2rem;
}

.badge-count {
  width: 22px;
  height: 22px;
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  text-align: center;
}

.table-toggle-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.toggle-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.chevron_icon {
  width: 20px;
  height: 20px;
  font-weight: bold;
}
</style>