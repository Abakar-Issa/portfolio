<template>
  <v-app-bar color="primary" dark>
    <router-link 
      v-if="$route.path !== '/'" 
      to="/" 
      class="text-decoration-none"
    >
      <v-avatar
        size="48"
        class="logo-avatar"
      >
        <v-img
          :src="getImage('photo_issa1.jpg')"
          alt="Issa Abakar"
          cover
        ></v-img>
      </v-avatar>
    </router-link>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-flex">
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        variant="text"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <v-app-bar-nav-icon
      class="d-flex d-sm-none"
      @click="drawer = true"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        link
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getImageUrl } from '@/utils/imageUtils'

export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    menuItems: [
      { title: 'Home', path: '/' },
      { title: 'Education', path: '/skills' },
      { title: 'Experiences', path: '/experiences' },
      { title: 'Portfolio', path: '/portfolio' },
      { title: 'Services', path: '/services' },
      { title: 'Contact', path: '/contact' }
    ]
  }),
  methods: {
    getImage(fileName) {
      return getImageUrl(fileName);
    }
  }
}
</script>

<style scoped>
.logo-avatar {
  margin: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 2px solid white;
}

.logo-avatar:hover {
  transform: scale(1.1);
}

.v-btn {
  text-transform: none;
  letter-spacing: 0.5px;
}
</style>
