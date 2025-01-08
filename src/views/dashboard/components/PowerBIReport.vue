<template>
  <div class="report-container">
    <iframe
      :title="reportTitle"
      :src="reportUrl"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const reports: Record<string, { title: string; url: string }> = {
  'operacion-logistica': {
    title: import.meta.env.VITE_OPERACION_LOGISTICA_TITLE,
    url: import.meta.env.VITE_OPERACION_LOGISTICA_URL
  },
  'coordinacion-comercial': {
    title: import.meta.env.VITE_COORDINACION_COMERCIAL_TITLE,
    url: import.meta.env.VITE_COORDINACION_COMERCIAL_URL
  }
};

const route = useRoute();

const defaultReport = { title: '', url: '' };

const currentReport = computed(() => {
  const key = route.params.reportId;

  if (typeof key === 'string' && key in reports) {
    return reports[key];
  }

  return defaultReport;
});

const reportTitle = computed(() => currentReport.value.title || 'Reporte Desconocido');
const reportUrl = computed(() => currentReport.value.url || '');
</script>