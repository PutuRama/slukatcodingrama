<template>
  <v-menu
    top
    offset-y
    content-class="elevation-9"
    open-on-hover
    close-delay="750"
    :close-on-content-click="false"
    eager
    transition="slide-y-reverse-transition"
    left
    nudge-top="15"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="error"
        class="product-upgrade-to-pro"
        href="https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/landing"
        target="_blank"
        rel="nofollow"
        v-bind="attrs"
        v-on="on"
      >
        +Add
      </v-btn>
    </template>
  </v-menu>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
  z-index: 4;
  bottom: 5%;
  right: 48px;
  position: fixed;
  .v-application &.v-btn.v-btn--is-elevated {
    box-shadow: 0 1px 20px 1px #ff4c51 !important;
    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
