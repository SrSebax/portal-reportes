<template>
  <v-alert v-if="isMobileAndPortrait" type="info" class="fixed-bottom">
    Para obtener una vista más grande de este informe, gire el teléfono a la orientación horizontal.
  </v-alert>
</template>

<script setup lang="ts">
defineProps({
  isMobileAndPortrait: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.fixed-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
