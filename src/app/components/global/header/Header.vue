<template>
    <nav class="navbar navbar-light">
        <a class="navbar-brand" href="#">
          <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
        </a>
    </nav>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      title: 'My WebApp'
    }
  }
}
</script>
<style  lang="scss" scopped>
  .navbar-light {
    background-color: #609;
  }
</style>