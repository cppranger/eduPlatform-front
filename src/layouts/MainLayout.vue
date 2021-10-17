<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Learn Deutsch Online
        </q-toolbar-title>

        <div>App version v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Главное меню
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Мои данные',
    caption: 'Мой профиль',
    icon: 'face',
    link: '/profile'
  },
  {
    title: 'Мои задания',
    caption: 'Список заданий',
    icon: 'school',
    link: '/tasks'
  },
  {
    title: 'Список учителей',
    caption: 'Зарегистрированные учителя',
    icon: 'people_alt',
    link: '/teachers'
  },
  {
    title: 'Настройки',
    caption: 'Изменение настроек',
    icon: 'construction',
    link: '/options'
  },
  {
    title: 'Связь с разработчиком',
    caption: 'Вопросы и ответы',
    icon: 'history_edu',
    link: '/questions'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
