<template>
  <v-layout row justify-center>
    <v-dialog v-model="showDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-text>{{message}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="btnClick('YES')">{{btnSubmitDisplay}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import {
    SWITCH_DIALOG
  } from '../../store/const-name.js'
  /**
   * write a component's description
   */
  export default {
    /**
     * @description
     * @returns {any}
     */
    data() {
      return {
        btnSubmitDisplay: this.$t('yes')
      }
    },
    methods: {
      btnClick(btnString) {
        this.$store.dispatch(SWITCH_DIALOG, {})
      }
    },
    computed: {
      showDialog: {
        get() {
          return this.$store.state.AlertDialog.alertDialog
        },
        set(value) {
          this.$store.dispatch({
            type: SWITCH_DIALOG
          })
        }
      },
      title: {
        get() {
          return this.$store.state.AlertDialog.title
        }
      },
      message: {
        get() {
          return this.$store.state.AlertDialog.message
        }
      }
    }
  }
</script>

<style scoped>

</style>