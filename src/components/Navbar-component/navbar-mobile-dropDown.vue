<template>
  <section
    v-if="isNavbarWrapped === true"
    class="navbar-dropDown"
    :style="{
      backgroundColor: `${bgColor}`,
      borderColor: `${bdColor}`,
      boxShadow: `${bxShadow}`,
    }"
  >
    <ul class="navbar-dropDown-container">
      <li class="navbar-dropDown-item-mode">
        <navbarNavigateIcon7Vue />
      </li>
      <hr class="major-line"/>
      <li class="navbar-dropDown-item-user">
        <dashboardUserInfo />
      </li>
      <hr class="major-line"/>

      <li :style="{ color: `${color}` }">Trends</li>
      <!-- <hr class="minor-line"/> -->
      <li :style="{ color: `${color}` }">Billings</li>
      <!-- <hr class="minor-line"/> -->
      <li :style="{ color: `${color}` }">Communities</li>
      <hr class="major-line"/>

      <li :style="{ color: `${color}` }">Support</li>
      <!-- <hr class="minor-line"/> -->
      <li :style="{ color: `${color}` }">Settings</li>
      <!-- <hr class="minor-line"/> -->
      <li :style="{ color: `${color}` }">Log out</li>
    </ul>
  </section>
</template>

<script setup>
import dashboardUserInfo from "../Dashboard-component/Dashboard-Header-component/dashboard-userInfo.vue";
import navbarNavigateIcon7Vue from "./Navbar-Navigate-Icon-component/navbar-navigate-icon7.vue";
import { ref, watchEffect, watch, onMounted, inject } from "vue";

const isLightMood = inject("isLightMood");
const isNavbarWrapped = inject("isNavbarWrapped");
const color = ref();
const bgColor = ref();
const bxShadow = ref();
const bdColor = ref();

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-30)`;
    bdColor.value = `var(--color-set-3)`;
    color.value = `var(--color-set-11)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-4)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    color.value = `var(--color-set-30)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-3-i)`;
  }
});

onMounted(() => {
  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-30)`;
    bdColor.value = `var(--color-set-3)`;
    color.value = `var(--color-set-11)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-4)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    color.value = `var(--color-set-30)`;
    bxShadow.value = `0 0 8px 4px var(--color-set-3-i)`;
  }
});
</script>

<style scoped>
.navbar-dropDown {
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 1rem 2rem 1rem;
  top: 5.25rem;
  width: 18rem;
  border-radius: .5rem;

  .navbar-dropDown-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .major-line {
      background-color: var(--color-set-29);
    }
    /* .minor-line {
      height: 1px;
      background-color: var(--color-set-37);
    } */
  }

  .navbar-dropDown-item-mode {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    /* background: transparent; */
  }

  li {
    list-style: none;
  }
}

@media screen and (min-width: 768px) {
  .navbar-dropDown {
    display: none;
  }
}
</style>
