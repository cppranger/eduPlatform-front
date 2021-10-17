
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index') },
      { path: '/profile', component: () => import('pages/Profiles/Item') },
      { path: '/tasks', component: () => import('pages/Index') },
      { path: '/teachers', component: () => import('pages/Profiles/List') },
      { path: '/options', component: () => import('pages/Index') },
      { path: '/questions', component: () => import('pages/Index') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
