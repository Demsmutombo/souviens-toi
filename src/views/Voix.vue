<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-light mb-4">Voix</h1>
        <p class="text-xl lg:text-2xl opacity-90">Les témoins de la grâce divine</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
          Des vies transformées
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Chaque témoignage est une preuve vivante que Dieu transforme les cœurs brisés, 
          restaure les espoirs perdus, et écrit des histoires de grâce.
        </p>
      </div>
    </section>

    <!-- Featured Ministers -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Les Voix du Ministère
          </h3>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Les serviteurs de Dieu qui continuent de proclamer le Message à travers le monde
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Pasteur Bitwa -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="text-center mb-4">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/temoignage/bitwa.jpg" alt="Pasteur Bitwa" class="w-full h-full object-cover">
              </div>
              <h4 class="text-lg font-light text-gray-900 mb-1">Pasteur Bitwa</h4>
              <p class="text-gray-600 text-sm mb-2">Serviteur de Dieu</p>
            </div>
            <div class="audio-player">
              <audio controls class="w-full">
                <source src="/audios/Bitwa.mp3" type="audio/mpeg">
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </div>
            <p class="text-gray-600 text-sm italic mt-4">
              "Le Message est la lumière qui nous guide dans ces temps de ténèbres."
            </p>
          </div>
          
          <!-- Pasteur Balanganayi -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="text-center mb-4">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/temoignage/bala.jpg" alt="Pasteur Balanganayi" class="w-full h-full object-cover">
              </div>
              <h4 class="text-lg font-light text-gray-900 mb-1">Pasteur Balanganayi</h4>
              <p class="text-gray-600 text-sm mb-2">Serviteur de Dieu</p>
            </div>
            <div class="audio-player">
              <audio controls class="w-full">
                <source src="/audios/bala.mp3" type="audio/mpeg">
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </div>
            <p class="text-gray-600 text-sm italic mt-4">
              "Nous devons être des canaux purs pour la pureté de la Parole."
            </p>
          </div>
          
          <!-- Révérend Kayumbi Beya -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="text-center mb-4">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/temoignage/testimonial-1.gif" alt="Révérend Kayumbi Beya" class="w-full h-full object-cover">
              </div>
              <h4 class="text-lg font-light text-gray-900 mb-1">Révérend KAYUMBI BEYA Léonard</h4>
              <p class="text-gray-600 text-sm mb-2">Guide spirituel de l'église ZOE TABERNACLE</p>
              <p class="text-gray-500 text-xs">Mbuji-Mayi et Kinshasa</p>
            </div>
            <div class="audio-player">
              <audio controls class="w-full">
                <source src="/audios/past_kayumbi.mp3" type="audio/mpeg">
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </div>
            <p class="text-gray-600 text-sm italic mt-4">
              "L'unité de l'Esprit est la marque de la véritable Église."
            </p>
          </div>
          
          <!-- Pasteur Yves Kalombo -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="text-center mb-4">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/temoignage/testimonial-2.webp" alt="Pasteur Yves Kalombo" class="w-full h-full object-cover">
              </div>
              <h4 class="text-lg font-light text-gray-900 mb-1">Pasteur Yves Kalombo</h4>
              <p class="text-gray-600 text-sm mb-2">Serviteur de Dieu</p>
              <p class="text-gray-500 text-xs">Église Logos Tabernacle de Kinshasa</p>
            </div>
            <div class="audio-player">
              <audio controls class="w-full">
                <source src="/audios/yves.mp3" type="audio/mpeg">
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </div>
            <p class="text-gray-600 text-sm italic mt-4">
              "La fidélité au Message est notre seule sécurité spirituelle."
            </p>
          </div>
          
          <!-- Fr ADO -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="text-center mb-4">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <i class="fas fa-user text-primary text-2xl"></i>
              </div>
              <h4 class="text-lg font-light text-gray-900 mb-1">Fr ADO</h4>
              <p class="text-gray-600 text-sm mb-2">Serviteur de Dieu</p>
              <p class="text-gray-500 text-xs">Brazzaville, Congo</p>
            </div>
            <p class="text-gray-600 text-sm italic mt-4">
              "La vérité ne change pas, c'est notre compréhension qui s'approfondit."
            </p>
          </div>
          
          <!-- Fr Theo Somue -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="text-center mb-4">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <i class="fas fa-user text-primary text-2xl"></i>
              </div>
              <h4 class="text-lg font-light text-gray-900 mb-1">Fr Theo Somue</h4>
              <p class="text-gray-600 text-sm mb-2">Serviteur de Dieu</p>
              <p class="text-gray-500 text-xs">Kwilu Ngongo, Congo</p>
            </div>
            <p class="text-gray-600 text-sm italic mt-4">
              "Le Message est notre nourriture spirituelle quotidienne."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Network -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Réseau Mondial
          </h3>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Les églises sœurs qui portent le même Message à travers le monde
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Afrique Centrale -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h4 class="text-lg font-light text-primary mb-4">Afrique Centrale</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">ZOE Tabernacle - Mbuji-Mayi, RDC</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Logos Tabernacle - Kinshasa, RDC</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Église de Brazzaville, Congo</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Mission Kwilu Ngongo, RDC</span>
              </div>
            </div>
          </div>
          
          <!-- Afrique Australe -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h4 class="text-lg font-light text-primary mb-4">Afrique Australe</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Shekinah Tabernacle - Johannesburg, Afrique du Sud</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Églises en Angola</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Communautés au Zimbabwe</span>
              </div>
            </div>
          </div>
          
          <!-- Amérique -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h4 class="text-lg font-light text-primary mb-4">Amérique du Nord</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Églises aux États-Unis</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Communautés au Canada</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="text-sm text-gray-700">Églises au Mexique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Testimonies -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-light text-gray-900 mb-4">
            Les témoignages personnels
          </h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimony 1 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-heart text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Jean Martin</h4>
                <p class="text-xs text-gray-500">Janvier 2024</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Restauration</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "J'étais arrivé ici le cœur brisé, ma foi réduite en cendres... Aujourd'hui, je peux dire avec larmes de joie que je suis né de nouveau. Cette église m'a rendu ma dignité et ma relation avec Dieu."
            </p>
          </div>
          
          <!-- Testimony 2 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-dove text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Sophie Laurent</h4>
                <p class="text-xs text-gray-500">Décembre 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Guérison</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "Il y a cinq ans, je traversais une vallée sombre... Aujourd'hui, je ne suis plus la victime de mes circonstances, mais une survivante victorieuse par la grâce de Dieu."
            </p>
          </div>
          
          <!-- Testimony 3 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-child text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Pierre Bernard</h4>
                <p class="text-xs text-gray-500">Novembre 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Espoir</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "Dieu m'a donné ici plus qu'une église : Il m'a donné une famille spirituelle pour mes enfants. Ils demandent maintenant quand nous pouvons y retourner."
            </p>
          </div>
          
          <!-- Testimony 4 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-graduation-cap text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Claire Dubois</h4>
                <p class="text-xs text-gray-500">Octobre 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Transformation</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "À 19 ans, j'ai failli abandonner ma foi... Aujourd'hui, je ne suis plus seulement une croyante par tradition, mais une disciple par conviction."
            </p>
          </div>
          
          <!-- Testimony 5 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-music text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Michel Petit</h4>
                <p class="text-xs text-gray-500">Septembre 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Révélation</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "Ce jour-là, mon christianisme est passé de la religion à la relation. Je ne peux plus imaginer vivre sans cette intimité divine."
            </p>
          </div>
          
          <!-- Testimony 6 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-hands-helping text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Isabelle Rousseau</h4>
                <p class="text-xs text-gray-500">Août 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Soutien</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "Plus que la guérison physique, j'ai reçu la guérison de l'âme. Cette église est vraiment le corps de Christ en action."
            </p>
          </div>

          <!-- Additional Testimony 7 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-pray text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Marie Dupont</h4>
                <p class="text-xs text-gray-500">Juillet 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Foi</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "Dans les groupes de prière du mercredi, j'ai appris à déposer mes fardeaux aux pieds de Jésus. Ma vie spirituelle a été transformée."
            </p>
          </div>

          <!-- Additional Testimony 8 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-church text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Paul Lefebvre</h4>
                <p class="text-xs text-gray-500">Juin 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Communauté</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "J'ai trouvé ici une véritable famille spirituelle. Les frères et sœurs m'ont soutenu pendant les moments les plus difficiles de ma vie."
            </p>
          </div>

          <!-- Additional Testimony 9 -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fas fa-bible text-primary"></i>
              </div>
              <div>
                <h4 class="font-light text-gray-900">Anne Moreau</h4>
                <p class="text-xs text-gray-500">Mai 2023</p>
                <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">Étude</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm italic leading-relaxed">
              "Les enseignements ici m'ont ouvert les Écritures comme jamais auparavant. Je comprends maintenant la profondeur du Message du temps de la fin."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Share Your Story -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h3 class="text-2xl font-light text-gray-900 mb-8">
          Votre histoire aussi compte
        </h3>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Votre expérience avec Dieu est précieuse. En partageant votre témoignage, 
          vous offrez l'espoir à ceux qui traversent des épreuves similaires.
        </p>
        <div class="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p class="text-sm text-gray-700 italic mb-4">
            "Ils l'ont vaincu à cause du sang de l'Agneau et à cause de la parole de leur témoignage..."
          </p>
          <p class="text-xs text-primary font-semibold">Apocalypse 12:11</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Voix'
}
</script>
