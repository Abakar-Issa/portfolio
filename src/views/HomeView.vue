<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-avatar
          size="200"
          class="mb-6 profile-avatar"
        >
          <v-img
            src="/images/photo_issa1.jpg"
            alt="Issa Abakar"
            cover
          ></v-img>
        </v-avatar>
        <h1 class="text-h3 my-4">Issa Abakar</h1>
        <p class="text-h5 font-weight-light">Data Engineer & Full Stack Developer</p>
        <v-divider class="my-4"></v-divider>
        <p class="text-body-1">
          Welcome to my portfolio! I am a passionate developer dedicated to creating
          innovative and efficient solutions.
        </p>
      </v-col>

      <v-col cols="12" class="mt-4">
        <v-row justify="center" class="social-links">
          <v-col cols="auto" v-for="social in socials" :key="social.icon">
            <v-btn
              :href="social.link"
              target="_blank"
              icon
              color="primary"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    socials: [
      { icon: 'mdi-github', link: 'https://github.com/Abakar-Issa' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/issa-abakar-564248159/' }
    ],
  }),
}
</script>

<style scoped>
.social-links {
  gap: 16px;
}

.profile-avatar {
  border: 3px solid var(--v-primary-base);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.05);
}
</style>
