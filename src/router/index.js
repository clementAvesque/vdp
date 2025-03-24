import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/homePage.vue';
import Panier from '../view/panier.vue';
import game from '../view/game.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path: '/panier', name: 'panier', component: Panier},
  {path: '/game', name: 'jeux', component: game}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
