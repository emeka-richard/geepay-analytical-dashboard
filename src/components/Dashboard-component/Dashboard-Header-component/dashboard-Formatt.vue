<template>
  <div>
    <datepicker
      v-model="state.date"
      :icon-color="datePickerProps.iconColor"
      :icon-width="datePickerProps.iconWidth"
      :icon-height="datePickerProps.iconHeight"
      :format="datePickerProps.format"
      :fullMonthName="datePickerProps.fullMonthName"
      :style="{ border: 'none'}"
      :wrapperClass="datePickerProps.wrapperClass"
    ></datepicker>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "vuejs3-datepicker";

const state = ref({
  date: new Date(),
});

const datePickerProps = ref({
  iconColor: `var(--color-set-31)`,
  iconWidth: 20,
  iconHeight: 20,
  format: "MMMM dd, yyyy",
  fullMonthName: true,
  wrapperClass: {
    backgroundColor: `var(--color-set-35)`
  }
});
</script>

<style scoped></style>
