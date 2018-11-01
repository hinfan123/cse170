<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "./styles/styles.scss";
@import "./styles/helpers.scss";
</style>


<script>
export default {
  name: 'app'
}
</script>