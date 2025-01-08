<script setup lang="ts">
import { useCustomizerStore } from '../../../stores/customizer';
import { MenuFoldOutlined } from '@ant-design/icons-vue';
import TitleHeader from './TitleHeader.vue';
import CommitDD from './CommitDD.vue';
import { useRoute } from 'vue-router';

const customizer = useCustomizerStore();
const route = useRoute();
</script>

<template>
  <v-app-bar elevation="0" height="60">
    <v-btn
      class="hidden-md-and-down text-secondary mr-3"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      size="small"
    >
      <MenuFoldOutlined :style="{ fontSize: '16px' }" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <MenuFoldOutlined :style="{ fontSize: '16px' }" />
    </v-btn>

    <TitleHeader />

    <v-spacer />

    <template v-if="route.path === '/dashboard/coordinacion-comercial' || route.path === '/dashboard/operacion-logistica'">
      <CommitDD />
    </template>
  </v-app-bar>
</template>