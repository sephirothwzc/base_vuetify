<template>
  <v-layout row justify-center>
    <v-dialog v-model="showDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-text>{{content}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="btnClick('$cancel')">{{btnCancelDisplay}}</v-btn>
          <v-btn flat @click="btnClick('$ok')">{{btnSubmitDisplay}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  /**
   * write a component's description
   */
  export default {
    props: {
      title: {
        type: String,
        default: 'system title'
      },
      content: {
        type: String,
        default: 'confirm ?',
        required: true
      },
      btnSubmitDisplay: {
        type: String,
        default: 'YES'
      },
      btnCancelDisplay: {
        type: String,
        default: 'NO'
      }
    },
    data() {
      return {
        showDialog: true
      }
    },
    methods: {
      btnClick(key) {
        this.showDialog = false
        // 如果你点击确定按钮，会使promise resolve, params可以在then中获取到
        this.$emit(key, this.$el)
      }
    }
  }
</script>

<style scoped>

</style>
