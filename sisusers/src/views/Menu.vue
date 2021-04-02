<template>
  <v-main>
    <g-menu :menu="menu"></g-menu>
    <router-view @showSnackbar="showSncakbar" @showLoading="loading" @showMessage="showMsg"></router-view>
  </v-main>
</template>

<script src="../controller/MenuController.ts" lang="ts" >
</script>
