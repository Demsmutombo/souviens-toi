<template>
  <div class="min-h-screen bg-bg-cream">
    <Navbar />
    
    <!-- Hero Section - Design Souviens-Toi -->
    <section class="relative bg-gradient-to-br from-primary-bordeaux to-primary-gold text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative container mx-auto px-4 py-20 lg:py-32">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Message<br>
            <span class="text-yellow-200">La Sagesse Éternelle</span>
          </h1>
          <div class="text-2xl md:text-3xl font-serif mb-8 text-yellow-100">
            Les vérités intemporelles pour notre génération
          </div>
          <p class="text-lg md:text-xl mb-12 text-gray-100 leading-relaxed max-w-4xl mx-auto">
            Dans un monde de changements constants, les enseignements fondamentaux 
            de la Parole de Dieu demeurent l'ancre inébranlable pour notre foi.
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-12 text-bg-cream" viewBox="0 0 1440 48" fill="currentColor">
          <path d="M0,32 C120,42 240,18 360,24 C480,30 600,42 720,36 C840,30 960,18 1080,24 C1200,30 1320,42 1440,32 L1440,48 L0,48 Z"/>
        </svg>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Les Fondements Spirituels
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Les principes divins qui guident nos vies et façonnent notre foi
          </p>
        </div>
        
        <!-- Image de William Branham -->
        <div class="max-w-4xl mx-auto mb-16">
          <div class="text-center">
            <div class="inline-block relative mb-8">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-full scale-110"></div>
              <img src="/temoignage/branham2.jpg" 
                   alt="William Branham - Messager du temps de la fin" 
                   class="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-8 border-white/90 transform hover:scale-105 transition-all duration-300">
            </div>
            <h3 class="text-2xl font-serif font-bold text-primary-gold mb-4">William Branham</h3>
            <p class="text-lg text-gray-600 italic">Messager du temps de la fin</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Message -->
    <section class="py-20 bg-bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Message du Temps Présent
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Une parole vivante pour notre génération
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                <i class="fas fa-dove"></i>
              </div>
              <div>
                <h3 class="text-2xl font-serif font-bold text-primary-gold">La Révélation du Temps de la Fin</h3>
                <p class="text-text-secondary">Une compréhension profonde du plan divin</p>
              </div>
            </div>
            <p class="text-gray-700 leading-relaxed mb-6">
              Nous vivons dans une époque unique où les prophéties bibliques s'accomplissent 
              sous nos yeux. Le Message du temps de la fin nous donne la compréhension 
              nécessaire pour discerner les signes des temps et nous préparer pour le retour 
              imminent de notre Seigneur Jésus-Christ.
            </p>
            <div class="bg-primary-gold/10 rounded-lg p-4">
              <p class="text-primary-gold font-semibold mb-2">Écriture clé</p>
              <p class="text-gray-700 italic">
                "Soyez donc vigilants, car vous ne savez ni le jour, ni l'heure." - Matthieu 25:13
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Principles -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Les Piliers de la Foi
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Les vérités fondamentales qui soutiennent notre vie spirituelle
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Principle 1 -->
          <div class="bg-bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i class="fas fa-cross text-2xl"></i>
              </div>
              <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">Le Salut par la Foi</h3>
            </div>
            <p class="text-gray-700 mb-4">
              La foi en Jésus-Christ comme seul moyen de salut, par grâce et non par les œuvres.
            </p>
            <div class="bg-white rounded-lg p-3">
              <p class="text-primary-gold font-semibold text-sm">Éphésiens 2:8-9</p>
              <p class="text-gray-600 text-sm italic">
                "Car c'est par la grâce que vous êtes sauvés..."
              </p>
            </div>
          </div>

          <!-- Principle 2 -->
          <div class="bg-bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary-ocre rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i class="fas fa-bible text-2xl"></i>
              </div>
              <h3 class="text-xl font-serif font-bold text-primary-ocre mb-2">L'Inspiration des Écritures</h3>
            </div>
            <p class="text-gray-700 mb-4">
              La Bible comme Parole inspirée de Dieu, autorité finale en matière de foi et de pratique.
            </p>
            <div class="bg-white rounded-lg p-3">
              <p class="text-primary-ocre font-semibold text-sm">2 Timothée 3:16</p>
              <p class="text-gray-600 text-sm italic">
                "Toute Écriture est inspirée de Dieu..."
              </p>
            </div>
          </div>

          <!-- Principle 3 -->
          <div class="bg-bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary-bordeaux rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i class="fas fa-dove text-2xl"></i>
              </div>
              <h3 class="text-xl font-serif font-bold text-primary-bordeaux mb-2">Le Baptême du Saint-Esprit</h3>
            </div>
            <p class="text-gray-700 mb-4">
              L'expérience du Saint-Esprit comme promesse pour tous les croyants.
            </p>
            <div class="bg-white rounded-lg p-3">
              <p class="text-primary-bordeaux font-semibold text-sm">Actes 2:4</p>
              <p class="text-gray-600 text-sm italic">
                "Ils furent tous remplis du Saint-Esprit..."
              </p>
            </div>
          </div>

          <!-- Principle 4 -->
          <div class="bg-bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i class="fas fa-heart text-2xl"></i>
              </div>
              <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">La Vie de Sainteté</h3>
            </div>
            <p class="text-gray-700 mb-4">
              L'appel à une vie séparée et consacrée, reflétant le caractère de Christ.
            </p>
            <div class="bg-white rounded-lg p-3">
              <p class="text-primary-gold font-semibold text-sm">1 Pierre 1:16</p>
              <p class="text-gray-600 text-sm italic">
                "Soyez saints, car je suis saint."
              </p>
            </div>
          </div>

          <!-- Principle 5 -->
          <div class="bg-bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary-ocre rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i class="fas fa-church text-2xl"></i>
              </div>
              <h3 class="text-xl font-serif font-bold text-primary-ocre mb-2">L'Église Locale</h3>
            </div>
            <p class="text-gray-700 mb-4">
              L'importance de la communion fraternelle et de l'assemblée locale.
            </p>
            <div class="bg-white rounded-lg p-3">
              <p class="text-primary-ocre font-semibold text-sm">Hébreux 10:25</p>
              <p class="text-gray-600 text-sm italic">
                "N'abandonnez pas votre assemblée..."
              </p>
            </div>
          </div>

          <!-- Principle 6 -->
          <div class="bg-bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary-bordeaux rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i class="fas fa-crown text-2xl"></i>
              </div>
              <h3 class="text-xl font-serif font-bold text-primary-bordeaux mb-2">Le Retour de Christ</h3>
            </div>
            <p class="text-gray-700 mb-4">
              L'espérance bienheureuse du retour imminent de notre Seigneur Jésus-Christ.
            </p>
            <div class="bg-white rounded-lg p-3">
              <p class="text-primary-bordeaux font-semibold text-sm">1 Thessaloniciens 4:16-17</p>
              <p class="text-gray-600 text-sm italic">
                "Le Seigneur lui-même descendra du ciel..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Historical Messages -->
    <section class="py-20 bg-bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Messages Historiques
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Les enseignements qui ont marqué l'histoire de l'Église
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <div>
                <h3 class="text-xl font-serif font-bold text-primary-gold">La Réformation</h3>
                <p class="text-text-secondary">16ème siècle</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Le retour aux Écritures comme seule autorité, "Sola Scriptura".
            </p>
            <div class="bg-primary-gold/10 rounded-lg p-3">
              <p class="text-primary-gold font-semibold text-sm">Martin Luther</p>
              <p class="text-gray-600 text-sm italic">
                "Juste par la foi, seule la foi."
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-ocre rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <div>
                <h3 class="text-xl font-serif font-bold text-primary-ocre">Le Réveil</h3>
                <p class="text-text-secondary">18ème siècle</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Le renouveau spirituel avec l'accent sur la sanctification et la prière.
            </p>
            <div class="bg-primary-ocre/10 rounded-lg p-3">
              <p class="text-primary-ocre font-semibold text-sm">John Wesley</p>
              <p class="text-gray-600 text-sm italic">
                "Un cœur réchauffé par l'amour de Dieu."
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-bordeaux rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <div>
                <h3 class="text-xl font-serif font-bold text-primary-bordeaux">Le Réveil du Rétablissement</h3>
                <p class="text-text-secondary">20ème siècle</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              La restauration des vérités bibliques perdues à travers les âges.
            </p>
            <div class="bg-primary-bordeaux/10 rounded-lg p-3">
              <p class="text-primary-bordeaux font-semibold text-sm">William Branham</p>
              <p class="text-gray-600 text-sm italic">
                "Le rétablissement de toutes choses."
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                4
              </div>
              <div>
                <h3 class="text-xl font-serif font-bold text-primary-gold">Le Message du Temps de la Fin</h3>
                <p class="text-text-secondary">Notre époque</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              La révélation des mystères divins pour la préparation de l'Épouse.
            </p>
            <div class="bg-primary-gold/10 rounded-lg p-3">
              <p class="text-primary-gold font-semibold text-sm">Apocalypse 10:7</p>
              <p class="text-gray-600 text-sm italic">
                "Le mystère de Dieu s'accomplit."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Study Resources -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Ressources d'Étude
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Approfondissez votre compréhension du Message divin
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <i class="fas fa-book text-3xl"></i>
            </div>
            <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">Études Bibliques</h3>
            <p class="text-gray-700">
              Des études approfondies des Écritures avec des commentaires inspirés
            </p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-ocre rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <i class="fas fa-headphones text-3xl"></i>
            </div>
            <h3 class="text-xl font-serif font-bold text-primary-ocre mb-2">Messages Audio</h3>
            <p class="text-gray-700">
              Enregistrements de prédications et d'enseignements spirituels
            </p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-bordeaux rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <i class="fas fa-video text-3xl"></i>
            </div>
            <h3 class="text-xl font-serif font-bold text-primary-bordeaux mb-2">Vidéos</h3>
            <p class="text-gray-700">
              Témoignages et enseignements visuels pour nourrir votre foi
            </p>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
</script>
                                      
                                   
                                                                                                                                
