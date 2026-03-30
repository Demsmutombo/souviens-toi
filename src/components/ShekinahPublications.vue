<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4">Shekinah Publications</h1>
        <p class="text-xl lg:text-2xl">Oeuvre Missionnaire pour l'Épouse de Christ</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-3 lg:px-0">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Le Message du Temps de la Fin</h2>
            
            <div class="prose prose-lg max-w-none">
              <p class="text-gray-700 leading-relaxed mb-6">
                Le Révérend William Marrion Branham, que le Dieu Tout-Puissant a confirmé comme le prophète de Dieu pour notre génération, a reçu du Seigneur un Message pour cet âge, contenu dans plus ou moins 1200 sermons enregistrés sur des bandes magnétiques. Ce Message devait être traduit, dans plusieurs langues. pour être diffusé à travers le monde entier, pour l'édification de l'Église et la préparation de l'Épouse du Seigneur Jésus-Christ. Shekinah Missions est convaincue que ce Message est l'Évangile du Seigneur Jésus-Christ pour ce temps de la fin.
              </p>
              
              <blockquote class="bg-primary/10 border-l-4 border-primary p-6 my-8">
                <p class="text-xl font-semibold text-gray-900 italic text-center">
                  «Louez l'Eternel, invoquez son nom! Faites connaître parmi les peuples ses hauts faits!»
                </p>
              </blockquote>
            </div>
          </div>

          <!-- Mission de Shekinah Missions -->
          <div class="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 class="text-2xl font-bold text-primary mb-4">Notre Mission</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Shekinah Missions s'est donné la charge de diffuser cette Bonne Nouvelle du Royaume par des moyens suivants :
            </p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-3 mt-1"></i>
                <span>La traduction du Message dans les langues nationales et internationales.</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-3 mt-1"></i>
                <span>La prédication et l'enseignement de la Parole de Dieu conformément au Message du temps de la fin et à la Bible (Éphésiens, chapitre 4.)</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-primary mr-3 mt-1"></i>
                <span>Shekinah Missions reçoit les demandes des sermons du prophète de Dieu, William Marrion Branham, et y répond en envoyant gratuitement ces sermons.</span>
              </li>
            </ul>
          </div>

          <!-- Statistiques -->
          <div class="text-center">
            <div class="bg-gray-100 p-6 rounded-lg">
              <p class="text-2xl font-bold text-primary mb-2">60 pays à travers le monde sont servis</p>
              <p class="text-gray-600">Par la grâce de Dieu et votre soutien</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Répartition par Continent -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-3 lg:px-0">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Notre Portée Mondiale</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Afrique -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-globe-africa text-primary text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Afrique</h3>
                <p class="text-gray-600">36 pays</p>
              </div>
            </div>
            <div class="text-sm text-gray-600 space-y-1">
              <p>Afrique du Sud, Angola, Bénin, Burkina Faso, Burundi, Cameroun, Tchad, République populaire du Congo, République Démocratique du Congo, Guinée Équatoriale, Gabon, Ghana, Ethiopie, Ile de la Réunion, Ile Rodrigues, Madagascar, Côte d'Ivoire, Libye, Malawi, Mali, Mauritanie, Maroc, Mozambique, Niger, Nigeria, République Centrafricaine, Rwanda, Sénégal, Swaziland, Ouganda, Zambie, Togo, Tanzanie, Soudan, Tunisie</p>
            </div>
          </div>

          <!-- Amérique -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-globe-americas text-primary text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Amérique</h3>
                <p class="text-gray-600">5 pays</p>
              </div>
            </div>
            <div class="text-sm text-gray-600 space-y-1">
              <p>Brésil, Canada, Haïti, USA</p>
            </div>
          </div>

          <!-- Asie -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-globe-asia text-primary text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Asie</h3>
                <p class="text-gray-600">2 pays</p>
              </div>
            </div>
            <div class="text-sm text-gray-600 space-y-1">
              <p>Chine et Russie</p>
            </div>
          </div>

          <!-- Europe -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-globe-europe text-primary text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Europe</h3>
                <p class="text-gray-600">16 pays</p>
              </div>
            </div>
            <div class="text-sm text-gray-600 space-y-1">
              <p>Albanie, Allemagne, Autriche, Belgique, Espagne, France, Grande Bretagne, Hollande, Hongrie, Irlande du Nord, Italie, Norvège, Portugal, République de Malte, Russie, Suisse</p>
            </div>
          </div>

          <!-- Océanie -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-water text-primary text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Océanie</h3>
                <p class="text-gray-600">1 pays</p>
              </div>
            </div>
            <div class="text-sm text-gray-600 space-y-1">
              <p>Nouvelle Zélande</p>
            </div>
          </div>

          <!-- Total -->
          <div class="bg-primary p-6 rounded-lg shadow-md text-white">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-chart-bar text-white text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Total</h3>
                <p class="text-white/80">60 pays</p>
              </div>
            </div>
            <p class="text-white/90">Par la grâce de Dieu, le Message atteint le monde entier</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Événement Historique -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-3 lg:px-0">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Un Événement Historique</h2>
            <div class="bg-primary/10 inline-block px-4 py-2 rounded-full">
              <p class="text-primary font-bold">03 juin 2013</p>
            </div>
            <p class="text-lg text-gray-600 mt-2">Fin de la Traduction en Français de 1209 Messages</p>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-6">
              Depuis le vendredi 31 mai 2013, les traducteurs de Shekinah Publications ont remis solennellement le dernier sermon de frère Branham intitulé « Le Son confus », prêché à Jeffersonville, le 18 décembre 1960 traduit en République Démocratique du Congo, en Afrique Centrale entre les mains du Révérend Pasteur Diyoka, ce lundi 3 juin 2013, date du 23ème anniversaire de Shekinah Tabernacle.
            </p>

            <div class="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 class="text-xl font-bold text-primary mb-4">La Cérémonie</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                C'était au cours d'une petite cérémonie dans l'enceinte du Village Béthanie, en présence de tous les agents de Shekinah Publications, de quelques Pasteurs, des ministres, et de quelques membres du Groupe de Soutien ainsi que des croyants qui étaient à cet effet.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Vers dix-huit heures la cérémonie débute devant le bâtiment administratif de Shekinah Publications. L'événement étant historique, la tribune bien décorée, bien que la cérémonie soit intime. Au rythme du chant « ils sont beaux », les douze traducteurs et les trois encodeuses marchent calmement jusqu'à la place qui leur était réservée. Il était difficile de retenir leurs larmes, oui, les larmes de joie de bons et fidèles serviteurs parvenus finalement au bout du chemin.
              </p>
            </div>

            <div class="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-bold text-primary mb-4">Remise Officielle</h3>
              <p class="text-gray-700 leading-relaxed">
                Après un mot de prière du Pasteur Ngoy de Lukala, le frère Jean Mpiana prononce le mot de circonstance. Ensuite, il invite la sœur Elhen Nsonsa à remettre au Révérend Pasteur Richard Diyoka le 1206ème sermon traduit par Shekinah Publications. Aujourd'hui, l'Épouse du monde francophone dispose de la totalité de tous les sermons traduits en français prêchés par le prophète de Dieu William Marrion Branham.
              </p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 class="text-xl font-bold text-primary mb-4">Discours du Pasteur Diyoka</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                À cette occasion, le Révérend Pasteur Diyoka remercie le Seigneur Jésus-Christ pour Sa grâce. Il a également remercié les serviteurs de Dieu, son église Shekinah Tabernacle, tous les travailleurs de Shekinah Publications, le groupe de soutien pour leurs encouragements, leurs prières et offrandes.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Ensuite Il a montré les difficultés engendrées par ce grand travail comparable à ceux qui ont travaillé pour que nous ayons aujourd'hui la Sainte Bible. De ce fait, Il a donné les statistiques globales du travail abattu par Shekinah Publications durant le 17 ans.
              </p>
            </div>

            <!-- Statistiques détaillées -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="bg-primary/10 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary mb-2">1206</div>
                <p class="text-gray-700">Messages traduits</p>
              </div>
              <div class="bg-primary/10 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary mb-2">808</div>
                <p class="text-gray-700">Messages imprimés en français</p>
              </div>
              <div class="bg-primary/10 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary mb-2">40 730 229</div>
                <p class="text-gray-700">Brochures imprimées</p>
              </div>
              <div class="bg-primary/10 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary mb-2">33 479 578</div>
                <p class="text-gray-700">Brochures distribuées</p>
              </div>
            </div>

            <p class="text-gray-700 leading-relaxed mb-4">
              (sans compté le 147 titres publiés en langues nationales et 117 en langues étrangères) Il a également souligné qu'il reste encore un grand travail d'impression de tous les messages traduits.
            </p>

            <div class="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-bold text-primary mb-4">Vision Future</h3>
              <p class="text-gray-700 leading-relaxed">
                Enfin, Il a annoncé que bientôt Shekinah Publications mettra à la disposition de l'Épouse du monde francophone tous les Messages sous format électronique pour faciliter les recherches (dans un folio).
              </p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold text-primary mb-4">Conclusion de la Cérémonie</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                En conclusion, la cérémonie s'est terminée par la lecture du Poème du Vainqueur, le Révérend Pasteur Diyoka a remis sept colombes, deux bouquets de fleurs et une enveloppe symbolique à chacun des traducteurs.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Formant un cercle avec les traducteurs, le Pasteur a entonné Grâce étonnante et une prière d'ensemble a été faite en faveur de ceux qu'il a baptisé des vainqueurs.
              </p>
              <p class="text-gray-700 leading-relaxed">
                La soirée s'en est suivie d'une courte présentation et remerciements aux autres services de Shekinah Publications. Puis, un gâteau et un jus sont offerts à toute l'assistance, avant que la cérémonie ne se clôture par la séance des photos souvenirs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-3 lg:px-0 text-center">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Consulter les Messages</h2>
          <p class="text-lg text-gray-600 mb-8">
            Découvrez les citations et pépites d'or tirées des sermons du prophète William Marrion Branham
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Messages Imprimés
            </button>
            <button class="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium">
              Citations/Pépites d'Or
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShekinahPublications'
}
</script>
