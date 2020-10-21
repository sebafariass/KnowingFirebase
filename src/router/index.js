
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../components/Login.vue";
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/admin',
		name: 'Admin',
		component: () => import('../views/Admin.vue'),
		meta: {
			login: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});



router.beforeEach((to, from, next) => {
  // to es a donde me quiero dirigir, from es de donde viene la informacion 
   //next es el siguiente paso despues de to from, va a donde quiere ir
	let usuario = firebase.auth().currentUser;
	// authRequired : almacena lo que devuelve el some
	let requisito = to.matched.some((route) => route.meta.login);
	if (!usuario && requisito) {
	// requisito guarda lo que devuelve el some.
		next('/');
	} else if (usuario && !requisito) {
		next('admin');
	} else {
    next();
    // al no tener parametro, el next volverá a to
	}
});

export default router;
