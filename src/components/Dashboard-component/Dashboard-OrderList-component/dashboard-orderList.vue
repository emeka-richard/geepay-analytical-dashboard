<template>
  <div class="dashboard-orderList-divSection">
    <section class="dashboard-orderList-wrapper">
      <dashboardEachOrder />
      <div
        class="dashboard-orderList-container"
        :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
      >
        <div class="dashboard-orderList-top">
          <h3 :style="{ color: `${headerColor}` }">Last Order</h3>
          <button>See All</button>
        </div>
        <section class="dashboard-orderList-table">
          <header class="dashboard-orderList-table-header">
            <p
              :style="{ color: `${headerTagColor}` }"
              class="table-header-first"
            >
              Name
            </p>
            <p
              :style="{ color: `${headerTagColor}` }"
              class="table-header-second"
            >
              Date
            </p>
            <p
              :style="{ color: `${headerTagColor}` }"
              class="table-header-third"
            >
              Amount
            </p>
            <p
              :style="{ color: `${headerTagColor}` }"
              class="table-header-fourth"
            >
              Status
            </p>
            <p
              :style="{ color: `${headerTagColor}` }"
              class="table-header-fifth"
            >
              Invoice
            </p>
          </header>
          <ul class="dashboard-orderList-table-list">
            <li
              v-for="item in orderList"
              :key="item.id"
              class="dashboard-orderList-table-list-item"
            >
              <div class="list-item-first">
                <img
                  :style="{ borderColor: `${imgBdColor}` }"
                  :src="item.img"
                  alt="avatar"
                />
                <p :style="{ color: `${orderNameColor}` }">{{ item.name }}</p>
              </div>
              <p class="list-item-second">{{ item.date }}</p>
              <p
                :style="{ color: `${orderAmountColor}` }"
                class="list-item-third"
              >
                ${{ item.amount }}
              </p>
              <p class="list-item-fourth" ref="statusItem">{{ item.status }}</p>
              <div @click="handleInvoiceOpen(item)" class="list-item-fifth">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                    :fill="viewSvgFill"
                  />
                  <path
                    d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                    :fill="viewSvgFill"
                  />
                  <path
                    d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                    :fill="viewSvgFill"
                  />
                  <path
                    d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                    :fill="viewSvgFill"
                  />
                </svg>
                <p :style="{ color: `${viewTagColor}`, cursor: 'pointer' }">
                  View
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, provide, inject, watch } from "vue";
import dashboardEachOrder from "./dashboard-eachOrder.vue";
import { useOrderList } from "@/pinia-store/orderListStore";
const store = useOrderList();
const orderList = store.getOrderList;

const statusItem = ref();
const isLightMood = inject("isLightMood");
const bgColor = ref();
const bdColor = ref();
const headerColor = ref();
const headerTagColor = ref();
const imgBdColor = ref();
const orderNameColor = ref();
const orderAmountColor = ref();
const viewSvgFill = ref();
const viewTagColor = ref();

const isInvoiceClosed = ref(true);
const orderItem = ref({
  id: "",
  img: "",
  name: "",
  date: "",
  amount: "",
  status: "",
});

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    headerColor.value = `var(--color-set-21)`;
    headerTagColor.value = `var(--color-set-27)`;
    imgBdColor.value = `var(--color-set-21)`;
    orderNameColor.value = `var(--color-set-10)`;
    orderAmountColor.value = `var(--color-set-26)`;
    viewSvgFill.value = `var(--color-set-36)`;
    viewTagColor.value = `var(--color-set-26)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    headerColor.value = `var(--color-set-7)`;
    headerTagColor.value = `var(--color-set-28)`;
    imgBdColor.value = `var(--color-set-7)`;
    orderNameColor.value = `var(--color-set-12)`;
    orderAmountColor.value = `var(--color-set-7)`;
    viewSvgFill.value = `var(--color-set-7)`;
    viewTagColor.value = `var(--color-set-7)`;
  }
});

onMounted(() => {
  const statusItemArr = statusItem.value;
  statusItemArr.forEach((status) => {
    const isRefund = status["innerText"].includes("Refund");
    if (isRefund) {
      status.classList.replace("list-item-fourth", "list-item-fourth-refund");
    }
  });

  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    headerColor.value = `var(--color-set-21)`;
    headerTagColor.value = `var(--color-set-27)`;
    imgBdColor.value = `var(--color-set-21)`;
    orderNameColor.value = `var(--color-set-10)`;
    orderAmountColor.value = `var(--color-set-26)`;
    viewSvgFill.value = `var(--color-set-36)`;
    viewTagColor.value = `var(--color-set-26)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    headerColor.value = `var(--color-set-7)`;
    headerTagColor.value = `var(--color-set-28)`;
    imgBdColor.value = `var(--color-set-7)`;
    orderNameColor.value = `var(--color-set-12)`;
    orderAmountColor.value = `var(--color-set-7)`;
    viewSvgFill.value = `var(--color-set-7)`;
    viewTagColor.value = `var(--color-set-7)`;
  }
});

provide("orderItem", orderItem);
provide("isInvoiceClosed", isInvoiceClosed);
provide("emitInvoiceStatus", (eventName, data) => {
  isInvoiceClosed.value = true;
});

const handleInvoiceOpen = (item) => {
  isInvoiceClosed.value = false;
  orderItem.value = item;
};
</script>

<style scoped>
.dashboard-orderList-divSection {
  width: 100%;

  height: max-content;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  /* align-items: flex-end; */
  /* justify-content: center; */
}
.dashboard-orderList-divSection::-webkit-scrollbar {
  height: 12px;
}
.dashboard-orderList-divSection::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}
.dashboard-orderList-divSection::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.dashboard-orderList-wrapper {
  width: 100%;
  min-width: 680px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
}

.dashboard-orderList-container {
  width: 100%;
  min-width: 650px;
  height: max-content;
  border-radius: 14px;
  border: 1px solid var(--color-set-3);
  background: var(--color-set-2);
  padding: 1.125rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}
.dashboard-orderList-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--color-set-21);
    font-family: "Plus Jakarta Sans";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
  }

  button {
    color: var(--color-set-5);
    text-align: center;
    font-family: "Plus Jakarta Sans";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem;
    outline: none;
    border: none;
    background: transparent;
  }
}
.dashboard-orderList-table {
  width: 100%;
  /* min-width: 650px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
}
.dashboard-orderList-table-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .table-header-first {
    min-width: 216px;
  }

  .table-header-second {
    min-width: 116px;
  }

  .table-header-third {
    min-width: 120px;
  }
  .table-header-fourth {
    min-width: 95px;
  }
  .table-header-fifth {
    min-width: 80px;
  }
  .table-header-first,
  .table-header-second,
  .table-header-third,
  .table-header-fourth,
  .table-header-fifth {
    flex-shrink: 0;
    color: var(--color-set-27);
    font-family: "Plus Jakarta Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
  }
}
.dashboard-orderList-table-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}
.dashboard-orderList-table-list-item {
  width: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  .list-item-first {
    display: flex;
    min-width: 216px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .list-item-first p {
    color: var(--color-set-10);
  }
  .list-item-first p,
  .list-item-second,
  .list-item-third,
  .list-item-fourth {
    color: var(--color-set-10);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
  .list-item-second {
    min-width: 116px;
    color: var(--color-set-9);
  }

  .list-item-third {
    min-width: 120px;
    color: var(--color-set-26);
  }

  .list-item-fourth {
    min-width: 95px;
    color: #34caa5;
  }
  .list-item-fourth-refund {
    width: 100%;
    max-width: 95px;
    color: var(--color-set-8);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .list-item-fifth {
    display: flex;
    width: 80px;
    align-items: center;
    justify-content: start;
    gap: 6px;
  }
  .list-item-fifth p {
    color: var(--color-set-26);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
}
</style>
