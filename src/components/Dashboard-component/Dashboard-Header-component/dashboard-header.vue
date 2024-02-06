<template>
  <section class="dashboard-header-section">
    <div class="dashboard-header-wrapper">
      <div class="dashboard-header-first-column">
        <dashboardTitleVue />
        <div class="dateFormat1"><dashboardFormat1 /></div>
      </div>
      <div class="dashboard-header-second-column">
        <dashboardInputVue />
        <div class="dateFormat"><dashboardFormat /></div>
        <dashboardNotification />
        <div class="dashboard-header-third-column">
          <dashboardUserInfo />
        </div>
      </div>
    </div>
    <!-- <div class="dateFormat2"><dashboardFormat1 /></div> -->
  </section>
</template>

<script setup>
import dashboardTitleVue from "./dashboard-title.vue";
import dashboardInputVue from "./dashboard-input.vue";
import dashboardFormat from "./dashboard-Formatt.vue";
import dashboardFormat1 from "./dashboard-Formatt.vue";
import dashboardNotification from "./dashboard-notification.vue";
import dashboardUserInfo from "./dashboard-userInfo.vue";
import { ref, inject, watch } from "vue";

const componentName = "Dashboard";

const h1Color = ref(`var(--color-set-11)`);
const inputBgColor = ref(`var(--color-set-2)`);
const isLightMood = inject("isLightMood");

watch(isLightMood, (currentAppMood, prevAppMood) => {
  if (currentAppMood === true) {
    h1Color.value = `var(--color-set-11)`;
    inputBgColor.value = `var(--color-set-2)`;
  } else {
    h1Color.value = `var(--color-set-7)`;
    inputBgColor.value = `var(--color-set-28)`;
  }
  return;
});
</script>

<style scoped>
.dateFormat2 {
  display: none;
}
.dateFormat1 {
  display: block;
}
.dateFormat {
  display: none;
}

.dashboard-header-section {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid var(--color-set-32);
  padding: 0.5rem 1.25rem;
  gap: 1rem;
}
.dashboard-header-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dashboard-header-first-column {
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;
}
.dashboard-header-second-column {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: flex-end;
  gap: 0.25rem;
  padding-left: 1rem;
}

@media screen and (max-width: 512px) {
  .dateFormat2 {
    display: block;
  }
  .dateFormat1 {
    display: none;
  }
  .dateFormat {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .dashboard-header-third-column {
    display: none;
  }
}
@media screen and (min-width: 769px) {
  .dateFormat2 {
    display: none;
  }
  .dateFormat1 {
    display: none;
  }
  .dateFormat {
    display: block;
  }
  .dashboard-header-section {
    width: 100%;
    height: 5.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--color-set-32);
    padding: 1.25rem;
  }

  .dashboard-header-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dashboard-header-second-column {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.25rem;
  }
  .dashboard-header-third-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
}
</style>
