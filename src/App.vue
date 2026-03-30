<template>
  <div id="app" class="bg-gray-50">
    <Loader :isLoading="isLoading && !isMemoirePage" />
    <Navbar v-show="!isLoading" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Loader
  },
  data() {
    return {
      isLoading: true,
      hasLoadedOnce: false
    }
  },
  computed: {
    isMemoirePage() {
      return this.$route.name === 'Memoire'
    }
  },
  mounted() {
    // Afficher le loader seulement au premier chargement (sauf page Mémoire)
    if (!this.isMemoirePage) {
      setTimeout(() => {
        this.isLoading = false
        this.hasLoadedOnce = true
      }, 2000)
    } else {
      this.isLoading = false
      this.hasLoadedOnce = true
    }
  },
  watch: {
    '$route'() {
      // Ne pas afficher le loader sur la page Mémoire
      if (this.isMemoirePage) {
        this.isLoading = false
      }
    }
  }
}
</script>
