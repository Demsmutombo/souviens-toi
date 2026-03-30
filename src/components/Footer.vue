<template>
  <footer class="bg-gray-900 text-white py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        <!-- À Propos de Souviens-Toi -->
        <div>
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 mr-3">
              <img src="/souv.png" alt="Souviens-Toi" class="w-full h-full object-contain">
            </div>
            <h3 class="text-2xl font-light">Souviens-Toi</h3>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Une plateforme où la mémoire devient éternité. 
            Nous préservons les récits sacrés, les témoignages vivants 
            et les vérités intemporelles pour les générations à venir.
          </p>
          <div class="space-y-3">
            <div class="flex items-center text-gray-400">
              <i class="fas fa-clock text-primary mr-3"></i>
              <span class="text-sm">1909 - Temps Présent</span>
            </div>
            <div class="flex items-center text-gray-400">
              <i class="fas fa-globe text-primary mr-3"></i>
              <span class="text-sm">60 Pays Touchés</span>
            </div>
            <div class="flex items-center text-gray-400">
              <i class="fas fa-book text-primary mr-3"></i>
              <span class="text-sm">1209 Messages Préservés</span>
            </div>
          </div>
        </div>
        
        <!-- Navigation Rapide -->
        <div>
          <h3 class="text-xl font-light mb-6 text-primary">Explorer la Mémoire</h3>
          <div class="flex flex-col space-y-3">
            <router-link to="/" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="fas fa-home text-primary mr-3 w-5 text-center"></i>
              <span class="group-hover:translate-x-1 transition-transform">Accueil</span>
            </router-link>
            <router-link to="/histoire" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="fas fa-clock text-primary mr-3 w-5 text-center"></i>
              <span class="group-hover:translate-x-1 transition-transform">Histoire Sacrée</span>
            </router-link>
            <router-link to="/voix" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="fas fa-microphone text-primary mr-3 w-5 text-center"></i>
              <span class="group-hover:translate-x-1 transition-transform">Voix du Temps</span>
            </router-link>
            <router-link to="/message" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="fas fa-book-open text-primary mr-3 w-5 text-center"></i>
              <span class="group-hover:translate-x-1 transition-transform">Message Éternel</span>
            </router-link>
            <router-link to="/memoire" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="fas fa-images text-primary mr-3 w-5 text-center"></i>
              <span class="group-hover:translate-x-1 transition-transform">Galerie Mémoire</span>
            </router-link>
          </div>
        </div>
        
        <!-- Ressources & Contact -->
        <div>
          <h3 class="text-xl font-light mb-6 text-primary">Ressources & Contact</h3>
          <div class="space-y-4">
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-sm font-light text-primary mb-2">Shekinah Publications</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Gardien du Message depuis 1990. 
                40M+ de brochures distribuées dans le monde entier.
              </p>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center text-gray-300">
                <i class="fas fa-envelope text-primary mr-3"></i>
                <span class="text-sm">memoire@souviens-toi.org</span>
              </div>
              <div class="flex items-center text-gray-300">
                <i class="fas fa-map-marker-alt text-primary mr-3"></i>
                <span class="text-sm">Kinshasa, RDC</span>
              </div>
              <div class="flex items-center text-gray-300">
                <i class="fas fa-globe-americas text-primary mr-3"></i>
                <span class="text-sm">Églises Sœurs Mondiales</span>
              </div>
            </div>
            
            <div class="pt-4 border-t border-gray-700">
              <p class="text-gray-400 text-sm italic">
                "Car la mémoire est le gardien de la vérité, 
                et la vérité est la lumière de l'humanité."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 mt-12 pt-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="text-center md:text-left">
            <p class="text-gray-400 text-sm">
              © {{ currentYear }} 
              <span class="text-white font-light">Souviens-Toi</span>. 
              Plateforme de Mémoire Spirituelle.
            </p>
          </div>
          <div class="text-center md:text-right">
            <p class="text-gray-400 text-sm">
              Érigé avec <i class="fas fa-heart text-red-500"></i> 
              pour la préservation de la mémoire sacrée
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
