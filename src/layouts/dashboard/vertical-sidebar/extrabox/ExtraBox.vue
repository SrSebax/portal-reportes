<script setup lang="ts">
// assets
import avatarGroup from '@/assets/images/users/avatar-group.png';
</script>

<template>
  <v-sheet rounded="md" color="gray100" class="pa-4 ExtraBox hide-menu text-center" border>
    <div class="d-flex align-center flex-column">
      <v-img :src="avatarGroup" alt="book" height="116px" width="169px" cover></v-img>
      <div class="px-3">
        <h5 class="text-h5 mb-2 line-height-none">¿Ayuda?</h5>
        <small class="text-lightText text-h6"> Obtén ayuda para resolver tu consulta</small>
      </div>
    </div>
    <div class="mt-5">
      <a
        href="#"
        class="v-btn v-theme--DefaultTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-flat primary-shadow"
        >Soporte</a
      >
    </div>
  </v-sheet>
</template>
<style lang="scss">
.ExtraBox {
  position: relative;
  overflow: hidden;
}
.line-height-none {
  line-height: normal;
}
</style>