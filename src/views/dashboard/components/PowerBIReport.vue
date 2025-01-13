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
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { reportsData } from '@/types/reportsData';

const route = useRoute();

const defaultReport = { title: 'Reporte Desconocido', url: '' };

const normalizeKey = (key: string | undefined) => key?.toLowerCase().replace(/ /g, '-');

const currentReport = computed(() => {
  const reportId = normalizeKey(route.params.reportId as string);
  const detailId = normalizeKey(route.params.detailId as string);

  if (reportId && detailId) {
    const workspace = reportsData.workspaces.find(
      w => normalizeKey(w.title) === reportId
    );
    if (workspace) {
      const report = workspace.reports.find(
        r => normalizeKey(r.name) === detailId
      );
      if (report) {
        return { title: report.name, url: report.url };
      }
    }
  }

  return defaultReport;
});

const reportTitle = ref(currentReport.value.title);
const reportUrl = ref(currentReport.value.url);

watch(
  () => route.params,
  () => {
    reportTitle.value = currentReport.value.title;
    reportUrl.value = currentReport.value.url;
  },
  { immediate: true }
);
</script>