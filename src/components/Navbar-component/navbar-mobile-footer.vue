<template>
    <section class="navbar-mobile-footer-wrapper" :style="{ backgroundColor: `${footerBGColor}`}">
        <navbarNavigateIcon1 />
        <navbarNavigateIcon2Vue />
        <navbarNavigateIcon3Vue />
        <navbarNavigateIcon4Vue />
        <!-- <navbarNavigateIcon5Vue /> -->
        <navbarNavigateIcon6Vue />
    </section>
</template>

<script setup>
import navbarNavigateIcon1 from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon1.vue';
import navbarNavigateIcon2Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon2.vue';
import navbarNavigateIcon3Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon3.vue';
import navbarNavigateIcon4Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon4.vue';
import navbarNavigateIcon5Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon5.vue';
import navbarNavigateIcon6Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon6.vue';

import { ref, inject, watch, onMounted } from "vue";

const footerBGColor = ref()
// const footerBGColor = ref(`var(--color-set-30)`)
const isLightMood = inject("isLightMood")

onMounted(()=>{
    if (isLightMood.value === true) {
    footerBGColor.value = `var(--color-set-30)`;
  } else if (isLightMood.value === false) {
    footerBGColor.value = `var(--color-set-31)`;
  }
})

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    footerBGColor.value = `var(--color-set-30)`;
  } else if (currentIconName === false) {
    footerBGColor.value = `var(--color-set-31)`;
  }
})

</script>

<style scoped>
.navbar-mobile-footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: max-content;
    /* background-color: var(--color-set-30); */
    z-index: 1;
}

@media screen and (min-width: 769px) {
    .navbar-mobile-footer-wrapper {
        display: none;
    }

}
</style>