<template>
    <div class="navigation-buttons">
      <div
        @click="goToPreviousPage"
        :class="{ disabled: currentIndex === 0 }"
      >
        <i class="mdi mdi-chevron-left"></i> Anterior Página
      </div>
      <div
        @click="goToNextPage"
        :class="{ disabled: currentIndex === sidebarItems.length - 1 }"
      >
        Siguiente Página <i class="mdi mdi-chevron-right"></i>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { reportsData } from '@/types/reportsData';
  
  const router = useRouter();
  const route = useRoute();
  
  const sidebarItems = [
    ...reportsData.workspaces.flatMap((workspace) =>
      workspace.reports.map((report) => ({
        title: report.name,
        to: `/dashboard/${workspace.title.toLowerCase().replace(/ /g, '-')}/${report.name.toLowerCase().replace(/ /g, '-')}`
      }))
    )
  ];
  
  const currentIndex = computed(() => {
    return sidebarItems.findIndex((item) => item.to === route.fullPath);
  });
  
  const goToPreviousPage = () => {
    if (currentIndex.value > 0) {
      router.push(sidebarItems[currentIndex.value - 1].to);
    }
  };
  
  const goToNextPage = () => {
    if (currentIndex.value < sidebarItems.length - 1) {
      router.push(sidebarItems[currentIndex.value + 1].to);
    }
  };
  </script>
  
  <style scoped>
  @import url('https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css');
  
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
  }
  
  .navigation-buttons div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    transition: color 0.3s ease;
    color: rgb(var(--v-theme-primary)); 
  }
  
  .navigation-buttons div.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .mdi {
    font-size: 24px;
    margin-right: 5px;
  }
  </style>
  