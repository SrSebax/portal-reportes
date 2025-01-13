<template>
  <div class="report-title">
    Reportes PowerBI{{ reportTitle }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { reportsData } from '@/types/reportsData';

const route = useRoute();

const capitalize = (str: string) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

const reportTitle = computed(() => {
  const reportId = route.params.reportId as string;
  const detailId = route.params.detailId as string;

  const workspace = reportsData.workspaces.find(
    w => w.title.toLowerCase().replace(/ /g, '-') === reportId
  );

  if (workspace) {
    const report = workspace.reports.find(
      r => r.name.toLowerCase().replace(/ /g, '-') === detailId
    );

    if (report) {
      return ` - ${workspace.title} / ${capitalize(report.name.toLowerCase())}`;
    }
  }

  return '';
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