<template>
  <div class="report-container">
    <iframe v-if="reportUrl" :title="reportTitle" :src="reportUrl" frameborder="0" allowFullScreen="true"></iframe>
    <v-row v-else no-gutters class="overflow-hidden bg-containerBg" style="min-height: 100vh">
      <v-col class="d-flex align-center justify-center">
        <div class="text-center">
          <div class="CardMediaWrapper">
            <img src="@/assets/images/maintenance/Error404.png" alt="404" />
            <div class="CardMediaBuild">
              <img src="@/assets/images/maintenance/TwoCone.png" alt="grid" class="w-100" />
            </div>
          </div>
          <h1 class="text-h1 mt-16">El reporte no se encontró</h1>
          <p class="text-h6 text-lightText">El reporte que buscas fue movido, eliminado, <br />renombrado, o nunca existió!</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { reportsData } from '@/types/reportsData';

const route = useRoute();

const defaultReport = { title: 'Reporte no encontrado', url: '' };

const normalizeKey = (key: string | undefined) => key?.toLowerCase().replace(/ /g, '-');

const currentReport = computed(() => {
  const reportId = normalizeKey(route.params.reportId as string);
  const detailId = normalizeKey(route.params.detailId as string);

  if (reportId && detailId) {
    const workspace = reportsData.workspaces.find((w) => normalizeKey(w.title) === reportId);

    if (workspace) {
      const report = workspace.reports.find((r) => normalizeKey(r.name) === detailId);

      if (report) {
        return { title: report.name, url: `${workspace.urlBase}&pageName=${report.pageName}&navContentPaneEnabled=false` };
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

const isMobile = ref(window.innerWidth <= 600);
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 600;
});
</script>