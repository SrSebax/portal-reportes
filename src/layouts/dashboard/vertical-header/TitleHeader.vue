<template>
  <div class="report-title">
    Reportes PowerBi{{ reportTitle }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const reports = {
  'operacion-logistica': ' - Operación Logística',
  'coordinacion-comercial': ' - Coordinación Comercial',
};

const route = useRoute();

const reportTitle = computed(() => {
  const key = route.params.reportId as string;
  return reports[key as keyof typeof reports];
});
</script>

<style scoped>
.report-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--v-theme-darkText);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 1rem;
}

@media (max-width: 600px) {
  .report-title {
    font-size: 1rem;
  }
}
</style>