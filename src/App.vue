<template>
  <div id="app-principal">
    <app-header></app-header>
     <main class="container">
       <router-view></router-view>
     </main>
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './app/components/global/header/Header'
import AppFooter from './app/components/global/footer/Footer'

export default {
  name: 'PacksComponent',

  components: {
    AppHeader,
    AppFooter
  }
}
</script>
