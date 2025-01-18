<template>
  <v-container>
    <h2 class="text-h4 text-center section-title">Services</h2>
    
    <div class="section-content">
      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
          <v-card height="100%">
            <v-card-title class="text-center">
              <v-icon size="large" color="primary" class="mb-2">{{ service.icon }}</v-icon>
              <div>{{ service.title }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              {{ service.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ServicesView',
  data: () => ({
    services: [
      {
        icon: 'mdi-chart-box-outline',
        title: 'Data Science / Engineering',
        description: 'Complete expertise in Data Science and Engineering, from data collection to exploitation.'
      },
      {
        icon: 'mdi-database',
        title: 'Backend & API',
        description: 'Design and development of robust RESTful APIs and backend services.'
      },
      {
        icon: 'mdi-web',
        title: 'Software & Web Development',
        description: 'Creation of custom websites and web applications using the latest technologies.'
      },
      {
        icon: 'mdi-cellphone',
        title: 'Mobile Applications',
        description: 'Development of native and hybrid mobile applications for iOS and Android.'
      },
      {
        icon: 'mdi-cloud',
        title: 'Cloud & DevOps',
        description: 'Deployment and maintenance of applications on the cloud.'
      }
    ]
  })
}
</script>
