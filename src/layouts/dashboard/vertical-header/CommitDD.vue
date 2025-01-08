<script setup lang="ts">
import { ref } from 'vue';
import { CheckCircleOutlined, MessageOutlined} from '@ant-design/icons-vue';

const isActive = ref(true);

function deactivateItem() {
  isActive.value = false;
}
</script>

<template>
  <v-menu :close-on-content-click="false" offset="6, 0">
    <template v-slot:activator="{ props }">
      <v-btn icon class="text-secondary ml-sm-2 ml-1 mr-5" color="darkText" rounded="sm" size="small" v-bind="props">
        <v-badge :content="isActive ? '2' : '0'" color="primary" offset-x="-4" offset-y="-5">
          <MessageOutlined :style="{ fontSize: '20px' }" />
        </v-badge>
      </v-btn>
    </template>
    <v-sheet rounded="md" width="387" class="notification-dropdown">
      <div class="pa-4">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-subtitle-1 mb-0">Comentarios</h6>
          <v-btn
            variant="text"
            color="success"
            icon
            rounded
            size="small"
            @click="deactivateItem()"
            :class="isActive ? 'd-block' : 'd-none'"
          >
            <CheckCircleOutlined :style="{ fontSize: '16px' }" />
            <v-tooltip aria-label="tooltip" activator="parent" location="bottom" :content-class="isActive ? 'custom-tooltip' : 'd-none'">
              <span class="text-caption">Marcar como leídos</span>
            </v-tooltip>
          </v-btn>
        </div>
      </div>
      <v-divider></v-divider>
      <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 265px">
        <v-list class="py-0" lines="two" aria-label="notification list" aria-busy="true">
          <v-divider></v-divider>
          <v-list-item value="2" color="secondary" class="no-spacer">
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lightprimary" class="mr-3 py-2 text-primary">
                <MessageOutlined />
              </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0"><span style="font-weight: 600">Sofia Montes</span> comentó tu reporte de Power BI.</h6>
              <span class="text-caption">6:00 PM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">5 de agosto</p>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item value="3" color="secondary" class="no-spacer" :active="isActive">
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lighterror" class="mr-3 py-2 text-error">
                <MessageOutlined />
              </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0"><span style="font-weight: 600">Sebastian Londoño</span> encontró un error en el gráfico de barras.</h6>
              <span class="text-caption">2:45 PM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">Hace 7 horas</p>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item value="4" color="secondary" class="no-spacer">
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lightprimary" class="mr-3 py-2 text-primary">
                <MessageOutlined />
              </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0"><span style="font-weight: 600">Naty Rodriguez</span> solicitó agregar un filtro de fecha al reporte de inventario.</h6>
              <span class="text-caption">6:00 PM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">5 de agosto</p>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
      <v-divider></v-divider>
      <div class="pa-2 text-center">
        <v-btn color="primary" variant="text">Ver todo</v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>

<style lang="scss">
.v-tooltip {
  > .v-overlay__content.custom-tooltip {
    padding: 2px 6px;
  }
}
.notification-dropdown {
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>