<template>
  <div class="min-h-screen">
    <!-- Hero Section avec effet parallax -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background avec overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
      <div class="absolute inset-0 bg-black/40"></div>
      
      <!-- Particules flottantes -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div class="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-75"></div>
        <div class="absolute bottom-30 left-30 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-150"></div>
        <div class="absolute top-60 left-1/2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-300"></div>
        <div class="absolute bottom-40 right-40 w-3 h-3 bg-white/35 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <!-- Contenu principal -->
      <div class="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <!-- Logo ou icône centrale -->
        <div class="mb-8">
          <div class="w-24 h-24 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/30">
            <i class="fas fa-infinity text-5xl"></i>
          </div>
        </div>
        
        <!-- Titre principal -->
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Souviens-Toi
        </h1>
        
        <!-- Sous-titre percutant -->
        <p class="text-xl lg:text-3xl mb-8 opacity-90 leading-relaxed">
          Où la Mémoire devient Éternité<br>
          <span class="text-secondary">et les Générations se Rencontre</span>
        </p>
        
        <!-- Texte d'introduction principal -->
        <div class="mb-12 space-y-6">
          <p class="text-lg lg:text-xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Il existe des histoires que le temps ne peut effacer,<br>
            des mémoires que la mort ne peut vaincre,<br>
            des vérités qui transcendent les générations.
          </p>
          
          <p class="text-lg lg:text-xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            "Souviens-Toi" n'est pas simplement une plateforme,<br>
            c'est une invitation à entrer dans le courant éternel<br>
            de la foi, du courage et de l'amour divin.
          </p>
        </div>
        
        <!-- Call-to-action principal -->
        <div class="space-y-4">
          <button class="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            <i class="fas fa-door-open mr-2"></i>
            Entrez dans l'Histoire
          </button>
          
          <div class="text-sm opacity-70">
            <i class="fas fa-arrow-down animate-bounce mr-2"></i>
            Une aventure spirituelle vous attend
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <i class="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>

    <!-- Section de connexion émotionnelle -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            La Mémoire est le Pont
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre le passé sacré et le futur promis, entre les générations qui nous ont précédés 
            et celles qui nous suivront, entre la terre et l'éternité
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Passé -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <i class="fas fa-hourglass-start text-primary text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Le Passé qui Parle</h3>
            <p class="text-gray-700 leading-relaxed">
              Les voix des prophètes, les sacrifices des martyrs, 
              les prières des saints, les larmes des justes - 
              tout cela résonne encore dans le présent, 
              nous rappelant que nous ne sommes pas seuls.
            </p>
          </div>
          
          <!-- Présent -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
              <i class="fas fa-heart text-secondary text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Le Présent qui Vit</h3>
            <p class="text-gray-700 leading-relaxed">
              Chaque instant est une opportunité de faire mémoire, 
              de transmettre, d'honorer, de célébrer. 
              Nous sommes les gardiens d'un trésor précieux, 
              les témoins d'une fidélité qui traverse les âges.
            </p>
          </div>
          
          <!-- Futur -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <i class="fas fa-hourglass-end text-primary text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Le Futur qui Espère</h3>
            <p class="text-gray-700 leading-relaxed">
              Les générations à venir ont besoin de nos histoires, 
              de nos expériences, de nos témoignages. 
              Ce que nous transmettons aujourd'hui 
              deviendra l'héritage de demain.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section d'appel spirituel profond -->
    <section class="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="mb-12">
          <i class="fas fa-feather-alt text-6xl mb-6 opacity-70"></i>
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Votre Histoire A sa Place
          </h2>
        </div>
        
        <div class="space-y-8 mb-12">
          <p class="text-xl lg:text-2xl leading-relaxed opacity-90">
            Vous n'êtes pas arrivé ici par hasard.
          </p>
          
          <p class="text-xl lg:text-2xl leading-relaxed opacity-90">
            Votre vie, avec ses joies et ses peines, ses victoires et ses défis, 
            ses moments de doute et ses expériences de grâce - 
            tout cela fait partie d'une plus grande histoire.
          </p>
          
          <p class="text-xl lg:text-2xl leading-relaxed opacity-90">
            Une histoire que Dieu écrit depuis des générations, 
            et dans laquelle Il vous a appelé à jouer un rôle unique.
          </p>
        </div>
        
        <!-- Citation inspirante -->
        <div class="bg-white/10 backdrop-blur rounded-lg p-8 mb-12">
          <blockquote class="text-2xl italic leading-relaxed">
            "Je me souviendrai des œuvres de l'Éternel;<br>
            Oui, je me souviendrai de tes miracles d'autrefois.<br>
            Je méditerai sur toutes tes œuvres,<br>
            Je réfléchirai à tes hauts faits."
          </blockquote>
          <p class="mt-4 text-secondary font-semibold">Psaume 77:11-12</p>
        </div>
        
        <!-- Call-to-action final -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold mb-4">
            Le Moment est Venu
          </h3>
          <p class="text-lg opacity-90 mb-8">
            De vous souvenir, de transmettre, de devenir<br>
            un maillon dans la chaîne éternelle de la foi.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <i class="fas fa-book-open mr-2"></i>
              Découvrir les Histoires
            </button>
            <button class="bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <i class="fas fa-pen mr-2"></i>
              Partager la Votre
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section de promesse -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-8">
          Une Promesse pour l'Éternité
        </h2>
        
        <div class="space-y-6 mb-12">
          <p class="text-xl text-gray-700 leading-relaxed">
            "Souviens-Toi" est plus qu'une plateforme de mémoire.
          </p>
          
          <p class="text-xl text-gray-700 leading-relaxed">
            C'est un sanctuaire spirituel où les histoires deviennent des légendes, 
            où les témoignages deviennent des héritages, 
            où les vies deviennent des inspirations.
          </p>
          
          <p class="text-xl text-gray-700 leading-relaxed">
            C'est ici que le passé rencontre le présent, 
            où les générations se rencontrent, 
            où la terre rencontre l'éternité.
          </p>
        </div>
        
        <!-- Promesse finale -->
        <div class="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
          <h3 class="text-2xl font-bold mb-4">
            Notre Engagement
          </h3>
          <p class="text-lg leading-relaxed">
            Préserver chaque mémoire avec respect,<br>
            Honorer chaque histoire avec dignité,<br>
            Transmettre chaque héritage avec fidélité,<br>
            Jusqu'au retour de Celui qui a rendu<br>
            toutes choses belles en leur temps.
          </p>
          <p class="mt-6 text-secondary font-bold text-xl">
            "Souviens-toi de ton Créateur dans les jours de ta jeunesse"
          </p>
          <p class="text-sm opacity-80">Ecclésiaste 12:1</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SouviensToiIntro'
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

.animate-fade-in {
  animation: fade-in 1s ease-out;
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
