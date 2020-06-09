<template>
  <div class="home">
    <el-input placeholder="Please input" v-model="input"></el-input>
    <p>{{input}}</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>

</style>
