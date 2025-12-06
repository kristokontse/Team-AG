import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from "../views/LoginView.vue";
import AddPost from '../views/AddPost.vue'
import PostView from '../views/PostView.vue'
import auth from "../auth";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: '/post/:id',
        name: 'PostView',
        component: PostView,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignupView,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LoginView,
    },
    {
        path: '/add-post',
        name: 'add-post',
        component: AddPost
    },
    {
        path: "/contactus",
        name: "contactus",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Contactus.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;