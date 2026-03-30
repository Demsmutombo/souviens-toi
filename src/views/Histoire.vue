<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-80 sm:h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative text-center text-white px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-light mb-4">Histoire</h1>
        <p class="text-lg sm:text-xl lg:text-2xl opacity-90">Le voyage de la foi à travers le temps</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-6 sm:mb-8">
          Quand Dieu écrit une histoire
        </h2>
        <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Chaque date dans cette timeline n'est pas simplement un marqueur de temps, 
          mais une étape dans le plan divin de rédemption et de restauration.
        </p>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Timeline line -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
          
          <!-- Timeline events -->
          <div class="space-y-8 sm:space-y-12 lg:space-y-16">
            <!-- 1909 - Naissance -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">6 AVRIL 1909</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">La Semence Divine</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Dans une humble cabane du Kentucky, la Colonne de Feu visite la naissance 
                    de William Branham, marquant le début d'une mission prophétique pour préparer le second avènement.
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>

            <!-- 1916 - Première Voix -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 pr-0 sm:pr-8 order-2 sm:order-1"></div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 text-left pl-8 sm:pl-8 order-3 sm:order-3">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">1916</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">La Première Commission</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    À sept ans, sous un peuplier séculaire, une Voix céleste lui donne des instructions divines : 
                    "Ne bois pas, ne fume pas... tu auras une œuvre à accomplir."
                  </p>
                </div>
              </div>
            </div>

            <!-- 1927 - Le Désert -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">1927</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">Le Désert de la Formation</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Fuyant sa destinée dans les montagnes de l'Arizona. La mort de son frère Édouard 
                    le ramène à sa mission divine dans le creuset de la souffrance.
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>

            <!-- 1933 - Commission -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 pr-0 sm:pr-8 order-2 sm:order-1"></div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 text-left pl-8 sm:pl-8 order-3 sm:order-3">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">1933</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">L'Onction Prophétique</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Dans une cabane de trappeur, l'Ange du Seigneur lui apparaît : 
                    "Si tu amènes les gens à te croire, rien ne résistera à tes prières."
                  </p>
                </div>
              </div>
            </div>

            <!-- 1946 - Début du Réveil -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">1946</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">Le Réveil Commence</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Le réveil de guérison commence avec des campagnes qui attirent des centaines de milliers de personnes. 
                    Des guérisons miraculeuses et des prophéties confirment son ministère.
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>

            <!-- 1950 - Confirmation -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 pr-0 sm:pr-8 order-2 sm:order-1"></div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 text-left pl-8 sm:pl-8 order-3 sm:order-3">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">24 JANVIER 1950</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">Dieu Rend Témoignage</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Au stade Sam Houston, la Colonne de Feu est photographiée. George J. Lacy, expert du FBI, 
                    confirme l'authenticité du miracle. Dieu Lui-même a rendu témoignage.
                  </p>
                </div>
              </div>
            </div>

            <!-- 1960 - Dernier Message -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">18 DÉCEMBRE 1960</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">Le Dernier Message</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    "Le Son confus" est prêché à Jeffersonville - le 1209ème et dernier sermon 
                    qui sera traduit 53 ans plus tard.
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>

            <!-- 1965 - Fin du ministère -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 pr-0 sm:pr-8 order-2 sm:order-1"></div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 text-left pl-8 sm:pl-8 order-3 sm:order-3">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">30 DÉCEMBRE 1965</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">Le Coucher du Soleil</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    William Marrion Branham rejoint la grande assemblée des prophètes. 
                    Sa mort n'est pas la fin, mais le début d'une nouvelle ère.
                  </p>
                </div>
              </div>
            </div>

            <!-- 1990 - Continuité -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">3 JUIN 1990</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">La Continuité du Message</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Richard Diyoka fonde Shekinah Tabernacle, perpétuant l'héritage prophétique 
                    et préparant l'Épouse pour le grand jour. Vingt-cinq ans après la mort du prophète.
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>

            <!-- 1990-2013 - Période de Traduction -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 pr-0 sm:pr-8 order-2 sm:order-1"></div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 text-left pl-8 sm:pl-8 order-3 sm:order-3">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">1990-2013</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">Les Vingt-Trois Ans de Fidélité</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Douze traducteurs et trois encodeuses travaillent sans relâche pour traduire 
                    les 1209 sermons du prophète en français. Une mission de préservation.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2013 - Accomplissement -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">3 JUIN 2013</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">La Mission Accomplie</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Le dernier sermon est traduit. L'Épouse francophone dispose désormais 
                    de la totalité du Message. Vingt-trois ans de travail acharné accomplis.
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>

            <!-- 2013-Présent - Expansion -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 pr-0 sm:pr-8 order-2 sm:order-1"></div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white order-1 sm:order-2"></div>
              <div class="flex-1 text-left pl-8 sm:pl-8 order-3 sm:order-3">
                <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md">
                  <div class="text-primary font-light text-xs sm:text-sm mb-2">2013-PRÉSENT</div>
                  <h3 class="text-lg sm:text-xl font-light text-gray-900 mb-2">L'Épouse S'Étend</h3>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Le Message atteint 60 pays. Des églises sœurs naissent en Afrique, Europe, Amérique, Asie et Océanie. 
                    40M+ de brochures distribuées, une génération préparée.
                  </p>
                </div>
              </div>
            </div>

            <!-- Future - Le Grand Jour -->
            <div class="relative flex items-start sm:items-center">
              <div class="flex-1 text-right pr-8 sm:pr-8 order-2 sm:order-1">
                <div class="bg-gradient-to-r from-primary to-secondary p-4 sm:p-6 rounded-lg shadow-sm max-w-md ml-auto sm:ml-auto text-white">
                  <div class="text-white font-light text-xs sm:text-sm mb-2">BIENTÔT</div>
                  <h3 class="text-lg sm:text-xl font-light text-white mb-2">Le Grand Jour</h3>
                  <p class="text-white/80 text-xs sm:text-sm leading-relaxed">
                    L'accomplissement final de Malachie 4:5-6. L'Épouse préparée, le Message complet, 
                    la promesse sur le point de s'accomplir. Maranatha!
                  </p>
                </div>
              </div>
              <div class="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white animate-pulse order-1 sm:order-2"></div>
              <div class="flex-1 pl-0 sm:pl-8 order-3 sm:order-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Historical Context -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Le Contexte Prophétique
          </h3>
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            L'histoire de Shekinah Tabernacle s'inscrit dans l'accomplissement des prophéties bibliques 
            et la restauration de la vérité apostolique pour les temps de la fin.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="text-lg font-light text-primary mb-4">Malachie 4:5-6</h4>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              "Voici, je vous enverrai Élie, le prophète, avant que le jour de l'Éternel arrive, 
              ce jour grand et redoutable. Il ramènera le cœur des pères à leurs enfants, 
              et le cœur des enfants à leurs pères."
            </p>
            <p class="text-gray-500 text-xs italic">
              La promesse d'un messager prophétique pour la fin des temps
            </p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="text-lg font-light text-primary mb-4">Apocalypse 10:7</h4>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              "Dans les jours où la septième trompette sonnera, 
              le mystère de Dieu s'accomplira, comme il l'a annoncé à ses serviteurs les prophètes."
            </p>
            <p class="text-gray-500 text-xs italic">
              La révélation des mystères scellés pour notre génération
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Events -->
    <section class="py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Événements Clés
          </h3>
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Les moments déterminants qui ont marqué l'histoire de notre mouvement
          </p>
        </div>
        
        <div class="space-y-6 sm:space-y-8">
          <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-fire text-primary"></i>
              </div>
              <div>
                <h4 class="text-lg font-light text-gray-900 mb-2">24 Janvier 1950 - Houston, Texas</h4>
                <p class="text-gray-600 text-sm leading-relaxed">
                  La Colonne de Feu est photographiée pendant le service. George J. Lacy, 
                  expert en photographie du FBI, authentifie le phénomène surnaturel. 
                  Dieu Lui-même rend témoignage de Son ministère.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-book text-primary"></i>
              </div>
              <div>
                <h4 class="text-lg font-light text-gray-900 mb-2">18 Décembre 1960 - Jeffersonville, Indiana</h4>
                <p class="text-gray-600 text-sm leading-relaxed">
                  "Le Son Confus" - le 1209ème et dernier sermon. William Branham déclare : 
                  "C'est le dernier message que j'aurai à prêcher avant l'ouverture des Sept Sceaux."
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-cross text-primary"></i>
              </div>
              <div>
                <h4 class="text-lg font-light text-gray-900 mb-2">30 Décembre 1965 - Amarillo, Texas</h4>
                <p class="text-gray-600 text-sm leading-relaxed">
                  William Marrion Branham rejoint la grande assemblée des prophètes. 
                  Sa mort n'est pas la fin mais le commencement d'une nouvelle ère 
                  où l'Épouse doit prendre son relais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Les chiffres de la grâce
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl font-light text-primary mb-2">114</div>
            <p class="text-sm text-gray-600">Ans d'histoire</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-light text-primary mb-2">1209</div>
            <p class="text-sm text-gray-600">Messages traduits</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-light text-primary mb-2">60</div>
            <p class="text-sm text-gray-600">Pays touchés</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-light text-primary mb-2">40M+</div>
            <p class="text-sm text-gray-600">Vies transformées</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Histoire'
}
</script>
