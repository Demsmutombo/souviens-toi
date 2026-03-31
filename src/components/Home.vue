<template>
  <div>
    <!-- Carousel Section -->
    <section class="relative">
      <div class="relative h-80 lg:h-screen overflow-hidden">
        <div class="relative h-full">
          <!-- Carousel Slides -->
          <div 
            v-for="(slide, index) in carouselSlides" 
            :key="index"
            class="absolute inset-0 transition-opacity duration-1000"
            :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }"
          >
            <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-40">
              <div class="text-center text-white p-6 max-w-4xl -mt-40">
                <i :class="slide.icon" class="text-4xl lg:text-6xl mb-4"></i>
                <h5 class="text-xl lg:text-2xl uppercase mb-2">{{ slide.subtitle }}</h5>
                <h1 class="text-3xl lg:text-6xl font-bold mb-6">{{ slide.title }}</h1>
                <div class="historical-quote mb-6">
                  <i class="fas fa-quote-left text-2xl mb-2"></i>
                  <p class="text-lg lg:text-xl italic mb-2">{{ slide.quote }}</p>
                  <i class="fas fa-quote-right text-2xl"></i>
                </div>
                <div class="history-highlight">
                  <i :class="slide.historyIcon" class="text-2xl lg:text-3xl mb-2"></i>
                  <p class="text-lg">{{ slide.highlight }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Carousel Controls -->
        <button 
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
        
        <!-- Carousel Indicators -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(slide, index) in carouselSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all"
            :class="currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'"
          ></button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <img src="/about.png" alt="À propos" class="w-full h-full object-cover">
          </div>
          <div>
            <div class="mb-6">
              <h5 class="text-primary uppercase tracking-wider mb-2">Notre Histoire</h5>
              <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">L'Héritage de Shekinah Tabernacle</h1>
            </div>
            <h4 class="text-xl text-gray-600 italic mb-6">Une histoire riche de foi, d'espérance et d'amour</h4>
            <p class="text-gray-700 mb-6">
              <strong>Shekinah Tabernacle</strong> est une église fondée dans la fidélité à l'appel de Dieu pour la préparation de l'Épouse de Jésus-Christ. Sa mission repose sur l'Évangile éternel révélé dans cet âge par le ministère prophétique de <strong>William Marrion Branham</strong>, que nous croyons être le prophète de Dieu pour notre génération.
            </p>
            <p class="text-gray-700 mb-6">
              Le Révérend <strong>William Marrion Branham</strong> a prêché plus de <strong>1200 sermons</strong> enregistrés, contenant le Message que Dieu a destiné à cette génération. Ce Message, que Shekinah Tabernacle considère comme l'Évangile pour le temps de la fin, est au cœur de son enseignement et de sa prédication. Les croyants de l'église s'engagent à vivre selon la Parole révélée, dans l'attente du retour de Jésus-Christ.
            </p>
            <p class="text-gray-700 mb-6">
              Aujourd'hui, le ministère de Shekinah Tabernacle a eu un impact spirituel dans plus de <strong>60 pays</strong> à travers les cinq continents, contribuant à l'édification de l'Épouse par la prédication de la Parole et l'enseignement du Message du temps de la fin.
            </p>
            <p class="text-gray-700 mb-6">
              Un moment marquant de notre histoire fut célébré le <strong>3 juin 2013</strong>, lors du <strong>23e anniversaire</strong> de l'église, au <strong>Village Béthanie (RDC)</strong>. À cette occasion, les <strong>1209 messages</strong> de William Marrion Branham avaient été traduits en français, et le dernier message traduit, <em>« Le Son Confus »</em>, fut solennellement remis au Rév. <strong>Pasteur Richard Diyoka</strong>, fondateur de Shekinah Tabernacle, lors d'une cérémonie empreinte de gratitude et de louange.
            </p>
            <p class="text-gray-700 mb-8">
              Notre devise résume bien notre mission : <em>« Louez l'Éternel, invoquez Son Nom ! Faites connaître parmi les peuples Ses hauts faits ! »</em> (<strong>Psaume 105:1</strong>).
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="text-center">
                <div class="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i class="fas fa-users text-2xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">12 Membres Fondateurs</h3>
                <p class="text-gray-600 text-sm">Notre commencement humble</p>
              </div>
              <div class="text-center">
                <div class="bg-secondary text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i class="fas fa-globe text-2xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">60+ Pays</h3>
                <p class="text-gray-600 text-sm">Impact international</p>
              </div>
              <div class="text-center">
                <div class="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i class="fas fa-book text-2xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">1209 Messages</h3>
                <p class="text-gray-600 text-sm">Sermons de W.M. Branham</p>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <router-link 
                to="/histoire" 
                class="group bg-primary text-white p-8 rounded-lg hover:bg-primary/90 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <i class="fas fa-history text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 class="text-xl font-bold mb-2">Notre Histoire</h3>
                <p class="text-white/80">Découvrez notre parcours détaillé</p>
              </router-link>
              <div class="group bg-secondary text-primary p-8 rounded-lg hover:bg-secondary/90 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <i class="fas fa-book text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 class="text-xl font-bold mb-2">Notre Patrimoine</h3>
                <p class="text-primary/80">Documents et archives</p>
              </div>
            </div>
            <router-link 
              to="/histoire" 
              class="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Découvrir Notre Histoire
              <i class="fas fa-arrow-right ml-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">// Notre Parcours //</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Les Grandes Étapes</h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">1995</div>
              <div class="bg-white p-4 rounded-lg shadow-lg flex-1">
                <h3 class="font-bold text-lg mb-2">Fondation</h3>
                <p class="text-gray-600">Création de Shekinah Tabernacle avec 12 membres fondateurs</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">2000</div>
              <div class="bg-white p-4 rounded-lg shadow-lg flex-1">
                <h3 class="font-bold text-lg mb-2">Premier Temple</h3>
                <p class="text-gray-600">Construction et inauguration de notre premier lieu de culte</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">2005</div>
              <div class="bg-white p-4 rounded-lg shadow-lg flex-1">
                <h3 class="font-bold text-lg mb-2">Expansion</h3>
                <p class="text-gray-600">Lancement de notre programme d'évangélisation communautaire</p>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">2010</div>
              <div class="bg-white p-4 rounded-lg shadow-lg flex-1">
                <h3 class="font-bold text-lg mb-2">Nouveau Temple</h3>
                <p class="text-gray-600">Inauguration de notre temple actuel pour accueillir plus de fidèles</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">2015</div>
              <div class="bg-white p-4 rounded-lg shadow-lg flex-1">
                <h3 class="font-bold text-lg mb-2">Ministères</h3>
                <p class="text-gray-600">Développement de nos différents ministères (jeunesse, musique, etc.)</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">2026</div>
              <div class="bg-white p-4 rounded-lg shadow-lg flex-1">
                <h3 class="font-bold text-lg mb-2">Innovation</h3>
                <p class="text-gray-600">Lancement de notre plateforme de culte en ligne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Historical Gallery Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">// Galerie Historique //</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Souvenirs & Moments Forts</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="/carousel-1.jpg" alt="Premier Temple" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div class="text-white p-6">
                <h3 class="text-xl font-bold mb-1">1995</h3>
                <p>Premier lieu de culte</p>
              </div>
            </div>
          </div>
          <div class="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="/carousel-2.jpg" alt="Inauguration" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div class="text-white p-6">
                <h3 class="text-xl font-bold mb-1">2000</h3>
                <p>Inauguration du temple</p>
              </div>
            </div>
          </div>
          <div class="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="/carousel-3.jpg" alt="Événements" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div class="text-white p-6">
                <h3 class="text-xl font-bold mb-1">2005</h3>
                <p>Grands événements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Historical Documents Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">// Archives //</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Documents Historiques</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-file-alt text-primary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">Acte de Fondation</h3>
              <p class="text-gray-600 mb-4">Document officiel de création de l'église en 1995</p>
              <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Consulter
              </button>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-newspaper text-primary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">Articles de Presse</h3>
              <p class="text-gray-600 mb-4">Articles historiques sur l'église</p>
              <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Consulter
              </button>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-book text-primary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">Chroniques</h3>
              <p class="text-gray-600 mb-4">Récits et témoignages des premiers membres</p>
              <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Consulter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Nos Valeurs</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Ce Qui Nous Anime</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div class="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="feature.icon" class="text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentSlide: 0,
      carouselSlides: [
        {
          id: 1,
          image: '/about.png',
          icon: 'fas fa-landmark',
          subtitle: 'Bienvenue dans',
          title: "L'Histoire de Shekinah Tabernacle",
          quote: '"Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d\'eux." - Matthieu 18:20',
          historyIcon: 'fas fa-church',
          highlight: 'Fondé en 1995 avec 12 membres fondateurs'
        },
        {
          id: 2,
          image: '/carousel-2.jpg',
          icon: 'fas fa-book-open',
          subtitle: 'Notre Héritage',
          title: 'Une Histoire de Foi',
          quote: '"Souvenez-vous des jours d\'autrefois..." - Deutéronome 32:7',
          historyIcon: 'fas fa-building',
          highlight: 'De 2000 à 2010 : Construction et expansion de notre lieu de culte'
        },
        {
          id: 3,
          image: '/carousel-3.jpg',
          icon: 'fas fa-scroll',
          subtitle: 'Notre Patrimoine',
          title: 'Témoignages & Souvenirs',
          quote: '"Racontez à vos enfants les merveilles de l\'Éternel..." - Psaume 78:4',
          historyIcon: 'fas fa-history',
          highlight: '25 ans de ministère et de croissance spirituelle'
        }
      ],
      features: [
        {
          id: 1,
          icon: 'fas fa-pray',
          title: 'Adoration',
          description: 'Nous croyons en la puissance de l\'adoration et de la prière'
        },
        {
          id: 2,
          icon: 'fas fa-bible',
          title: 'Enseignement',
          description: 'La Parole de Dieu comme fondement de notre vie'
        },
        {
          id: 3,
          icon: 'fas fa-hands-helping',
          title: 'Service',
          description: 'Servir notre communauté avec amour et compassion'
        },
        {
          id: 4,
          icon: 'fas fa-users',
          title: 'Communauté',
          description: 'Vivre en communauté dans l\'unité et l\'amour'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length
    },
    goToSlide(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    // Auto-advance carousel
    setInterval(() => {
      this.nextSlide()
    }, 5000)
  }
}
</script>

<style scoped>
.historical-quote {
  @apply max-w-2xl mx-auto;
}

.history-highlight {
  @apply flex flex-col items-center;
}

.carousel-slide {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
