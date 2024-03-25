<template>
  <Suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <spinner v-if="loading" />
    </template>
  </Suspense>
</template>
<script setup>
import {Suspense, ref} from "vue"
import spinner from "./spinner.vue"
import { router, loading } from './router/router';

// const customFallback = ref(spinner);
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
