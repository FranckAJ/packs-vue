const Home = () => import('../layouts/Home');

export default [
    {
        name: 'packages',
        path: '/pacotes',
        component: Home,
        meta: {
            requiresAuth: false
        }
    }
]