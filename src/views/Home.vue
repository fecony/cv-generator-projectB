<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/pages/home';
</style>
