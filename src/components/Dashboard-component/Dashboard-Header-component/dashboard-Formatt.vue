<template>
  <div>
    <datepicker
      v-model="state.date"
      :icon-color="datePickerProps.iconColor"
      :icon-width="datePickerProps.iconWidth"
      :icon-height="datePickerProps.iconHeight"
      :format="datePickerProps.format"
      :fullMonthName="datePickerProps.fullMonthName"
    ></datepicker>
  </div>
</template>

<script setup>
      // wrapperClass="datepicker"
      // calendarClass="datepicker"
      // inputClass="datepicker"

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
});
</script>

<style>
  .vuejs3-datepicker * {
    background: var(--color-set-30-i) !important;
    border-radius: 5px !important;
  }
  .vuejs3-datepicker__value {
  background: transparent !important;
  border: none;

  &:hover {
    background-color: unset !important;
    border: 1px solid var(--color-set-22) !important;
    transition: all 200ms ease-in-out !important;
  }

  &:focus {
    background-color: unset !important;
    border: 1px solid var(--color-set-22) !important;
  }
}
</style>
