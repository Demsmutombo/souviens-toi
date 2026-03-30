<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4">Notre Histoire</h1>
        <p class="text-xl lg:text-2xl">25 ans de foi, de croissance et de service</p>
      </div>
    </section>

    <!-- Histoire Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <img src="/carousel-1.jpg" alt="Histoire de l'église" class="w-full h-full object-cover">
          </div>
          <div>
            <h5 class="text-primary uppercase tracking-wider mb-2">// Notre Histoire //</h5>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">La Fondation de Shekinah Tabernacle</h1>
            <p class="text-gray-700 mb-6">
              En 1995, sous l'inspiration divine, le Pasteur Richard Diyoka fonde Shekinah Tabernacle avec une vision claire : créer un lieu de culte où la présence de Dieu serait manifeste et où les âmes pourraient trouver refuge et restauration.
            </p>
            <p class="text-gray-700 mb-6">
              Ce qui a commencé comme un petit groupe de fidèles se réunissant dans un salon s'est transformé en une communauté florissante qui continue de grandir dans la foi et l'amour de Dieu.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <div>
                  <h3 class="font-bold">Vision Spirituelle</h3>
                  <p class="text-gray-600 text-sm">Présence manifeste de Dieu</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <i class="fas fa-users text-primary"></i>
                </div>
                <div>
                  <h3 class="font-bold">Communauté</h3>
                  <p class="text-gray-600 text-sm">12 membres fondateurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Notre Parcours</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Les Étapes Clés</h2>
        </div>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          
          <!-- Timeline Items -->
          <div 
            v-for="(event, index) in timeline" 
            :key="event.id"
            class="relative flex items-center mb-12"
            :class="index % 2 === 0 ? 'flex-row-reverse' : ''"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
            
            <!-- Content -->
            <div class="w-5/12" :class="index % 2 === 0 ? 'text-right pr-8' : 'pl-8'">
              <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="flex items-center mb-3" :class="index % 2 === 0 ? 'justify-end' : ''">
                  <i :class="event.icon" class="text-primary text-2xl mr-3"></i>
                  <span class="text-secondary font-bold">{{ event.year }}</span>
                </div>
                <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
                <p class="text-gray-600">{{ event.description }}</p>
              </div>
            </div>
            
            <!-- Empty Space -->
            <div class="w-2/12"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founders Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Les Fondateurs</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">12 Âmes Dévouées</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="founder in founders" 
            :key="founder.id"
            class="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <i :class="founder.icon" class="text-primary text-4xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ founder.name }}</h3>
            <p class="text-gray-600">{{ founder.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Milestones Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Réalisations</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Nos Jalons</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="milestone in milestones" 
            :key="milestone.id"
            class="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <div class="text-5xl font-bold text-primary mb-4">{{ milestone.number }}</div>
            <i :class="milestone.icon" class="text-secondary text-3xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">{{ milestone.title }}</h3>
            <p class="text-gray-600">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Histoire',
  data() {
    return {
      timeline: [
        {
          id: 1,
          year: '1995',
          title: 'Fondation',
          description: '12 membres fondateurs se réunissent dans une petite salle pour créer Shekinah Tabernacle.',
          icon: 'fas fa-church'
        },
        {
          id: 2,
          year: '1998',
          title: 'Premier Bâtiment',
          description: 'Acquisition de notre premier lieu de culte permanent dans le centre-ville.',
          icon: 'fas fa-home'
        },
        {
          id: 3,
          year: '2005',
          title: 'Expansion',
          description: 'Agrandissement du bâtiment principal pour accueillir plus de 300 fidèles.',
          icon: 'fas fa-expand'
        },
        {
          id: 4,
          year: '2010',
          title: 'Centre Communautaire',
          description: 'Ouverture d\'un centre communautaire pour servir les besoins locaux.',
          icon: 'fas fa-users'
        },
        {
          id: 5,
          year: '2015',
          title: 'Mission Internationale',
          description: 'Lancement de nos premières missions internationales en Afrique.',
          icon: 'fas fa-globe'
        },
        {
          id: 6,
          year: '2020',
          title: '25 Ans',
          description: 'Célébration de nos 25 ans de ministère et d\'impact communautaire.',
          icon: 'fas fa-award'
        }
      ],
      founders: [
        { id: 1, name: 'Pasteur Martin', role: 'Fondateur et Pasteur Principal', icon: 'fas fa-user-tie' },
        { id: 2, name: 'Sarah Dubois', role: 'Directrice de la Musique', icon: 'fas fa-music' },
        { id: 3, name: 'Jean Bernard', role: 'Ancien', icon: 'fas fa-pray' },
        { id: 4, name: 'Marie Laurent', role: 'Responsable Jeunesse', icon: 'fas fa-graduation-cap' }
      ],
      milestones: [
        {
          id: 1,
          number: '500+',
          title: 'Membres Actifs',
          description: 'Des fidèles engagés dans notre communauté',
          icon: 'fas fa-users'
        },
        {
          id: 2,
          number: '25',
          title: 'Années de Service',
          description: 'Un quart de siècle de ministère',
          icon: 'fas fa-calendar'
        },
        {
          id: 3,
          number: '10+',
          title: 'Programmes',
          description: 'Différents ministères et services',
          icon: 'fas fa-hands-helping'
        }
      ]
    }
  }
}
</script>
