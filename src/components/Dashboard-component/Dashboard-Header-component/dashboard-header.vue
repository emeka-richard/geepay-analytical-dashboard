<template>
  <section class="dashboard-header-section">
    <div class="dashboard-header-wrapper">
      <div class="dashboard-header-title-container">
        <h2 :style="{color: `${h1Color}`}">{{ componentName }}</h2>
      </div>
      <div class="dashboard-header-second-column">
        <div class="dashboard-header-input-container" :style="{backgroundColor: `${inputBgColor}`}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z"
              fill="#78828A"
            />
          </svg>
          <input name="search-bar" type="text" placeholder="Search..." />
        </div>
        <dashboardFormat />
        <dashboardNotification />
        <dashboardUserInfo />
      </div>
    </div>
  </section>
</template>

<script setup>
import dashboardFormat from "./dashboard-Formatt.vue";
import dashboardNotification from "./dashboard-notification.vue";
import dashboardUserInfo from "./dashboard-userInfo.vue";
import { ref, inject, watch } from "vue"

const componentName = "Dashboard";

const h1Color = ref(`var(--color-set-11)`)
const inputBgColor = ref(`var(--color-set-2)`)
const isLightMood = inject("isLightMood")

watch(isLightMood, (currentAppMood, prevAppMood)=>{
  if(currentAppMood === true){
    h1Color.value = `var(--color-set-11)`
    inputBgColor.value = `var(--color-set-2)`
  } else {
    h1Color.value = `var(--color-set-7)`
    inputBgColor.value = `var(--color-set-28)`
  }
  return;
})

</script>

<style scoped>
.dashboard-header-section {
  width: 100%;
  height: 5.75rem;
  display: flex;
  /* max-width: 85rem; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-set-32);
  padding: 1.25rem;
}

.dashboard-header-wrapper {
  width: 100%;
  /* max-width: 82.5rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dashboard-header-title-container {
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    /* color: var(--color-set-11); */
    font-family: "Plus Jakarta Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
  }
}
.dashboard-header-second-column {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
}
.dashboard-header-input-container {
  display: flex;
  width: 100%;
  max-width: 21.8rem;
  height: 3rem;
  padding-left: 1rem;
  padding-right: .5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-set-7);
  /* background: var(--color-set-2); */

  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    color: var(--color-set-11);
    font-family: "Inter";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    border-radius: inherit;
    background: none;
  }
}
</style>
