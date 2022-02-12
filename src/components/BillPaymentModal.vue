<template>
  <div class="bill-payment">
    <b-modal
      centered
      hide-header-close
      hide-header
      hide-footer
      v-model="modalShow"
      body-class="p-0"
      validated
      size="sm"
    >
      <div class="header-section">
        <span>Bill Payment</span>
      </div>
      <b-form @submit="onSubmit" style="width: 100%" novalidate validated>
        <div class="body-section">
          <b-form-group
            id="service-group"
            label="Select Service"
            label-for="input-3"
            style="width: 100%"
            invalid-feedback="Service is Required"
          >
            <b-form-select
              id="service-select"
              v-model="form.service"
              :options="services"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="wallet-group"
            label="Select Wallet"
            label-for="input-3"
            style="width: 100%"
            class="group-margin"
            invalid-feedback="Wallet is required"
          >
            <b-form-select
              id="wallet-select"
              v-model="form.wallet"
              :options="wallets"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="amount-group"
            label="Amount"
            label-for="input-amount"
            class="group-margin"
            invalid-feedback="Amount is required"
          >
            <b-form-input
              id="input-amount"
              v-model="form.amount"
              type="number"
              min="1"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="footer-section">
          <b-button
            variant="outline-danger"
            class="cancel-button"
            @click="closeModal"
            >Cancel</b-button
          >
          <b-button type="submit" class="pay-buton">Pay</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { postActivity, filterService } from "../utils/apis";
export default {
  props: ["modalShow", "openModal", "closeModal"],
  data() {
    return {
      form: {
        service: null,
        wallet: null,
        amount: "",
      },
      services: [
        { text: "Select Service", value: null },
        "Insuarance",
        "Electricity",
      ],
      wallets: [
        { text: "Select Wallet", value: null },
        "BTE",
        "DAI",
        "XRP",
        "USDT",
      ],
    };
  },

  methods: {
    async onSubmit(event) {
      event.preventDefault();
      let randomId = Math.floor(Math.random() * 101);
      const filterRes = await filterService(this.form.service);
      if (filterRes.status == 200) {
        let filteredService = filterRes.data;
        let data = {
          id: randomId,
          service: filteredService[0].service,
          service_icon: filteredService[0].service_icon,
          service_icon_color: filteredService[0].service_icon_color,
          color: filteredService[0].color,
          service_type: filteredService[0].service_type,
          wallet: this.form.wallet + " " + "Wallet",
          wallet_type: "Personal account",
          date: "7 Jun, 21",
          date_note: "Last Payment",
          amount: this.form.amount,
          amount_wallet: this.form.wallet,
          amount_note: "Balance",
        };

        const res = await postActivity(data);
        if (res.status == 201) {
          this.$store.dispatch("addActivity", data);
          this.closeModal();
          this.onReset();
        } else {
          alert("An Error occurred, Try Again!!");
          this.onReset();
        }
      }
    },
    onReset() {
      this.form = {
        service: null,
        wallet: null,
        amount: "",
      };
    },
  },
};
</script>

<style scoped>
.header-section {
  width: 100%;
  height: 10%;
  background-color: #52489d;
  color: #fff;
  padding: 3%;
  text-align: center;
}

.header-section span {
  font-size: 1.5rem;
  font-weight: bold;
}

.body-section {
  width: 100%;
  padding: 10px 20px;
}
select {
  width: 100%;
  padding: 10px;
  border-color: #ced4da;
  border-radius: 10px;
}

select::placeholder {
  color: gray;
}

input {
  border-radius: 10px;
}

.group-margin {
  margin-top: 10px;
}
.footer-section {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 15px;
}

.footer-section button:nth-child(2) {
  width: 10%;
}

.pay-buton {
  width: 100px !important;
  background-color: #52489d !important;
  color: #fff !important;
}

.pay-buton:hover {
  background-color: #52489d !important;
  color: #fff !important;
}

select:focus {
  border-color: gray !important;
}
input:focus {
  border-color: gray !important;
}

.cancel-button {
  width: 100px !important;
}
</style>