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
@media screen and (max-width: 512px) {
  .vuejs3-datepicker__icon {
    display: none !important;
  }

  .vuejs3-datepicker * {
    border-radius: 5px !important;
    font-family: "Plus Jakarta Sans" !important;
    font-size: clamp(0.75rem, 4vw, 1rem) !important;
    font-style: normal !important;
    font-weight: 200 !important;
    align-items: center !important;
    justify-content: flex-start !important;
    border: 1px solid var(--color-set-29) !important;
  }
  .vuejs3-datepicker__content {
    border: none !important;
  }
}
.vuejs3-datepicker * {
  border-radius: 5px !important;
  font-family: "Plus Jakarta Sans" !important;
  font-size: clamp(0.75rem, 4vw, 1rem) !important;
  font-style: normal !important;
  font-weight: 200 !important;
  align-items: center !important;
  justify-content: flex-start !important;
}
.vuejs3-datepicker__value {
  background: var(--color-set-30-i) !important;
  border: none;
  padding: 0.25rem !important;

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
