<template>
    <section class="navbar-mobile-footer-wrapper">
        <navbarNavigateIcon1 />
        <navbarNavigateIcon2Vue />
        <navbarNavigateIcon3Vue />
        <navbarNavigateIcon4Vue />
        <navbarNavigateIcon5Vue />
    </section>
</template>

<script setup>
import navbarNavigateIcon1 from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon1.vue';
import navbarNavigateIcon2Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon2.vue';
import navbarNavigateIcon3Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon3.vue';
import navbarNavigateIcon4Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon4.vue';
import navbarNavigateIcon5Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon5.vue';
import navbarNavigateIcon6Vue from '@/components/Navbar-component/Navbar-Navigate-Icon-component/navbar-navigate-icon6.vue';

</script>

<style scoped>
.navbar-mobile-footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background: var(--color-set-30);
}

@media screen and (min-width: 769px) {
    .navbar-mobile-footer-wrapper {
        display: none;
    }

}
</style>