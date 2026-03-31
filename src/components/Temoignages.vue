<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4">Témoignages</h1>
        <p class="text-xl lg:text-2xl">Des vies transformées par la grâce de Dieu</p>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Récits de Transformation</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Des Vies Renouvelées par l'Amour Divin</h2>
          <p class="text-gray-600 mt-4 max-w-3xl mx-auto">
            Chaque témoignage est une preuve vivante que Dieu transforme les cœurs brisés, restaure les espoirs perdus, 
            et écrit des histoires de grâce au milieu des épreuves humaines.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="testimony in testimonies" 
            :key="testimony.id"
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i :class="testimony.icon" class="text-primary"></i>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900">{{ testimony.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimony.date }}</p>
                <div class="flex items-center gap-2 mt-2">
                  <span class="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {{ testimony.emotion }}
                  </span>
                  <span class="inline-block px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium">
                    {{ testimony.impact }}
                  </span>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <i class="fas fa-quote-left text-primary mb-2"></i>
              <p class="text-gray-700 italic leading-relaxed">{{ testimony.content }}</p>
              <i class="fas fa-quote-right text-primary mt-2"></i>
            </div>
            <div class="flex items-center text-yellow-400">
              <i v-for="star in 5" :key="star" class="fas fa-star text-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Testimony -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 lg:px-0">
        <div class="bg-white p-8 lg:p-12 rounded-lg shadow-xl">
          <div class="text-center mb-8">
            <h5 class="text-primary uppercase tracking-wider mb-2">// Témoignages des Ministres //</h5>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">L'Impact Spirituel de Shekinah Tabernacle</h2>
            <p class="text-gray-600 mt-4 max-w-3xl mx-auto">
              Des serviteurs de Dieu témoignent de l'œuvre accomplie par le Saint-Esprit au sein de l'Église et à travers le Message du Temps de la Fin.
            </p>
          </div>
          
          <div class="text-center mb-8">
            <div class="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
              <img src="/temoignage/Pastor.jpg" alt="Richard Diyoka N'sanguluja" class="w-full h-full object-cover">
            </div>
            <h3 class="text-2xl font-bold mb-2">Pasteur Richard Diyoka N'sanguluja</h3>
            <p class="text-gray-600">Fondateur et Pasteur Principal</p>
            <p class="text-gray-600 italic mt-4">Les fidèles, amis et ministres partagent leurs expériences et témoignent de l'impact spirituel et humain de notre Pasteur.</p>
          </div>
          
          <!-- Grille de témoignages avec audios correspondants -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative">
                <img src="/temoignage/bitwa.jpg" alt="Pasteur Bitwa - Serviteur de Dieu" class="w-full h-full object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
                  Témoignage Audio
                </div>
              </div>
              <h4 class="font-bold text-lg mb-1 text-center">Pasteur Bitwa</h4>
              <p class="text-gray-600 text-sm mb-4 text-center">Serviteur de Dieu</p>
              <div class="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                <p class="text-sm text-gray-700 text-center italic">
                  "J'ai découvert ici plus qu'une église : une famille spirituelle où l'amour de Dieu se manifeste à travers chaque frère et sœur."
                </p>
              </div>
              <div class="audio-player">
                <audio controls class="w-full">
                  <source src="/audios/Bitwa.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
              <p class="text-gray-500 text-xs mt-3 text-center">
                <i class="fas fa-clock mr-1"></i>Écoutez l'expérience complète du pasteur
              </p>
            </div>
            
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative">
                <img src="/temoignage/bala.jpg" alt="Pasteur Balanganayi - Serviteur de Dieu" class="w-full h-full object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
                  Témoignage Audio
                </div>
              </div>
              <h4 class="font-bold text-lg mb-1 text-center">Pasteur Balanganayi</h4>
              <p class="text-gray-600 text-sm mb-4 text-center">Serviteur de Dieu</p>
              <div class="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                <p class="text-sm text-gray-700 text-center italic">
                  "Le Message prêché ici a transformé mon ministère et ravivé ma passion pour les âmes perdues."
                </p>
              </div>
              <div class="audio-player">
                <audio controls class="w-full">
                  <source src="/audios/bala.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
              <p class="text-gray-500 text-xs mt-3 text-center">
                <i class="fas fa-clock mr-1"></i>Découvrez son parcours spirituel
              </p>
            </div>
            
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative">
                <img src="/temoignage/testimonial-1.gif" alt="Révérend KAYUMBI BEYA Léonard - Guide Spirituel" class="w-full h-full object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
                  Témoignage Audio
                </div>
              </div>
              <h4 class="font-bold text-lg mb-1 text-center">Révérend KAYUMBI BEYA Léonard</h4>
              <p class="text-gray-600 text-sm mb-4 text-center">Guide spirituel ZOE TABERNACLE</p>
              <div class="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                <p class="text-sm text-gray-700 text-center italic">
                  "Shekinah Tabernacle est devenu pour moi une source d'inspiration et de rafraîchissement spirituel."
                </p>
              </div>
              <div class="audio-player">
                <audio controls class="w-full">
                  <source src="/audios/past_kayumbi.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
              <p class="text-gray-500 text-xs mt-3 text-center">
                <i class="fas fa-clock mr-1"></i>Partagez son expérience ministérielle
              </p>
            </div>
          </div>
          
          <!-- Témoignage principal avec audio du Pasteur Yves -->
          <div class="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 relative">
                <img src="/temoignage/testimonial-2.webp" alt="Pasteur Yves Kalombo - Serviteur de Dieu" class="w-full h-full object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm text-center py-2">
                  Témoignage Audio
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-2">Pasteur Yves Kalombo</h3>
                <p class="text-gray-600 mb-4">Serviteur de Dieu à l'église Logos Tabernacle de Kinshasa</p>
                <div class="bg-white rounded-lg p-4 mb-4">
                  <p class="text-gray-700 italic text-center">
                    "Mon expérience à Shekinah Tabernacle a profondément marqué mon ministère. J'y ai trouvé non seulement des frères et sœurs en Christ, mais des partenaires dans l'œuvre de Dieu."
                  </p>
                </div>
                <div class="audio-player mb-4">
                  <audio controls class="w-full max-w-md">
                    <source src="/audios/yves.mp3" type="audio/mpeg">
                    Votre navigateur ne supporte pas l'élément audio.
                  </audio>
                </div>
                <p class="text-gray-500 text-sm">
                  <i class="fas fa-headphones mr-1"></i>Un témoignage qui inspire et encourage
                </p>
              </div>
            </div>
          </div>
          
          <!-- Informations supplémentaires sur les témoignages -->
          <div class="mt-12 bg-gray-50 p-6 rounded-lg">
            <h4 class="font-bold text-lg mb-4 text-primary">À Propos des Témoignages</h4>
            <p class="text-gray-700 mb-4">
              Ces témoignages authentiques proviennent de serviteurs de Dieu qui ont été directement touchés par l'œuvre du Saint-Esprit au sein de Shekinah Tabernacle. Chaque audio représente une expérience réelle de transformation spirituelle à travers le Message du Temps de la Fin.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-2 mt-1"></i>
                <span>Pasteur Bitwa : Serviteur de Dieu</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-2 mt-1"></i>
                <span>Pasteur Balanganayi : Serviteur de Dieu</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-2 mt-1"></i>
                <span>Révérend KAYUMBI BEYA Léonard : Guide spirituel ZOE TABERNACLE</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-2 mt-1"></i>
                <span>Pasteur Yves Kalombo : Serviteur de Dieu Logos Tabernacle</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Submit Testimony -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-3 lg:px-0">
        <div class="text-center mb-12">
          <h5 class="text-primary uppercase tracking-wider mb-2">Partagez Votre Histoire</h5>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Votre Témoignage Peut Transformer des Vies</h2>
          <p class="text-gray-600 mt-4 max-w-3xl mx-auto">
            Votre expérience avec Dieu est précieuse. En partageant votre témoignage, 
            vous offrez l'espoir à ceux qui traversent des épreuves similaires et glorifiez Dieu pour Sa fidélité.
          </p>
        </div>
        
        <form @submit.prevent="submitTestimony" class="bg-white p-8 rounded-lg shadow-lg">
          <div class="text-center mb-8">
            <div class="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
              <i class="fas fa-feather-alt text-primary text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Écrivez Votre Chapitre</h3>
            <p class="text-gray-600 text-sm mt-2">Chaque témoignage est une pierre ajoutée à l'édifice de la foi</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="name">
                <i class="fas fa-user mr-2 text-primary"></i>Votre Nom
              </label>
              <input 
                v-model="form.name"
                type="text" 
                id="name" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Comment vous appelez-vous ?"
                required
              >
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="email">
                <i class="fas fa-envelope mr-2 text-primary"></i>Votre Email
              </label>
              <input 
                v-model="form.email"
                type="email" 
                id="email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="votre.email@exemple.com"
                required
              >
            </div>
          </div>
          
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="testimony">
              <i class="fas fa-heart mr-2 text-primary"></i>Votre Histoire de Transformation
            </label>
            <textarea 
              v-model="form.testimony"
              id="testimony" 
              rows="6" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Partagez comment Dieu a transformé votre vie... Soyez authentique, soyez vous-même. Votre histoire peut toucher des vies."
              required
            ></textarea>
            <p class="text-xs text-gray-500 mt-2">
              <i class="fas fa-info-circle mr-1"></i>
              N'hésitez pas à partager les détails de votre expérience - les épreuves, les moments de doute, et comment Dieu vous a soutenu.
            </p>
          </div>
          
          <div class="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
            <p class="text-sm text-gray-700 text-center">
              <i class="fas fa-quote-left text-primary mr-2"></i>
              "Ils l'ont vaincu à cause du sang de l'Agneau et à cause de la parole de leur témoignage..."
              <i class="fas fa-quote-right text-primary ml-2"></i>
              <span class="block text-right mt-1 text-primary font-semibold">Apocalypse 12:11</span>
            </p>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-bold flex items-center justify-center"
          >
            <i class="fas fa-paper-plane mr-2"></i>
            Envoyer Mon Témoignage
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Temoignages',
  data() {
    return {
      testimonies: [
        {
          id: 1,
          name: 'Jean Martin',
          date: 'Janvier 2026',
          content: 'J\'étais arrivé ici le cœur brisé, ma foi réduite en cendres. Les épreuves de la vie m\'avaient éloigné de Dieu, et je me sentais seul dans mes ténèbres. Mais ce jour-là, alors que je m\'assis au fond de l\'assemblée, quelque chose commença à changer. La Parole prononcée avec tant d\'onction atteignit mon âme assoiffée. Chaque parole était comme une goutte d\'eau sur une terre sèche. Lentement, la lumière commença à percer mes nuages. Aujourd\'hui, je peux dire avec larmes de joie que je suis né de nouveau. Cette église ne m\'a pas seulement donné des enseignements, elle m\'a rendu ma dignité, ma famille spirituelle, et surtout ma relation avec Dieu.',
          icon: 'fas fa-heart',
          emotion: 'Restauration',
          impact: 'Retour à la foi'
        },
        {
          id: 2,
          name: 'Sophie Laurent',
          date: 'Décembre 2025',
          content: 'Il y a cinq ans, je traversais une vallée sombre. Le divorce venait de briser mon mariage, mes enfants souffraient, et ma prière semblait ne jamais dépasser le plafond. Une amie m\'a amenée ici, à contre-cœur. La première chose que j\'ai ressentie, ce n\'était pas le jugement, mais l\'amour. Des inconnus sont venus me serrer la main, prier avec moi, pleurer avec moi. Dans les groupes de prière du mercredi, j\'ai appris à déposer mes fardeaux aux pieds de Jésus. Dieu m\'a guérie intérieurement. Il a restauré mon cœur brisé, et mes enfants ont retrouvé la paix. Aujourd\'hui, je ne suis plus la victime de mes circonstances, mais une survivante victorieuse par la grâce de Dieu.',
          icon: 'fas fa-dove',
          emotion: 'Guérison',
          impact: 'Restauration familiale'
        },
        {
          id: 3,
          name: 'Pierre Bernard',
          date: 'Novembre 2025',
          content: 'Comme beaucoup de pères, je m\'inquiétais pour l\'avenir spirituel de mes enfants dans ce monde si trouble. J\'avais tout essayé : écoles chrétiennes, cours bibliques, mais rien ne semblait toucher leurs cœurs. Puis nous avons découvert cette église. La première chose qui m\'a frappé, c\'est l\'amour authentique que les enfants reçoivent ici. Ils ne sont pas considérés comme des adultes en miniature, mais comme des âmes précieuses que Dieu aime. Mes enfants, qui détestaient aller à l\'église, demandent maintenant quand nous pouvons y retourner. Ils apprennent les Écritures avec joie, ils prient avec sincérité, et je vois leurs vies se transformer. Dieu m\'a donné ici plus qu\'une église : Il m\'a donné une famille spirituelle pour mes enfants.',
          icon: 'fas fa-child',
          emotion: 'Espoir',
          impact: 'Transmission de la foi'
        },
        {
          id: 4,
          name: 'Claire Dubois',
          date: 'Octobre 2025',
          content: 'À 19 ans, je me sentais perdue. L\'université, les pressions sociales, les questions existentielles - tout semblait me pousser loin de mes racines chrétiennes. J\'ai failli abandonner ma foi. Puis un jour, une camarade m\'a invitée à un groupe de jeunes ici. Ce que j\'ai découvert m\'a surprise : ce n\'était pas un groupe de "jeunes religieux", mais une famille de personnes authentiques qui luttaient comme moi. Nous partagions nos doutes, nos peurs, mais aussi nos victoires. Dans cette authenticité, ma foi a trouvé un terrain solide. Aujourd\'hui, je ne suis plus seulement une croyante par tradition, mais une disciple par conviction. J\'ai trouvé ici des amis qui m\'élèvent spirituellement, et une foi qui résiste aux tempêtes de la vie.',
          icon: 'fas fa-graduation-cap',
          emotion: 'Transformation',
          impact: 'Foi personnelle'
        },
        {
          id: 5,
          name: 'Michel Petit',
          date: 'Septembre 2025',
          content: 'Pendant des années, j\'ai fréquenté des églises où tout était rituel et routine. Ma foi était intellectuelle, mais mon cœur restait froid. Puis je suis entré ici un dimanche matin. La première chose qui m\'a atteint, ce n\'était pas le sermon, mais l\'adoration. Quand les chants ont commencé, j\'ai senti quelque chose se briser à l\'intérieur. Pour la première fois, je ne chantais pas seulement des paroles, je les vivais. La présence de Dieu est devenue si réelle, si tangible. Les larmes coulaient sur mes joues alors que le Saint-Esprit me visitait. Ce jour-là, mon christianisme est passé de la religion à la relation. Aujourd\'hui, chaque culte est une rencontre vivante avec Dieu, et je ne peux plus imaginer vivre sans cette intimité divine.',
          icon: 'fas fa-music',
          emotion: 'Révélation',
          impact: 'Intimité divine'
        },
        {
          id: 6,
          name: 'Isabelle Rousseau',
          date: 'Août 2025',
          content: 'Le diagnostic est tombé comme un coup de tonnerre : cancer. Le monde s\'effondrait autour de moi. Mais ce qui m\'a le plus marqué pendant cette épreuve, ce n\'a pas été la maladie, mais l\'amour de cette communauté. Chaque jour, des visites, des appels, des prières. Des frères et sœurs qui veillaient avec moi dans les nuits sombres. Ils ne m\'ont pas seulement donné de la nourriture ou des rides, ils m\'ont donné leur foi quand la mienne vacillait. Ils m\'ont rappelé les promesses de Dieu quand mes doutes assaillaient. Aujourd\'ui, je suis en rémission, mais plus que la guérison physique, j\'ai reçu la guérison de l\'âme. Cette église n\'est pas une organisation, c\'est vraiment le corps de Christ en action.',
          icon: 'fas fa-hands-helping',
          emotion: 'Soutien',
          impact: 'Communauté authentique'
        }
      ],
      form: {
        name: '',
        email: '',
        testimony: ''
      }
    }
  },
  methods: {
    submitTestimony() {
      // Ici vous pourriez ajouter la logique pour soumettre le témoignage
      alert('Merci pour votre témoignage! Nous le traiterons bientôt.')
      this.form = {
        name: '',
        email: '',
        testimony: ''
      }
    }
  }
}
</script>
