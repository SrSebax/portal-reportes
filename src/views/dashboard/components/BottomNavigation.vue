<template>
  <div class="bottom-nav-bar" v-if="isMobileAndPortrait">
    <button 
      class="nav-button" 
      :disabled="!canNavigateBack" 
      @click="navigateToPreviousPage"
    >
      <span class="icon"><LeftOutlined /></span> Anterior Página
    </button>
    <div class="separator"></div>
    <button 
      class="nav-button" 
      :disabled="!canNavigateNext" 
      @click="navigateToNextPage"
    >
      Siguiente Página <span class="icon"><RightOutlined /></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { reportsData } from '@/types/reportsData';

// Props
defineProps({
  isMobileAndPortrait: {
    type: Boolean,
    required: true
  }
});

// Helpers
const router = useRouter();
const route = useRoute();

// Extraemos las rutas de los reportes
const reportRoutes = reportsData.workspaces.flatMap((workspace) => 
  workspace.reports.map((report) => ({
    path: `/dashboard/${workspace.title.toLowerCase().replace(/ /g, '-')}/${report.name.toLowerCase().replace(/ /g, '-')}`,
    name: report.name,
  }))
);

// Navegación actual y límites
const currentIndex = computed(() =>
  reportRoutes.findIndex((r) => r.path === route.path)
);
const canNavigateBack = computed(() => currentIndex.value > 0);
const canNavigateNext = computed(() => currentIndex.value < reportRoutes.length - 1);

// Métodos de navegación
const navigateToPreviousPage = () => {
  if (canNavigateBack.value) {
    router.push(reportRoutes[currentIndex.value - 1].path);
  }
};

const navigateToNextPage = () => {
  if (canNavigateNext.value) {
    router.push(reportRoutes[currentIndex.value + 1].path);
  }
};
</script>
