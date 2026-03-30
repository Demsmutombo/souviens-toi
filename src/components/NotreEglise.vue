<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4">Notre Église</h1>
        <p class="text-xl lg:text-2xl">Shekinah Tabernacle - Une Famille Spirituelle</p>
      </div>
    </section>

    <!-- Navigation interne -->
    <section class="py-8 bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-3 lg:px-0">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="activeSection = 'apropos'"
            :class="activeSection === 'apropos' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            class="px-6 py-2 rounded-lg transition-colors font-medium"
          >
            À Propos de Nous
          </button>
          <button 
            @click="activeSection = 'pasteur'"
            :class="activeSection === 'pasteur' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            class="px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Notre Pasteur
          </button>
          <button 
            @click="activeSection = 'eglisesoeurs'"
            :class="activeSection === 'eglisesoeurs' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            class="px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Nos Églises Sœurs
          </button>
        </div>
      </div>
    </section>

    <!-- Section À Propos de Nous -->
    <section v-if="activeSection === 'apropos'" class="py-16">
      <div class="max-w-4xl mx-auto px-3 lg:px-0">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">À Propos de Nous</h2>
          
          <div class="prose prose-lg max-w-none">
            <div class="bg-primary/10 border-l-4 border-primary p-6 mb-8">
              <h3 class="text-xl font-bold text-primary mb-4">Notre Mission</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                La volonté de Dieu est que tous les hommes arrivent à la connaissance de la Vérité qui est Sa Parole. Car c'est celle-ci qui les affranchit et les sanctifie. N'a-t-Il pas dit que Mon peuple meurt à cause de l'ignorance ?
              </p>
            </div>

            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">La Parole de Dieu Écrite</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                Quand Dieu a donné la loi à Moïse, Il l'a écrite Lui-même sur des tables qu'Il a alors confiées à Son prophète pour L'apporter au peuple.
              </p>
              
              <blockquote class="bg-gray-50 border-l-4 border-gray-300 p-4 my-6">
                <p class="text-gray-700 italic">
                  « Oh ! Je voudrais que mes paroles fussent écrites, qu'elles fussent écrites dans un livre. Je voudrais qu'avec un burin de fer et avec du plomb. Elles fussent pour toujours gravées dans le roc…»
                </p>
                <p class="text-right mt-2 text-gray-600">Job</p>
              </blockquote>
            </div>

            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Transmission à Travers les Âges</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Jérémie a reçu un message de la part de Dieu et Baruk, son secrétaire, l'a mis à l'écrit afin qu'il soit lu au peuple. En son temps, le Seigneur Jésus a choisi douze apôtres pour répandre le message et quelques-uns parmi eux et d'autres hommes appelés par Dieu ont mis à l'écrit Ses Paroles et Sa Vie pour qu'il soit porté à toutes les générations futures.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Après sa conversion et son appel au ministère, Paul a écrit lui-même sous forme des lettres les commandements du Seigneur à l'intention de l'Eglise.
              </p>
            </div>

            <div class="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 class="text-xl font-bold text-primary mb-4">Notre Vision</h3>
              <p class="text-gray-700 leading-relaxed">
                Prophète majeur envoyé conformément aux promesses bibliques, frère Branham était conscient que son Message devait parcourir le monde et atteindre les coins les plus reculés de notre planète. Sur recommandation du Seigneur, il a manifesté un grand souci de voir le Message, évangile du temps de la fin, être diffusé sous forme des bandes, des brochures et des livres pour servir de témoignage à toutes les nations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Notre Pasteur -->
    <section v-if="activeSection === 'pasteur'" class="py-16">
      <div class="max-w-4xl mx-auto px-3 lg:px-0">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Notre Pasteur</h2>
          
          <div class="text-center mb-8">
            <div class="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <img src="/temoignage/Pastor.png" alt="Richard Diyoka N'sanguluja" class="w-full h-full object-cover">
            </div>
            <h3 class="text-2xl font-bold text-primary mb-2">Richard Diyoka N'sanguluja</h3>
            <p class="text-lg text-gray-600">Pasteur Principal - Shekinah Tabernacle</p>
          </div>

          <div class="prose prose-lg max-w-none">
            <div class="bg-primary/10 border-l-4 border-primary p-6 mb-8">
              <h3 class="text-xl font-bold text-primary mb-4">Message de Salutation</h3>
              <p class="text-gray-700 leading-relaxed">
                Chers frères et sœurs, que la grâce et la paix vous soient accordées avec abondance de la part de Dieu et Père, le Seigneur Jésus-Christ, notre Sauveur et Rédempteur. Nous vous saluons très cordialement en Son Nom par ces paroles
              </p>
            </div>

            <blockquote class="bg-gray-50 border-l-4 border-gray-300 p-4 my-6">
              <p class="text-gray-700 italic">
                « Mon peuple, écoute mes instructions! Prêtez l'oreille aux paroles de ma bouche ! J'ouvre la bouche par des sentences, je publie la sagesse des temps anciens. Ce que nous avons entendu, ce que nous savons, ce que nos pères nous ont raconté, nous ne le cacherons point à leurs enfants ; nous dirons à la génération future les louanges de l'Eternel, et sa puissance, et les prodiges qu'il a opérés. Il a établi un témoignage en Jacob, Il a mis une loi en Israël, et il a ordonné à nos pères de l'enseigner à leurs enfants, afin qu'ils misent en Dieu leur confiance, qu'ils n'oubliassent pas les œuvres de Dieu, et qu'ils observassent ses commandements, afin qu'ils ne fussent pas, comme leur pères, une race dont le cœur n'était pas ferme, et dont l'esprit n'était pas fidèle à Dieu.»
              </p>
              <p class="text-right mt-2 text-primary font-semibold">Psaume 78:1-8</p>
            </blockquote>

            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Depuis quelques années, le nombre de ceux qui reçoivent les sermons du prophète William Marrion Branham traduits en français ainsi que dans d'autres langues et édités par Shekinah Publications, ont exprimé le désir d'en savoir un peu plus sur cette œuvre missionnaire, notamment sur son fondement, son fonctionnement, ses ressources et/ou ses moyens, etc.
              </p>
              <p class="text-gray-700 leading-relaxed">
                En outre, après ces seize années dans l'œuvre du Seigneur, nous avons senti dans le cœur la nécessité de partager avec vous notre expérience dans ce domaine et d'apporter tant soit peu notre réconfort à tous les ouvriers de la onzième heure qui sont dans le champ, pour l'exécution de la grande et dernière commission du Seigneur à Son Eglise (Marc 16.15-16).
              </p>
            </div>

            <div class="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 class="text-xl font-bold text-primary mb-4">Notre Engagement</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Ainsi, aujourd'hui, le Seigneur notre Dieu a mis sur notre cœur de publier toutes ces œuvres dans ce site web, qui nous pensons sera une bénédiction pour l'épouse de Christ.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Or, le Seigneur, notre Dieu, a de nouveau manifesté Son amour envers Son peuple en accomplissant en ce temps de la fin de grandes œuvres que nul autre âge n'a connues. Les mystères restés cachés dans tous les âges ont été révélés aujourd'hui et doivent être portés à la connaissance du peuple de Dieu pour qu'il soit blanchi, purifié et préparé pour l'enlèvement (Daniel 12.4-12).
              </p>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="text-lg text-gray-700 italic">Votre serviteur,</p>
            <p class="text-xl font-bold text-primary mt-2">Richard Diyoka Nsanguluja</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Nos Églises Sœurs -->
    <section v-if="activeSection === 'eglisesoeurs'" class="py-16">
      <div class="max-w-6xl mx-auto px-3 lg:px-0">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Nos Églises Sœurs à Travers le Monde</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Congo Brazzaville -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr ADO</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Brazzaville/Republic Of Congo</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+242 068271256</p>
            </div>

            <!-- Congo Central - Kwilu Ngongo -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Theo Somue</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Congo Central (Kwilu Ngongo)/ Republic Democratic Of Congo</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>theophilensomue@gmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+243 829729283</p>
            </div>

            <!-- Congo Central - Matadi -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr MICHEL</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Congo Central (Matadi)/ Republic Democratic Of Congo</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+243 998320035</p>
            </div>

            <!-- Nord Kivu -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Martin Mbelu</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Nord Kivu (Goma)/ Republic Democratic Of Congo</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>mbelumartin2@gmail.com, marcmamingi1@gmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+243 822265174</p>
            </div>

            <!-- Johannesburg -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Obed Diyoka, Minga Makashi & Samuel</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Johannesburg/RSA</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>minga.makashi@gmail.com, obed.diyoka@gmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+277 081439237, +277 93511248</p>
            </div>

            <!-- Durban -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Christian Bosila & Pathy Waba</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Durban/RSA</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>wabaparadox@gmai.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+27 658925144, +27 640764661</p>
            </div>

            <!-- Luanda -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Jules Tshibe</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Luanda/Angola</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>malembajulio@yahoo.fr, anselmongoma76@gmail.com, natanielnkosi7@mail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+244 922996350</p>
            </div>

            <!-- Kabinda -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Ghyslain Kabeya</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Kabinda/Angola</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>ghyslainkabeya69@gmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+244 923525895</p>
            </div>

            <!-- Soyo -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Justino</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Soyo/Angola</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>miguiespe@hotmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+244 923374989</p>
            </div>

            <!-- Lubumbashi -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Guillaume Mputu</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Lubumbashi/ Republic Democratic Of Congo</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>guillomputu73@gmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+243 813522202</p>
            </div>

            <!-- Congo Central - Pierre Nikongo -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Pierre Nikongo & Seth BakunzI</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Congo Central/ Republic Democratic Of Congo</p>
              <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>nikongopierre@gmail.com,bakunziseth@gmail.com</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+243 822268028, +243 819964595</p>
            </div>

            <!-- Bandundu - Popokabaka -->
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-church text-primary"></i>
                </div>
                <h3 class="font-bold text-lg">Fr Timothee Kalenga</h3>
              </div>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Bandundu (Popokabaka)/ Republic Democratic Of Congo</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2"></i>+243 810728203</p>
            </div>
          </div>

          <!-- Message de conclusion -->
          <div class="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-primary mb-4">Notre Vision Globale</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Ce site poursuit un double objectif, à savoir: partager d'une part avec vous sur l'œuvre que le Seigneur est en train d'accomplir parmi nous, une œuvre certes difficile, mais si merveilleuse, et amener d'autre part le croyant à faire du salut des âmes perdues sa préoccupation majeure.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Nous croyons que le même Saint-Esprit vous révélera votre part de responsabilité dans ce grand et immense travail d'annoncer ce glorieux Evangile, le Message du temps de la fin, aux gens de notre temps, sachant que c'est un âge très court et que le Seigneur est en train d'accomplir une œuvre rapide.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4 font-semibold text-primary">
              Que le Seigneur vous accorde donc Sa parfaite grâce pour saisir cette vision afin que tous ensemble, convaincus que le Message est la vérité, c'est le salut de l'humanité et la Lumière dans ce temps des ténèbres, nous nous sentions concernés pour L'apporter à nos frères que l'ennemi tient encore captifs à travers le monde, dans la superstition, dans l'ignorance et dans les ténèbres.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotreEglise',
  data() {
    return {
      activeSection: 'apropos'
    }
  }
}
</script>
