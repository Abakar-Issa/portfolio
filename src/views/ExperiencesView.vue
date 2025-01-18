<template>
  <v-container>
    <h2 class="text-h4 text-center section-title">Professional Experience</h2>
    
    <div class="section-content">
      <v-timeline side="end" align="start">
        <v-timeline-item
          v-for="(experience, index) in experiences"
          :key="index"
          :dot-color="experience.color"
          size="small"
        >
          <template v-slot:opposite>
            <div class="text-h6 font-weight-bold">{{ experience.period }}</div>
          </template>
          
          <v-card class="elevation-2">
            <v-card-title class="text-h6">
              {{ experience.position }}
              <v-btn
                class="ml-2"
                :color="experience.color"
                size="small"
                variant="text"
                :href="experience.companyUrl"
                target="_blank"
              >{{ experience.company }}</v-btn>
            </v-card-title>
            
            <v-card-subtitle>
              <v-icon icon="mdi-map-marker" size="small" class="mr-1"></v-icon>
              {{ experience.location }}
            </v-card-subtitle>
            
            <v-card-text>
              <v-list density="compact" class="bg-transparent">
                <v-list-item
                  v-for="(task, taskIndex) in experience.tasks"
                  :key="taskIndex"
                  class="px-0"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-check-circle-outline" size="small" color="primary" class="mr-2"></v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">{{ task }}</v-list-item-title>
                </v-list-item>
              </v-list>
              
              <div class="mt-4">
                <div class="text-subtitle-2 font-weight-medium mb-2">Technologies :</div>
                <v-chip-group>
                  <v-chip
                    v-for="(tech, techIndex) in experience.technologies"
                    :key="techIndex"
                    size="small"
                    variant="outlined"
                    color="primary"
                  >{{ tech }}</v-chip>
                </v-chip-group>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ExperiencesView',
  data: () => ({
    experiences: [
      {
        period: 'Oct 2023 - Present',
        position: 'Data Engineer',
        company: 'MAIF',
        companyUrl: 'https://www.maif.fr',
        location: 'Niort, France',
        color: 'primary',
        tasks: [
          'Application integration with ESB (Enterprise Service Bus) architecture',
          'Development and maintenance of integration workflows using TIBCO BusinessWorks',
          'Implementation of web services (SOAP, REST) for inter-application communication',
          'Creation and exposure of APIs',
          'Data management: retrieval, transformation, and exchange between heterogeneous systems',
          'Migration of microservices from Tibco BW5 to Tibco BWCE (BusinessWorks Container Edition)',
          'Application deployment across dedicated environments (development, test, production)',
          'Project management participation using Agile Scrum methodology'
        ],
        technologies: [
          'Python','TIBCO BW5', 'TIBCO BWCE', 'MySQL', 'XML/Xpath', 'GraphQL', 'JSON', 'Java', 'Git', 'Jenkins'
        ]
      },
      {
        period: 'Apr 2023 - Sep 2023',
        position: 'Data Scientist',
        company: 'PIXILIB',
        companyUrl: 'https://www.gaelo.fr/blog/pixilib-cro/',
        location: 'Toulouse, France',
        color: 'secondary',
        tasks: [
          'Medical image processing: preprocessing images for better data quality (Normalization, resizing, thresholding ...)',
          'Semantic image segmentation using Deep Learning: using computer vision techniques to detect a TMTV in patients',
          'Deep Learning model optimization: hyperparameter optimization and neural network architecture improvements',
          'Implementation of models in production: deployment of models on torchserve using Docker'
        ],
        technologies: [
          'Python', 'PyTorch', 'Numpy', 'MONAI', 'Django', 'Git', 'Docker'
        ]
      },
      {
        period: 'May 2022 - Aug 2022',
        position: 'Data Scientist',
        company: 'IRIT',
        companyUrl: 'https://www.irit.fr',
        location: 'Toulouse, France',
        color: 'info',
        tasks: [
          'Analysis of tabular data from patient sleep studies',
          'Implementation of machine learning models for stroke prediction',
          'Tabular data augmentation using Deep Learning techniques, particularly GANs (Generative Adversarial Networks)',
          'Results interpretation and analysis'
        ],
        technologies: [
          'Python', 'Numpy', 'Scipy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'PyTorch'
        ]
      }
    ]
  })
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1) !important;
}

.v-timeline-item__body {
  padding: 12px 0;
}

.v-list-item {
  min-height: 32px !important;
}
</style>
