<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen lg:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
      <div class="absolute inset-0 bg-black/30"></div>
      
      <!-- Subtle animated particles -->
      <div class="absolute inset-0">
        <div class="absolute top-10 left-5 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
        <div class="absolute top-20 right-10 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-100"></div>
        <div class="absolute bottom-20 left-10 w-2 h-2 bg-white/15 rounded-full animate-pulse delay-200"></div>
        <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-white/10 rounded-full animate-pulse delay-300"></div>
        <div class="absolute bottom-10 right-10 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <!-- Logo Principal -->
        <div class="mb-8 sm:mb-10 lg:mb-12">
          <div class="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 mx-auto mb-6 sm:mb-8 lg:mb-8 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
            <img src="/souv.png" alt="Souviens-Toi" class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain animate-gentle-rotate">
          </div>
        </div>
        
        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 lg:mb-8 tracking-wide leading-tight">
          Souviens-Toi
        </h1>
        
        <!-- Subtitle -->
        <p class="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 lg:mb-12 opacity-90 font-light leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
          Où la mémoire devient éternité<br class="hidden sm:block">
          et les générations se rencontrent
        </p>
        
        <!-- Main message -->
        <div class="mb-12 sm:mb-16 lg:mb-16 space-y-4 sm:space-y-6 lg:space-y-6 max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
          <p class="text-base sm:text-lg lg:text-xl opacity-80 leading-relaxed px-2 sm:px-0">
            Il existe des histoires que le temps ne peut effacer,<br class="hidden sm:block">
            des mémoires que la mort ne peut vaincre,<br class="hidden sm:block">
            des vérités qui transcendent les générations.
          </p>
        </div>
        
        <!-- CTA -->
        <div class="space-y-4">
          <router-link to="/histoire" class="inline-block bg-white text-primary px-8 sm:px-10 lg:px-12 py-4 sm:py-4 lg:py-4 rounded-full text-base sm:text-lg lg:text-xl font-light hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Entrez dans l'histoire
          </router-link>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <i class="fas fa-chevron-down text-xl sm:text-2xl"></i>
      </div>
    </section>

    <!-- Brief intro section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
          Un pont entre les temps
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          "Souviens-Toi" est une invitation à entrer dans le courant éternel 
          de la foi, du courage et de l'amour divin. 
          Chaque mémoire préservée devient une lumière pour ceux qui viendront.
        </p>
      </div>
    </section>

    <!-- Quick navigation -->
    <section class="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <router-link to="/histoire" class="group text-center">
            <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:scale-105">
              <img src="/souv.png" alt="Souviens-Toi" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity">
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 group-hover:text-primary transition-colors mb-2">Histoire</h3>
            <p class="text-sm sm:text-base text-gray-600 hidden sm:block">Le temps sacrifié</p>
          </router-link>
          
          <router-link to="/voix" class="group text-center">
            <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:scale-105">
              <img src="/souv.png" alt="Souviens-Toi" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity">
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 group-hover:text-primary transition-colors mb-2">Voix</h3>
            <p class="text-sm sm:text-base text-gray-600 hidden sm:block">Les témoins vivants</p>
          </router-link>
          
          <router-link to="/message" class="group text-center">
            <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:scale-105">
              <img src="/souv.png" alt="Souviens-Toi" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity">
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 group-hover:text-primary transition-colors mb-2">Message</h3>
            <p class="text-sm sm:text-base text-gray-600 hidden sm:block">La vérité éternelle</p>
          </router-link>
          
          <router-link to="/memoire" class="group text-center">
            <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:scale-105">
              <img src="/souv.png" alt="Souviens-Toi" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity">
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 group-hover:text-primary transition-colors mb-2">Mémoire</h3>
            <p class="text-sm sm:text-base text-gray-600 hidden sm:block">Les traces visibles</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gentle-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-gentle-rotate {
  animation: gentle-rotate 20s linear infinite;
}

.delay-75 {
  animation-delay: 75ms;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}
</style>
