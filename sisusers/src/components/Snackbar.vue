<template>
  <v-snackbar :color="color" v-model="snackbarLocal">
    {{ text }}
    <template>
      <v-btn color="white" text @click="snackbarLocal = false">X</v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: String,
    color: String,
    snackbar: Boolean,
  },

  data: () => ({
    snackbarLocal: false,
  }),

  methods: {
    // fecharSnackbar: function () {
    //   this.$emit("fecharSnackbar");
    // },
  },
  watch: {
    snackbar: function (val) {
      this.snackbarLocal = this.snackbar;
    },

    snackbarLocal: function (val) {
      if (val == false) {
        this.$emit("fecharSnackbar");
      }
    },
  },
});
</script>