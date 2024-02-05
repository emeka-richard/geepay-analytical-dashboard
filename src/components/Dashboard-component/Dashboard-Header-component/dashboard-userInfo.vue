<template>
  <!-- template 1 -->
  <div
    class="dashboard-userInfo-wrapper-1"
    :style="{ backgroundColor: `${bgColor}` }"
    @click="handleDropDown"
  >
    <img
      :src="userInfo.image"
      alt="user.png"
      :style="{ borderColor: `${bdColor}` }"
    />
    <div class="dashboard-userInfo-tag">
      <p :style="{ color: `${color}` }">{{ userInfo.name }}</p>
      <small>{{ userInfo.emailABV }}</small>
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

  <!-- template 2 -->
  <div
    class="dashboard-userInfo-wrapper-2"
    :style="{ backgroundColor: `${bgColor}` }"
    @click="handleDropDown"
  >
    <img
      :src="userInfo.image"
      alt="user.png"
      :style="{ borderColor: `${bdColor}` }"
    />
    <div class="dashboard-userInfo-tag">
      <h3 :style="{ color: `${color}` }">{{ userInfo.abb }}</h3>
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

  <!-- template 3 : User Details @Drop Down -->
  <div
    v-if="!isNotDropDown"
    class="dashboard-userDetails-1"
    :style="{ backgroundColor: `${bgColor}` }"
  >
    <img
      :src="userInfo.image"
      alt="user.png"
      :style="{ borderColor: `${bdColor}` }"
    />
    <div class="dashboard-userDetails-tag">
      <h4 :style="{ color: `${color}` }">{{ userInfo.name }}</h4>
      <small>{{ userInfo.email }}</small>
    </div>
    <button>View Profile</button>
  </div>
</template>

<script setup>
import userIMG from "@/assets/imgs/emeka-user.png";
import { ref, watchEffect, watch, onMounted, inject } from "vue";

const isLightMood = inject("isLightMood");
const color = ref();
const bgColor = ref();
const bdColor = ref();
const svgFill = ref();

const isNotDropDown = ref(true);

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    color.value = `var(--color-set-11)`;
    svgFill.value = `var(--color-set-26)`
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    color.value = `var(--color-set-30)`;
    svgFill.value = `var(--color-set-30)`
  }
});

const userInfo = {
  name: "Emeka Omeje",
  abb: "EO",
  emailABV: "chukwuemeka...",
  email: "chukwuemekaomeje.rich@gamil.com",
  image: userIMG,
};

const handleDropDown = () => {
  isNotDropDown.value = !isNotDropDown.value;
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
  .dashboard-userInfo-wrapper-1 {
    display: none;
  }

  .dashboard-userInfo-wrapper-2 {
    display: flex;
    padding: 0.375rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 2.5rem;
    /* border-radius: 1.75rem; */
    border: 1px solid var(--color-set-7);

    img {
      width: 44px;
      height: 44px;
      border: 1px solid;
      border-radius: 50%;
    }
  }
  .dashboard-userInfo-tag {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;

    h3 {
      color: var(--color-set-11);
      font-size: 1rem;
    }
    h3 {
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

  .dashboard-userDetails-1 {
    z-index: 1;
    position: absolute;
    top: 5.25rem;
    width: 100%;
    max-width: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 8px 4px var(--color-set-4);
    /* transition: all 1000ms ease-in; */

    img {
      width: 200px;
      height: 200px;
      /* border: 1px solid var(--color-set-3); */
      border: 1px solid var(--color-set-30);
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .dashboard-userDetails-tag {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    button {
      outline: none;
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;

      &:hover {
        border: 1px solid var(--color-set-17);
      }
    }
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
    border-radius: 2.5rem;
    /* border-radius: 1.75rem; */
    border: 1px solid var(--color-set-7);

    img {
      width: 44px;
      height: 44px;
      border: 1px solid var(--color-set-30);
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
      /* color: var(--color-set-13); */
      color: var(--color-set-37);
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
