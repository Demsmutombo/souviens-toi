<template>
  <nav class="bg-white/95 backdrop-blur-sm shadow-md py-4 px-6 lg:px-8 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <div class="flex items-center">
          <div class="w-12 h-12 lg:w-14 lg:h-14 mr-3 lg:mr-4">
            <img src="/souv.png" alt="Souviens-Toi" class="w-full h-full object-contain">
          </div>
          <h1 class="text-2xl lg:text-3xl font-light text-gray-900">Souviens-Toi</h1>
        </div>
      </router-link>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex space-x-8 xl:space-x-10">
        <router-link to="/" class="text-gray-700 hover:text-primary transition-colors font-light text-base lg:text-lg">Accueil</router-link>
        <router-link to="/histoire" class="text-gray-700 hover:text-primary transition-colors font-light text-base lg:text-lg">Histoire</router-link>
        <router-link to="/voix" class="text-gray-700 hover:text-primary transition-colors font-light text-base lg:text-lg">Voix</router-link>
        <router-link to="/message" class="text-gray-700 hover:text-primary transition-colors font-light text-base lg:text-lg">Message</router-link>
        <router-link to="/memoire" class="text-gray-700 hover:text-primary transition-colors font-light text-base lg:text-lg">Mémoire</router-link>
      </div>
      
      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button @click="toggleMobileMenu" class="text-gray-700 hover:text-primary focus:outline-none p-3 rounded-xl hover:bg-gray-100 transition-colors">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t shadow-xl">
        <div class="flex flex-col space-y-2 px-6 py-6">
          <router-link to="/" @click="closeMobileMenu" class="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-light py-4 px-5 rounded-xl text-lg flex items-center">
            <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Accueil
          </router-link>
          <router-link to="/histoire" @click="closeMobileMenu" class="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-light py-4 px-5 rounded-xl text-lg flex items-center">
            <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Histoire
          </router-link>
          <router-link to="/voix" @click="closeMobileMenu" class="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-light py-4 px-5 rounded-xl text-lg flex items-center">
            <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
            Voix
          </router-link>
          <router-link to="/message" @click="closeMobileMenu" class="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-light py-4 px-5 rounded-xl text-lg flex items-center">
            <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Message
          </router-link>
          <router-link to="/memoire" @click="closeMobileMenu" class="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-light py-4 px-5 rounded-xl text-lg flex items-center">
            <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Mémoire
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
