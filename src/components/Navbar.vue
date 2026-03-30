<template>
  <nav class="bg-white/95 backdrop-blur-lg shadow-lg py-4 px-6 lg:px-8 sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo spirituel -->
      <router-link to="/" class="flex items-center group">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-gold to-primary-ocre rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div class="relative w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-white/50">
              <img src="/souv.png" alt="Souviens-Toi" class="w-6 h-6 lg:w-8 lg:h-8 object-contain">
            </div>
          </div>
          <div class="block">
            <h1 class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-gold group-hover:to-primary-ocre transition-all duration-300">
              Souviens-Toi
            </h1>
            <p class="text-xs lg:text-sm text-gray-500 font-light hidden sm:block">La mémoire éternelle</p>
          </div>
        </div>
      </router-link>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center space-x-8">
        <router-link 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.path"
          class="relative group"
        >
          <span class="text-gray-700 hover:text-primary-gold px-3 py-2 text-sm font-medium transition-colors duration-200">
            {{ item.name }}
          </span>
          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-gold to-primary-ocre transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
        </router-link>
        
        <!-- CTA Desktop -->
        <router-link to="/histoire" class="bg-gradient-to-r from-primary-gold to-primary-ocre text-white px-4 py-2 rounded-full text-sm font-medium hover:from-primary-bordeaux hover:to-primary-gold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Explorer
        </router-link>
      </div>
      
      <!-- Mobile Menu Button - Visible on mobile and tablet -->
      <div class="flex lg:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="relative text-gray-700 hover:text-primary-gold focus:outline-none p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 z-50"
          :class="{ 'bg-primary-gold/10': mobileMenuOpen }"
        >
          <div class="w-6 h-5 flex flex-col justify-center space-y-1.5">
            <div 
              class="h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></div>
            <div 
              class="h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0' : ''"
            ></div>
            <div 
              class="h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></div>
          </div>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-xl fixed inset-x-0 top-0 z-40">
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-white/50">
              <img src="/souv.png" alt="Souviens-Toi" class="w-5 h-5 object-contain">
            </div>
            <div class="block">
              <h1 class="text-lg font-bold text-gray-900">
                Souviens-Toi
              </h1>
              <p class="text-xs text-gray-500">La mémoire éternelle</p>
            </div>
          </div>
          <button 
            @click="closeMobileMenu" 
            class="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <!-- Mobile Menu Content -->
        <div class="flex flex-col space-y-1 px-4 py-4 max-h-[70vh] overflow-y-auto">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="flex items-center space-x-4 text-gray-700 hover:text-primary-gold hover:bg-gradient-to-r hover:from-primary-gold/10 hover:to-primary-ocre/10 transition-all duration-200 font-medium py-4 px-4 rounded-xl text-base touch-manipulation"
          >
            <div class="w-10 h-10 bg-gradient-to-br from-primary-gold to-primary-ocre rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0">
              <i :class="item.icon"></i>
            </div>
            <div class="flex-1">
              <span class="text-base">{{ item.name }}</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400 text-sm"></i>
          </router-link>
          
          <!-- CTA Mobile -->
          <div class="pt-4 border-t border-gray-100 mt-4">
            <router-link 
              to="/histoire" 
              @click="closeMobileMenu"
              class="w-full bg-gradient-to-r from-primary-gold to-primary-ocre text-white px-6 py-4 rounded-full text-base font-medium hover:from-primary-bordeaux hover:to-primary-gold transition-all duration-300 transform hover:scale-105 shadow-lg text-center touch-manipulation"
            >
              <i class="fas fa-compass mr-2"></i>
              Commencer l'exploration
            </router-link>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- Overlay for mobile menu -->
    <transition name="fade">
      <div 
        v-if="mobileMenuOpen" 
        @click="closeMobileMenu"
        class="lg:hidden fixed inset-0 bg-black/50 z-30"
      ></div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      navigation: [
        { name: 'Accueil', path: '/', icon: 'fas fa-home' },
        { name: 'Histoire', path: '/histoire', icon: 'fas fa-book-open' },
        { name: 'Voix', path: '/voix', icon: 'fas fa-microphone-alt' },
        { name: 'Message', path: '/message', icon: 'fas fa-scroll' },
        { name: 'Mémoire', path: '/memoire', icon: 'fas fa-images' }
      ]
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
/* Animations Plume d'Histoire */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Fade animation for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Touch manipulation for better mobile experience */
.touch-manipulation {
  touch-action: manipulation;
}

/* Ensure menu is always visible on mobile */
@media (max-width: 1023px) {
  .lg\\:hidden {
    display: block !important;
  }
  
  .lg\\:flex {
    display: none !important;
  }
}
</style>
