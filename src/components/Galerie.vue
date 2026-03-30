<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4">Galerie</h1>
        <p class="text-xl lg:text-2xl">Des moments précieux de notre vie communautaire</p>
      </div>
    </section>

    <!-- Gallery Categories -->
    <section class="py-8 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectCategory(category.id)"
            class="px-6 py-2 rounded-full transition-colors"
            :class="selectedCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="image in filteredImages" 
            :key="image.id"
            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            @click="openModal(image)"
          >
            <img 
              :src="image.src" 
              :alt="image.title"
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-bold mb-2">{{ image.title }}</h3>
                <p class="text-sm">{{ image.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div 
      v-if="selectedImage" 
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div class="relative max-w-4xl max-h-full">
        <button 
          @click="closeModal"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <i class="fas fa-times text-2xl"></i>
        </button>
        <img 
          :src="selectedImage.src" 
          :alt="selectedImage.title"
          class="max-w-full max-h-[80vh] object-contain rounded-lg"
        >
        <div class="text-white text-center mt-4">
          <h3 class="text-xl font-bold">{{ selectedImage.title }}</h3>
          <p class="text-gray-300">{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>

    <!-- Video Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Vidéos</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Moments Capturés</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="video in videos" 
            :key="video.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div class="relative">
              <img 
                :src="video.thumbnail" 
                :alt="video.title"
                class="w-full h-48 object-cover"
              >
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button 
                  @click="playVideo(video)"
                  class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <i class="fas fa-play text-2xl ml-1"></i>
                </button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2">{{ video.title }}</h3>
              <p class="text-gray-600 text-sm">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Galerie',
  data() {
    return {
      selectedCategory: 'all',
      selectedImage: null,
      categories: [
        { id: 'all', name: 'Toutes' },
        { id: 'culte', name: 'Cultes' },
        { id: 'evenements', name: 'Événements' },
        { id: 'communaute', name: 'Communauté' },
        { id: 'enfants', name: 'Enfants' }
      ],
      images: [
        {
          id: 1,
          src: '/gallery/culte1.jpg',
          title: 'Culte du Dimanche',
          category: 'culte',
          description: 'Culte d\'adoration dominical avec toute la communauté'
        },
        {
          id: 2,
          src: '/gallery/bapteme1.jpg',
          title: 'Baptême',
          category: 'culte',
          description: 'Célébration de baptême dans la rivière'
        },
        {
          id: 3,
          src: '/gallery/noel1.jpg',
          title: 'Célébration de Noël',
          category: 'evenements',
          description: 'Spectacle de Noël avec les enfants'
        },
        {
          id: 4,
          src: '/gallery/paques1.jpg',
          title: 'Pâques',
          category: 'evenements',
          description: 'Célébration de la résurrection'
        },
        {
          id: 5,
          src: '/gallery/communaute1.jpg',
          title: 'Repas Communautaire',
          category: 'communaute',
          description: 'Partage fraternel après le culte'
        },
        {
          id: 6,
          src: '/gallery/jeunes1.jpg',
          title: 'Groupe des Jeunes',
          category: 'communaute',
          description: 'Réunion du groupe de jeunes'
        },
        {
          id: 7,
          src: '/gallery/enfants1.jpg',
          title: 'École du Dimanche',
          category: 'enfants',
          description: 'Enfants apprenant les histoires bibliques'
        },
        {
          id: 8,
          src: '/gallery/camp1.jpg',
          title: 'Camp d\'Été',
          category: 'enfants',
          description: 'Camp d\'été pour les enfants et adolescents'
        }
      ],
      videos: [
        {
          id: 1,
          title: 'Culte Spécial - 25 Ans',
          description: 'Célébration des 25 ans de l\'église',
          thumbnail: '/video-thumb1.jpg',
          url: '#'
        },
        {
          id: 2,
          title: 'Témoignage - Guérison',
          description: 'Témoignage de guérison miraculeuse',
          thumbnail: '/video-thumb2.jpg',
          url: '#'
        },
        {
          id: 3,
          title: 'Spectacle de Noël 2023',
          description: 'Les enfants présentent la nativité',
          thumbnail: '/video-thumb3.jpg',
          url: '#'
        }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (this.selectedCategory === 'all') {
        return this.images
      }
      return this.images.filter(image => image.category === this.selectedCategory)
    }
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId
    },
    openModal(image) {
      this.selectedImage = image
    },
    closeModal() {
      this.selectedImage = null
    },
    playVideo(video) {
      // Logique pour jouer la vidéo
      console.log('Playing video:', video.title)
    }
  }
}
</script>
