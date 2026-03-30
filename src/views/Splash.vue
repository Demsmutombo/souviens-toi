<template>
  <div class="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
      <div class="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-100"></div>
      <div class="absolute bottom-30 left-30 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-200"></div>
      <div class="absolute top-60 left-1/2 w-4 h-4 bg-primary/10 rounded-full animate-pulse delay-300"></div>
      <div class="absolute bottom-40 right-40 w-3 h-3 bg-primary/35 rounded-full animate-pulse delay-500"></div>
    </div>
    
    <!-- Main content -->
    <div class="relative text-center">
      <!-- Logo with zoom animation -->
      <div class="mb-8">
        <div class="w-32 h-32 mx-auto flex items-center justify-center">
          <img 
            src="/souv.png" 
            alt="Souviens-Toi" 
            class="w-full h-full object-contain animate-zoom-in"
          >
        </div>
      </div>
      
      <!-- Title with fade in animation -->
      <h1 class="text-4xl lg:text-5xl font-light text-gray-900 mb-4 animate-fade-in-up">
        Souviens-Toi
      </h1>
      
      <!-- Subtitle with delayed fade in -->
      <p class="text-lg text-gray-600 animate-fade-in-up delay-500">
        Où la mémoire devient éternité
      </p>
      
      <!-- Loading dots -->
      <div class="flex justify-center space-x-2 mt-8 animate-fade-in-up delay-1000">
        <div class="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        <div class="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
        <div class="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  mounted() {
    // Rediriger vers la page d'accueil après 3 secondes
    setTimeout(() => {
      this.$router.push('/')
    }, 3000)
  }
}
</script>

<style scoped>
@keyframes zoom-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-zoom-in {
  animation: zoom-in 3s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>
