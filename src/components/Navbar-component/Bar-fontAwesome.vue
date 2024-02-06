<template>
    <XMarkIcon v-if="isDropDown === true" @click="handleDropDown(false)" class="icon" :style="{ color: `${iconColor}`}" />
    <Bars3Icon v-else-if="isDropDown === false" @click="handleDropDown(true)" class="icon" :style="{ color: `${iconColor}`}" />
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/20/solid'
import { ref, inject } from 'vue';

const iconColor = ref(`var(--color-set-5)`)
const isDropDown = ref(false)

const emitNavStatus = inject("emitNavStatus")

const handleDropDown = (e)=>{
    isDropDown.value = e
    emitNavStatus("nav-status", e)
}
</script>

<style scoped>

.icon {
    width: 45px;
    height: 45px;
}

@media screen and (min-width: 769px) {
    .icon {
        display: none;
    }
}
</style>