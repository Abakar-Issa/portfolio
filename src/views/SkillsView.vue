<template>
  <v-container>
    <h2 class="text-h4 text-center section-title">Education & Skills</h2>
    
    <div class="section-content">
      <v-row>
        <!-- Education Section -->
        <v-col cols="12" md="6">
          <v-card class="pa-4 h-100">
            <h3 class="text-h5 mb-4 text-center">Education</h3>
            <v-card-text>
              <v-timeline density="compact" side="end">
                <v-timeline-item
                  v-for="education in educationHistory"
                  :key="education.year"
                  :dot-color="education.color"
                  size="small"
                >
                  <div class="timeline-content">
                    <div class="d-flex justify-space-between align-center mb-2">
                      <h3 class="text-subtitle-1 font-weight-bold">{{ education.degree }}</h3>
                      <span class="text-caption font-weight-bold ml-4">{{ education.year }}</span>
                    </div>
                    <div class="text-subtitle-2 text-primary mb-1">{{ education.school }}</div>
                    <div class="text-caption text-medium-emphasis">
                      <v-icon size="x-small" class="mr-1">mdi-map-marker</v-icon>
                      {{ education.location }}
                    </div>
                    <div class="text-caption mt-2">{{ education.description }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Technical Skills Section -->
        <v-col cols="12" md="6">
          <v-card class="pa-4 h-100">
            <h3 class="text-h5 mb-4 text-center">Technical Skills</h3>
            <v-card-text>
              <v-row>
                <v-col v-for="category in technicalSkills" :key="category.title" cols="12">
                  <div class="mb-6">
                    <h3 class="text-subtitle-1 font-weight-bold mb-3">{{ category.title }}</h3>
                    <div class="skills-container">
                      <div 
                        v-for="skill in category.skills" 
                        :key="skill.name"
                        class="skill-item d-inline-block mr-2 mb-2"
                      >
                        <div class="d-flex align-center">
                          <span class="text-body-2">{{ skill.name }}</span>
                          <v-rating
                            v-if="skill.level"
                            :model-value="skill.level"
                            density="compact"
                            readonly
                            size="x-small"
                            length="3"
                            active-color="primary"
                            class="ml-2"
                          ></v-rating>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SkillsView',
  data: () => ({
    educationHistory: [
      {
        year: '2021 - 2023',
        degree: 'Master\'s Degree in Computer Science',
        school: 'University of Paul Sabatier ',
        location: 'Toulouse, France',
        description: 'Specialized in Data Science and Engineering',
        color: 'primary'
      },
      {
        year: '2018 - 2021',
        degree: 'Bachelor\'s Degree in Computer Science',
        school: 'University of Caen Normandy',
        location: 'Caen, France',
        description: 'Focus on Programming and Software Development',
        color: 'secondary'
      },
      {
        year: '2017',
        degree: 'Scientific secondary school diploma',
        school: 'Carmen Rosales High School',
        location: 'N\'Djamena, Tchad',
        description: 'Baccalaureat in Science',
        color: 'info'
      }
    ],
    technicalSkills: [
      {
        title: 'Programming Languages and Tools',
        skills: [
          { name: 'Python', level: 3 },
          { name: 'Django & Flask', level: 3 },
          { name: 'JavaScript', level: 3 },
          { name: 'Java', level: 2 },
          { name: 'HTML5/CSS3', level: 3 },
          { name: 'Numpy & Pandas', level: 3 },
          { name: 'Matplotlib & Seaborn', level: 3 },
          { name: 'TensorFlow & PyTorch', level: 2 },
          { name: 'RESTful APIs', level: 3 },
          { name: 'GraphQL', level: 2 },


        ]
      },
      {
        title: 'Data Science Skills',
        skills: [
          { name: 'Machine Learning', level: 3 },
          { name: 'Deep Learning', level: 2 },
          { name: 'Processing Large Datasets', level: 2 },
          { name: 'Data Analysis', level: 3 },
          { name: 'Mathematical Modeling', level: 3 },
        ]
      },
      {
        title: 'Database & Tools',
        skills: [
          { name: 'MongoDB', level: 2 },
          { name: 'MySQL', level: 3 },
          { name: 'PostgreSQL', level: 3 },
          { name: 'Git & GitHub', level: 3 },
          { name: 'Docker', level: 2 },
          { name: 'Jenkins', level: 2 },
          { name: 'CI/CD', level: 2 }
        ]
      },
      {
        title: 'Relational Skills',
        skills: [
          { name: 'Teamwork', level: 3 },
          { name: 'Communication', level: 3 },
          { name: 'Problem Solving', level: 3 },
          { name: 'Adaptability', level: 3 },
          { name: 'Project Management', level: 3 },
        ]
      }
    ]
  })
}
</script>

<style scoped>
.timeline-content {
  padding: 12px;
  background: rgba(var(--v-theme-surface-variant), 0.1);
  border-radius: 4px;
}

.v-timeline-item {
  margin-bottom: 16px;
}

.skill-item {
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(var(--v-theme-surface-variant), 0.05);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.h-100 {
  height: 100%;
}

.ml-4 {
  margin-left: 16px !important;
}

.section-title {
  margin-bottom: 24px;
}

.section-content {
  padding: 24px;
}
</style>
