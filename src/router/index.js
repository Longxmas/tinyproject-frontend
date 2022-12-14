import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/about/AboutView";
import MainView from "@/views/main/MainView";
import studentManage from "@/views/student/studentManage";
import studentInfo from "@/views/student/studentInfo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'main',
        name: 'main',
        component: MainView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: HomeView,
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: AboutView
      }
    ]
  },
  {
    path: '/student',
    name: 'student',
    component: HomeView,
    children: [
      {
        path: 'student-manage',
        name: 'student-manage',
        component: studentManage
      },
      {
        path: 'student-info/:id',
        name: 'student-info',
        component: studentInfo
      }
    ]
  },
  {
    path: '/course',
    name: 'course',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
