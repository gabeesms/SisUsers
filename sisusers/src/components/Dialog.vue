<template>
  <v-dialog v-model="dialog" :persistent="persistent" :width="width">
    <v-card>
      <v-card-title primary-title persistent>{{title}}</v-card-title>

      <v-card-text>
        <slot name="text">
          <span v-html="text"></span>
        </slot>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="buttoes">
          <v-btn color="sucess" @click="fecharDialog">OK</v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    text: String,
    dialog: Boolean,
    persistent: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: "500"
    }
  },
  methods: {
    fecharDialog: function() {
      this.$emit("fecharDialog");
    }
  }
});
</script>