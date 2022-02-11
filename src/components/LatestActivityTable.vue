<template>
  <div class="activity-table">
    <div class="table-header">
      <div class="header-title">
        <span>Latest Activity</span>
        <span>Updated 12 minutes ago</span>
      </div>
      <div class="edit-button">
        <span>edit</span>
      </div>
      <div class="table-actions">
        <span class="settings-button">
          <b-icon icon="gear" class="icon_style"></b-icon>
        </span>
        <span class="add-button" @click="openModal">
          <b-icon icon="plus" class="icon_style"></b-icon>
        </span>
      </div>
    </div>
    <div class="table-body">
      <div v-for="(activity, i) in $store.state.activities" :key="i">
        <ActivityTableItem
          :service="activity.service"
          :service_icon="activity.service_icon"
          :service_icon_color="activity.service_icon_color"
          :color="activity.color"
          :service_type="activity.service_type"
          :wallet="activity.wallet"
          :wallet_type="activity.wallet_type"
          :date="activity.date"
          :date_note="activity.date_note"
          :amount="activity.amount"
          :amount_wallet="activity.amount_wallet"
          :amount_note="activity.amount_note"
        />
      </div>
    </div>
    <BillPaymentModal
      :modalShow="modalShow"
      :closeModal="closeModal"
      :openModal="openModal"
    />
  </div>
</template>

<script>
import ActivityTableItem from "./ActivityTableItem.vue";
import BillPaymentModal from "./BillPaymentModal.vue";
import { fetchActivities } from "../utils/apis";
export default {
  components: {
    ActivityTableItem,
    BillPaymentModal,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    openModal() {
      this.modalShow = !this.modalShow;
    },
    closeModal() {
      this.modalShow = false;
    },
  },
  async created() {
    let data = await fetchActivities();
    this.$store.dispatch("updateActivitiesState", data);
  },
};
</script>

<style scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.header-title {
  display: flex;
  flex-direction: column;
}
.header-title span:nth-child(1) {
  font-size: 2rem;
  font-weight: bold;
}

.header-title span:nth-child(2) {
  color: #737a82;
  font-size: 1rem;
  font-weight: 500;
}

.edit-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
}

.edit-button span:nth-child(1) {
  color: #848a91;
  text-decoration: underline;
}

.table-actions {
  display: flex;
  align-items: center;
}

.icon_style {
  width: 25px;
  height: 25px;
}

.settings-button {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #f7f7f9;
  color: #b7bbc0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}

.add-button {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52489d;
  color: #fff;
  cursor: pointer;
}

.table-body {
  width: 100%;
  margin-top: 20px;
}
</style>