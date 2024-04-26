import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
        },
      ]
    },
    {
      path: '/events/:afterEvent(.*)',
      redirect: (to) => {
        return {path: '/event/' + to.params.afterEvent}
      },
      // children: [
      //   {path: 'register', redirect: () => ({name: 'event-register'})},
      //   {path: 'edit', redirect: () => ({name: 'event-edit'})},
      // ]
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/404/:resource',
      name: 'no-found',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    }      
  ]
})

export default router
