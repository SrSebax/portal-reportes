<script setup lang="ts"></script>

<template>
  <v-row no-gutters class="overflow-hidden bg-containerBg" style="min-height: 100vh">
    <v-col class="d-flex align-center justify-center">
      <div class="text-center">
        <div class="CardMediaWrapper">
          <img src="@/assets/images/maintenance/Error404.png" alt="404" />
          <div class="CardMediaBuild">
            <img src="@/assets/images/maintenance/TwoCone.png" alt="grid" class="w-100" />
          </div>
        </div>
        <h1 class="text-h1 mt-16">Página No Encontrada</h1>
        <p class="text-h6 text-lightText">La página que buscas fue movida, eliminada, <br />renombrada, o nunca existió!</p>
        <v-btn variant="flat" color="primary" class="mt-2" to="/dashboard"> Volver al Inicio</v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss">

</style>
