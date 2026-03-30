<template>
  <div v-if="isLoading" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
      <div class="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-100"></div>
      <div class="absolute bottom-30 left-30 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-200"></div>
      <div class="absolute top-60 left-1/2 w-4 h-4 bg-primary/10 rounded-full animate-pulse delay-300"></div>
      <div class="absolute bottom-40 right-40 w-3 h-3 bg-primary/35 rounded-full animate-pulse delay-500"></div>
    </div>
    
    <!-- Logo only -->
    <div class="relative">
      <div class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center">
        <img 
          src="/souv.png" 
          alt="Souviens-Toi" 
          class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain animate-zoom-slow"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@keyframes zoom-slow {
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

.animate-zoom-slow {
  animation: zoom-slow 2s ease-out;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}
</style>
