<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <v-footer app class="text-center d-flex flex-column">
      <div>
        &copy; {{ new Date().getFullYear() }} - Issa
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.v-application {
  font-family: 'Roboto', sans-serif !important;
}

.section-title {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 3rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--v-primary-base);
  border-radius: 2px;
}

.section-content {
  padding-top: 1rem;
}
</style>
