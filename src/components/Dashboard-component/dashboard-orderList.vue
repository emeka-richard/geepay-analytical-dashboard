<template>
  <section class="dashboard-orderList-wrapper">
    <div class="dashboard-orderList-top">
      <h3>Last Order</h3>
      <button>See All</button>
    </div>
    <section class="dashboard-orderList-table">
      <header class="dashboard-orderList-table-header">
        <p class="table-header-first">Name</p>
        <p class="table-header-second">Date</p>
        <p class="table-header-third">Amount</p>
        <p class="table-header-fourth">Status</p>
        <p class="table-header-fifth">Invoice</p>
      </header>
      <ul class="dashboard-orderList-table-list">
        <li
          v-for="item in orderedList"
          :key="item.id"
          class="dashboard-orderList-table-list-item"
        >
          <div class="list-item-first">
            <img :src="item.img" alt="avatar" />
            <p>{{ item.name }}</p>
          </div>
          <p class="list-item-second">{{ item.date }}</p>
          <p class="list-item-third">${{ item.amount }}</p>
          <p class="list-item-fourth" ref="statusItem">{{ item.status }}</p>
          <div class="list-item-fifth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                fill="#292D32"
              />
              <path
                d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                fill="#292D32"
              />
              <path
                d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                fill="#292D32"
              />
              <path
                d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                fill="#292D32"
              />
            </svg>
            <p>View</p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import orderUser1 from "@/assets/imgs/orderUser1.png";
import orderUser2 from "@/assets/imgs/orderUser2.png";
import orderUser3 from "@/assets/imgs/orderUser3.png";
import orderUser4 from "@/assets/imgs/orderUser4.png";
import orderUser5 from "@/assets/imgs/orderUser5.png";

const statusItem = ref();

onMounted(() => {
  const statusItemArr = statusItem.value;
  statusItemArr.forEach((status) => {
    const isRefund = status["innerText"].includes("Refund");
    if (isRefund) {
      status.classList.replace("list-item-fourth", "list-item-fourth-refund");
    }
  });
});

const orderedList = [
  {
    id: "marcus_bergson",
    img: orderUser1,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "80,000",
    status: "Paid",
  },
  {
    id: "jaydon_vaccaro",
    img: orderUser2,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "150,000",
    status: "Refund",
  },
  {
    id: "corey_schleifer",
    img: orderUser3,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "87,000",
    status: "Paid",
  },
  {
    id: "cooper_press",
    img: orderUser4,
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "100,000",
    status: "Refund",
  },
  {
    id: "phillip_lubin",
    img: orderUser5,
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "78,000",
    status: "Paid",
  },
];
</script>

<style scoped>
.dashboard-orderList-wrapper {
  width: 100%;
  /* max-width: 806px; */
  height: max-content;
  border-radius: 14px;
  border: 1px solid var(--color-set-3);
  background: var(--color-set-2);
  padding: 1.125rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1.25rem;
}
.dashboard-orderList-table-header {
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .table-header-first {
    width: 100%;
    max-width: 216px;
    flex-shrink: 0;
    color: var(--60, #9ca4ab);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  .table-header-second {
    width: 100%;
    max-width: 116px;
    flex-shrink: 0;
    color: var(--60, #9ca4ab);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  .table-header-third {
    width: 100%;
    max-width: 120px;
    flex-shrink: 0;
    color: var(--60, #9ca4ab);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .table-header-fourth {
    width: 100%;
    max-width: 95px;
    flex-shrink: 0;
    color: var(--60, #9ca4ab);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .table-header-fifth {
    width: 100%;
    max-width: 80px;
    flex-shrink: 0;
    color: var(--60, #9ca4ab);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
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
    width: 100%;
    max-width: 216px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .list-item-first p {
    color: #3a3f51;
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
  .list-item-second {
    width: 100%;
    max-width: 116px;
    color: var(--Neutral-500, #737373);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .list-item-third {
    width: 100%;
    max-width: 120px;
    color: var(--Main-Colors-Secondary, #0d062d);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  .list-item-fourth {
    width: 100%;
    max-width: 95px;
    color: #34caa5;
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
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
    color: var(--Main-Colors-Secondary, #0d062d);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
}
</style>
