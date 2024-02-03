<template>
  <div
    class="dashboard-userInfo-wrapper-1"
    :style="{ backgroundColor: `${bgColor}` }"
  >
    <img
      :src="userInfo.image"
      alt="user.png"
      :style="{ borderColor: `${bdColor}` }"
    />
    <div class="dashboard-userInfo-tag">
      <p :style="{ color: `${color}` }">{{ userInfo.name }}</p>
      <small>{{ userInfo.email }}</small>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
        :fill="svgFill"
      />
    </svg>
  </div>
  <div
    class="dashboard-userInfo-wrapper-2"
    :style="{ backgroundColor: `${bgColor}` }"
  >
    <img
      :src="userInfo.image"
      alt="user.png"
      :style="{ borderColor: `${bdColor}` }"
    />
    <div class="dashboard-userInfo-tag">
      <p :style="{ color: `${color}` }">{{ userInfo.abb }}</p>
      <!-- <small>{{ userInfo.email }}</small> -->
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
        :fill="svgFill"
      />
    </svg>
  </div>
</template>

<script setup>
import userIMG from "@/assets/imgs/user-img.png";
import { ref, watchEffect, watch, onMounted, inject } from "vue";

const isLightMood = inject("isLightMood");
const color = ref(`var(--color-set-11)`);
const bgColor = ref(`var(--color-set-2)`);
const bdColor = ref(`var(--color-set-3)`);
const svgFill = ref(`var(--color-set-26)`);

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    // color.value = `var(--color-set-11)`;
    // bdColor.value = `var(--color-set-31)`;
    // svgFill.value = `var(--color-set-26)`;
    bgColor.value = `var(--color-set-2)`;
  } else if (currentIconName === false) {
    // color.value = `var(--color-set-29)`;
    // bdColor.value = `var(--color-set-30)`;
    // svgFill.value = `var(--color-set-29)`;
    bgColor.value = `var(--color-set-7)`;
  }
});

const userInfo = {
  name: "Justin Bergson",
  abb: "JB",
  email: "Justin@gmail.com",
  image: userIMG,
};
</script>

<style scoped>
.dashboard-userInfo-wrapper-1 {
  display: none;
}
.dashboard-userInfo-wrapper-2 {
  display: none;
}
@media screen and (min-width: 769px) {
  .dashboard-userInfo-wrapper-2 {
    display: flex;
    padding: 0.375rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 1.75rem;
    border: 1px solid var(--color-set-7);

    img {
      border: 1px solid;
      border-radius: 50%;
    }
  }
  .dashboard-userInfo-tag {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;

    p {
      color: var(--color-set-11);
      font-size: 1rem;
    }

    /* small {
      color: var(--color-set-13);
      font-size: 0.875rem;
    }
 */
    p {
      text-align: right;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .dashboard-userInfo-container {
    display: flex;
  }
}

@media screen and (min-width: 1000px) {
  .dashboard-userInfo-wrapper-2 {
    display: none;
  }

  .dashboard-userInfo-wrapper-1 {
    display: flex;
    padding: 0.375rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 1.75rem;
    border: 1px solid var(--color-set-7);

    img {
      border: 1px solid;
      border-radius: 50%;
    }
  }
  .dashboard-userInfo-tag {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;

    p {
      color: var(--color-set-11);
      font-size: 1rem;
    }

    small {
      color: var(--color-set-13);
      font-size: 0.875rem;
    }

    p,
    small {
      text-align: right;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .dashboard-userInfo-container {
    display: flex;
  }
}
</style>
