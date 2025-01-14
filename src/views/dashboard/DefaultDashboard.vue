<template>
  <div>
    <PowerBIReport />
    <BottomNavigation :isMobileAndPortrait="isMobileAndPortrait" />
    <MobileAlert :isMobileAndPortrait="isMobileAndPortrait" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import MobileAlert from './components/MobileAlert.vue';
import PowerBIReport from './components/PowerBIReport.vue';
import BottomNavigation from './components/BottomNavigation.vue';

const isMobileAndPortrait = ref(false);

const checkOrientation = () => {
  isMobileAndPortrait.value = window.innerWidth < 768 && window.innerHeight > window.innerWidth;
};

onMounted(() => {
  checkOrientation();
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkOrientation);
  window.removeEventListener('orientationchange', checkOrientation);
});
</script>
