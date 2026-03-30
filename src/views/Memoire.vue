<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-light mb-4">Mémoire</h1>
        <p class="text-xl lg:text-2xl opacity-90">Les traces visibles de l'histoire sacrée</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
          Les images qui parlent
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Chaque photographie, chaque document, chaque artefact est une fenêtre 
          sur le passé sacré et un pont vers les générations futures.
        </p>
      </div>
    </section>

    <!-- Gallery Categories -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-light text-gray-900 mb-4">
            Explorer les mémoires
          </h3>
        </div>

        <!-- Category Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            @click="activeCategory = 'all'"
            :class="activeCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700'"
            class="px-6 py-2 rounded-full border transition-colors"
          >
            Tout
          </button>
          <button 
            @click="activeCategory = 'prophete'"
            :class="activeCategory === 'prophete' ? 'bg-primary text-white' : 'bg-white text-gray-700'"
            class="px-6 py-2 rounded-full border transition-colors"
          >
            Le Prophète
          </button>
          <button 
            @click="activeCategory = 'ministere'"
            :class="activeCategory === 'ministere' ? 'bg-primary text-white' : 'bg-white text-gray-700'"
            class="px-6 py-2 rounded-full border transition-colors"
          >
            Ministère
          </button>
          <button 
            @click="activeCategory = 'eglise'"
            :class="activeCategory === 'eglise' ? 'bg-primary text-white' : 'bg-white text-gray-700'"
            class="px-6 py-2 rounded-full border transition-colors"
          >
            Église
          </button>
          <button 
            @click="activeCategory = 'documents'"
            :class="activeCategory === 'documents' ? 'bg-primary text-white' : 'bg-white text-gray-700'"
            class="px-6 py-2 rounded-full border transition-colors"
          >
            Documents
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in filteredItems" 
            :key="item.id"
            class="group cursor-pointer"
            @click="openModal(item)"
          >
            <div class="relative overflow-hidden rounded-lg shadow-sm">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 class="font-light text-lg">{{ item.title }}</h4>
                  <p class="text-sm opacity-90">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Memory -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-light text-gray-900 mb-4">
            La photo qui a marqué l'histoire
          </h3>
        </div>
        
        <div class="bg-gray-50 rounded-lg p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/temoignage/testimonial-2.webp" 
                alt="La Colonne de Feu - 24 janvier 1950"
                class="w-full rounded-lg shadow-md"
              >
            </div>
            <div>
              <h4 class="text-xl font-light text-gray-900 mb-4">
                La Colonne de Feu
              </h4>
              <p class="text-gray-600 mb-4">
                24 janvier 1950 - Stade Sam Houston, Houston, Texas
              </p>
              <p class="text-gray-600 leading-relaxed mb-4">
                Cette photographie historique capture l'invisible rendu visible. 
                La Colonne de Feu, mentionnée dans les Écritures, photographiée 
                au-dessus du prophète William Branham, confirmant l'authenticité 
                de son ministère par une preuve divine irréfutable.
              </p>
              <div class="bg-primary/5 border-l-4 border-primary p-4">
                <p class="text-sm text-gray-700 italic">
                  "George J. Lacy, expert en documents contestés pour le FBI, 
                  examina la photographie et déclara : 'Je suis convaincu que la lumière 
                  sur cette photographie est authentique.'"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shekinah Publications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-light text-gray-900 mb-4">
            Shekinah Publications
          </h3>
          <p class="text-gray-600">Le gardien du Message pour les générations futures</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Mission -->
          <div>
            <h4 class="text-xl font-light text-primary mb-6">La Mission Sacrée</h4>
            <div class="space-y-4">
              <p class="text-gray-600 leading-relaxed">
                Shekinah Publications est née d'une vision divine : préserver et diffuser 
                le Message du temps de la fin dans son intégralité et sa pureté.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Pendant 23 ans (1990-2013), une équipe dévouée a travaillé sans relâche 
                pour traduire les 1209 sermons du prophète William Branham, 
                assurant que l'Épouse francophone ait accès à la totalité de la Parole.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Aujourd'hui, Shekinah Publications continue sa mission en distribuant 
                des millions de brochures, en produisant du contenu audio, 
                et en maintenant une présence numérique pour toucher le monde entier.
              </p>
            </div>
          </div>
          
          <!-- Impact -->
          <div>
            <h4 class="text-xl font-light text-primary mb-6">L'Impact Mondial</h4>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-light text-primary mb-2">40M+</div>
                <p class="text-sm text-gray-600">Brochures distribuées</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-light text-primary mb-2">60</div>
                <p class="text-sm text-gray-600">Pays atteints</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-light text-primary mb-2">147</div>
                <p class="text-sm text-gray-600">Langues nationales</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-light text-primary mb-2">1209</div>
                <p class="text-sm text-gray-600">Messages traduits</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Équipe de Traduction -->
        <div class="mt-12 bg-gray-50 rounded-lg p-8">
          <h4 class="text-xl font-light text-primary mb-6">Les Héros de l'Ombre</h4>
          <p class="text-gray-600 mb-6">
            L'équipe de traduction était composée de 12 traducteurs et 3 encodeuses 
            qui ont sacrifié leur temps, leur énergie et leurs ressources pour accomplir cette mission.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-language text-primary text-2xl"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Traducteurs</h5>
              <p class="text-sm text-gray-600">12 frères et sœurs dévoués</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-headphones text-primary text-2xl"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Encodeuses</h5>
              <p class="text-sm text-gray-600">3 sœurs fidèles</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-clock text-primary text-2xl"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Durée</h5>
              <p class="text-sm text-gray-600">23 ans de fidélité</p>
            </div>
          </div>
        </div>

        <!-- Publications Disponibles -->
        <div class="mt-12">
          <h4 class="text-xl font-light text-primary mb-6">Publications Disponibles</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div class="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-book text-primary"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Sermons Traduits</h5>
              <p class="text-xs text-gray-600">1209 messages</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div class="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-file-alt text-primary"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Brochures</h5>
              <p class="text-xs text-gray-600">40M+ distribuées</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div class="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-headphones text-primary"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Audio</h5>
              <p class="text-xs text-gray-600">Messages audio</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div class="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <i class="fas fa-globe text-primary"></i>
              </div>
              <h5 class="font-light text-gray-900 mb-2">Numérique</h5>
              <p class="text-xs text-gray-600">Présence mondiale</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div 
      v-if="selectedItem" 
      @click="closeModal"
      class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
    >
      <div @click.stop class="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
        <div class="relative">
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <i class="fas fa-times text-gray-700"></i>
          </button>
          <img 
            :src="selectedItem.image" 
            :alt="selectedItem.title"
            class="w-full max-h-[60vh] object-contain"
          >
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-light text-gray-900 mb-2">{{ selectedItem.title }}</h3>
          <p class="text-gray-600 mb-4">{{ selectedItem.description }}</p>
          <p class="text-sm text-gray-500">{{ selectedItem.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Memoire',
  data() {
    return {
      activeCategory: 'all',
      selectedItem: null,
      galleryItems: [
        {
          id: 1,
          title: 'La Colonne de Feu',
          description: 'Preuve photographique du ministère prophétique',
          image: '/temoignage/testimonial-2.webp',
          category: 'prophete',
          date: '24 janvier 1950'
        },
        {
          id: 2,
          title: 'Naissance du prophète',
          description: 'Lieu de naissance de William Branham',
          image: '/temoignage/bitwa.jpg',
          category: 'prophete',
          date: '6 avril 1909'
        },
        {
          id: 3,
          title: 'Campagne de guérison',
          description: 'Multitudes attirées par la puissance divine',
          image: '/temoignage/bala.jpg',
          category: 'ministere',
          date: 'Années 1940-1950'
        },
        {
          id: 4,
          title: 'Shekinah Tabernacle',
          description: 'Siège de l\'œuvre continue',
          image: '/temoignage/testimonial-1.gif',
          category: 'eglise',
          date: 'Depuis 1990'
        },
        {
          id: 5,
          title: 'Traduction des messages',
          description: 'L\'équipe de traduction au travail',
          image: '/temoignage/Pastor.png',
          category: 'documents',
          date: '1990-2013'
        },
        {
          id: 6,
          title: 'Cérémonie de 2013',
          description: 'Accomplissement de la traduction',
          image: '/temoignage/testimonial-2.webp',
          category: 'eglise',
          date: '3 juin 2013'
        }
      ]
    }
  },
  computed: {
    filteredItems() {
      if (this.activeCategory === 'all') {
        return this.galleryItems
      }
      return this.galleryItems.filter(item => item.category === this.activeCategory)
    }
  },
  methods: {
    openModal(item) {
      this.selectedItem = item
    },
    closeModal() {
      this.selectedItem = null
    }
  }
}
</script>
