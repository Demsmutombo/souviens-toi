import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Views
import Home from './views/Home.vue'
import Histoire from './views/Histoire.vue'
import Voix from './views/Voix.vue'
import Message from './views/Message.vue'
import Memoire from './views/Memoire.vue'

// Routes avec métadonnées
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Souviens-Toi - Plateforme de Mémoire Spirituelle',
      description: 'Plateforme où la mémoire devient éternité. Préservons les récits sacrés, les témoignages vivants et les vérités intemporelles.',
      keywords: 'Souviens-Toi, mémoire spirituelle, témoignages, histoire, message, foi'
    }
  },
  {
    path: '/histoire',
    name: 'Histoire',
    component: Histoire,
    meta: {
      title: 'Histoire - Souviens-Toi',
      description: 'Le voyage de la foi à travers le temps. Découvrez l\'histoire sacrée de 1909 à nos jours.',
      keywords: 'histoire, William Branham, Malachie 4, prophétie, Colonne de Feu'
    }
  },
  {
    path: '/voix',
    name: 'Voix',
    component: Voix,
    meta: {
      title: 'Voix - Souviens-Toi',
      description: 'Les témoins vivants du Message. Écoutez les témoignages et les voix qui transforment les vies.',
      keywords: 'voix, témoignages, pasteurs, serviteurs de Dieu, églises sœurs'
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      title: 'Message - Souviens-Toi',
      description: 'Les vérités éternelles pour notre temps. Les sept piliers de la foi et les mystères révélés.',
      keywords: 'message, vérité, foi, sept piliers, sept tonnerres, épouse'
    }
  },
  {
    path: '/memoire',
    name: 'Memoire',
    component: Memoire,
    meta: {
      title: 'Mémoire - Souviens-Toi',
      description: 'Les traces visibles de la grâce. Galerie de photos et archives historiques.',
      keywords: 'mémoire, photos, archives, galeries, traces visibles'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Gestion des métadonnées dynamiques
router.afterEach((to) => {
  // Mettre à jour le titre de la page
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Mettre à jour la description
  if (to.meta.description) {
    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (descriptionMeta) {
      descriptionMeta.content = to.meta.description
    } else {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.name = 'description'
      descriptionMeta.content = to.meta.description
      document.head.appendChild(descriptionMeta)
    }
  }
  
  // Mettre à jour les mots-clés
  if (to.meta.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (keywordsMeta) {
      keywordsMeta.content = to.meta.keywords
    } else {
      keywordsMeta = document.createElement('meta')
      keywordsMeta.name = 'keywords'
      keywordsMeta.content = to.meta.keywords
      document.head.appendChild(keywordsMeta)
    }
  }
  
  // Mettre à jour Open Graph
  if (to.meta.title) {
    updateMetaTag('og:title', to.meta.title)
    updateMetaTag('twitter:title', to.meta.title)
  }
  
  if (to.meta.description) {
    updateMetaTag('og:description', to.meta.description)
    updateMetaTag('twitter:description', to.meta.description)
  }
  
  // URL Open Graph
  updateMetaTag('og:url', window.location.href)
  updateMetaTag('twitter:url', window.location.href)
})

// Fonction utilitaire pour mettre à jour les meta tags
function updateMetaTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`) || 
             document.querySelector(`meta[name="${property}"]`)
  
  if (tag) {
    tag.content = content
  } else {
    tag = document.createElement('meta')
    if (property.startsWith('og:')) {
      tag.setAttribute('property', property)
    } else {
      tag.name = property
    }
    tag.content = content
    document.head.appendChild(tag)
  }
}

// App
const app = createApp(App)
app.use(router)
app.mount('#app')
