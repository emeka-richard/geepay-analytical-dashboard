<template>
  <section
    v-show="isInvoiceClosed === false"
    class="dashboard-orderItem-wrapper"
    :style="{ backgroundColor: `${bgColor}`, boxShadow: `${bxShadow}` }"
  >
    <div class="dashboard-orderItem-close-icon">
      <p :style="{ color: `${color}` }" @click="handleCloseInvoice">&times;</p>
    </div>
    <header>
      <h3 class="dashboard-orderItem-name" :style="{ color: `${color}` }">
        {{ orderItem.name }}
      </h3>
      <div class="dashboard-orderItem-tag">
        <p :style="{ color: `${color}` }">Purchase</p>
        <p :style="{ color: `${color}` }">Order</p>
      </div>
    </header>
    <div class="dashboard-orderItem-partner-section">
      <div class="dashboard-orderItem-partner-vendor">
        <h3 :style="{ color: `${color}` }">Vendor:</h3>
        <small :style="{ color: `${color}` }"
          >GeePay HQ, <br />
          Lagos city.</small
        >
      </div>
      <div class="dashboard-orderItem-partner-customer">
        <h3 :style="{ color: `${color}` }">Ship To:</h3>
        <small :style="{ color: `${color}` }"
          >5342 Rd, Richard's Estate, <br />
          Manchester.</small
        >
      </div>
      <div class="dashboard-orderItem-partner-info">
        <h3 :style="{ color: `${color}` }">Order ID:</h3>
        <small :style="{ color: `${color}` }">{{
          orderItem.purchaseId || "No purchase order ID"
        }}</small>
      </div>
      <div class="dashboard-orderItem-invoice-mobile-3">
        <h3 :style="{ color: `${color}` }">Amount</h3>
        <small :style="{ color: `${color}` }">{{ orderItem.amount }}</small>
      </div>
    </div>
    <div class="dashboard-orderItem-invoice-section">
      <header>
        <div class="header-A">
          <h4 class="header-1" :style="{ color: `${color}` }">Date</h4>
          <h4 class="header-2" :style="{ color: `${color}` }">Description</h4>
        </div>
        <h4 class="header-B" :style="{ color: `${color}` }">Amount</h4>
      </header>
      <section>
        <div class="item-A">
          <small class="item-1" :style="{ color: `${color}` }">{{
            orderItem.date
          }}</small>
          <small class="item-2" :style="{ color: `${color}` }">
            {{ orderItem.description || "No transaction description." }}
          </small>
        </div>
        <small class="item-B" :style="{ color: `${color}` }">{{
          orderItem.amount
        }}</small>
      </section>
    </div>
    <div class="dashboard-orderItem-orderStatus-section">
      <h4
        class="dashboard-orderItem-orderStatus-tag"
        :style="{ color: `${color}` }"
      >
        Purchase Order Status:
      </h4>
      <h4
        class="dashboard-orderItem-orderStatus-status"
        :style="{ color: `${statusColor}` }"
      >
        {{ orderItem.status }}
      </h4>
    </div>
  </section>
</template>

<script setup>
import { ref, inject, onMounted, watch } from "vue";

const statusItem = ref();
const isLightMood = inject("isLightMood");
const orderItem = inject("orderItem");
const isInvoiceClosed = inject("isInvoiceClosed");
const emitInvoiceStatus = inject("emitInvoiceStatus");
const bgColor = ref();
const color = ref();
const bxShadow = ref();
const statusColor = ref();

onMounted(() => {
  if (isLightMood.value === true) {
    color.value = `var(--color-set-11)`;
    bgColor.value = `var(--color-set-2)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-4)`;
  } else if (isLightMood.value === false) {
    color.value = `var(--color-set-30)`;
    bgColor.value = `var(--color-set-31)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-3-i)`;
  }
});

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    color.value = `var(--color-set-11)`;
    bgColor.value = `var(--color-set-2)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-4)`;
  } else if (currentIconName === false) {
    color.value = `var(--color-set-30)`;
    bgColor.value = `var(--color-set-31)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-3-i)`;
  }
});
watch(orderItem, (newInvoiceStatus, prevInvoiceStatus) => {
  statusColor.value =
    orderItem.value.status === "Refund"
      ? `var(--color-set-8)`
      : `var(--color-set-5)`;
});

const handleCloseInvoice = () => {
  emitInvoiceStatus("emit-invoiceStatus", true);
};
</script>

<style scoped>
.dashboard-orderItem-wrapper {
  position: absolute;
  justify-self: end;
  font-family: "Plus Jakarta Sans";
  width: 100%;
  min-width: 200px;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 3rem;
  gap: 2rem;
  border-radius: 0.5rem;
}
.dashboard-orderItem-close-icon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 0.375rem 1rem;
    font-size: 20px;
    border: 1px solid var(--color-set-27);
    border-radius: 0.5rem;
    cursor: pointer;
  }
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dashboard-orderItem-name {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dashboard-orderItem-tag {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .dashboard-orderItem-name,
  .dashboard-orderItem-tag {
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
  }
}

.dashboard-orderItem-partner-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dashboard-orderItem-partner-vendor,
  .dashboard-orderItem-partner-customer,
  dashboard-orderItem-partner-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .dashboard-orderItem-invoice-mobile-3 {
    display: none;
  }
}
.dashboard-orderItem-invoice-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--color-set-27);
  border-bottom: 1px solid var(--color-set-27);
  gap: 0.5rem;
  padding: 0.125rem 0;

  header,
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 2rem; */

    .header-A,
    .item-A {
      width: max-content;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .header-1,
      .item-1 {
        min-width: 120px;
      }
    }
    .header-B,
    .item-B {
      width: 100px;
    }
  }
}
.dashboard-orderItem-orderStatus-section {
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  .dashboard-orderItem-orderStatus-status {
    min-width: 100px;
  }
}

@media screen and (max-width: 768px) {
  .dashboard-orderItem-wrapper {
    padding: 1rem;
    padding-bottom: 2.5rem;
    width: 300px;
    gap: 1rem;

    .dashboard-orderItem-partner-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      .dashboard-orderItem-invoice-mobile-3 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    header {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      .dashboard-orderItem-name {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dashboard-orderItem-tag {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .dashboard-orderItem-name,
      .dashboard-orderItem-tag {
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 24px;
      }
    }
  }

  .dashboard-orderItem-invoice-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border-top: 1px solid var(--color-set-27);
    border-bottom: 1px solid var(--color-set-27); */
    gap: 0.5rem;
    padding: 0.125rem 0;
    display: none;

    header,
    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* gap: 2rem; */

      .header-A,
      .item-A {
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        .header-1,
        .item-1 {
          min-width: 120px;
        }
      }
      .header-B,
      .item-B {
        width: 100px;
      }
    }
  }

  .dashboard-orderItem-orderStatus-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
