<template>
  <v-container>
    <h2 class="text-h4 text-center section-title">Portfolio Projects</h2>
    
    <v-row v-for="project in projects" :key="project.title" class="mb-15">
      <v-col cols="12">
        <v-card class="project-card" elevation="3">
          <v-row>
            <v-col cols="12" md="5" class="pa-0 d-flex align-center project-image-container">
              <v-img
                :src="project.image"
                :alt="project.title"
                :contain="true"
                class="project-image"
              ></v-img>
            </v-col>
            
            <v-col cols="12" md="7" class="pa-6">
              <v-card-title class="text-h5 px-0">{{ project.title }}</v-card-title>
              
              <v-card-subtitle v-if="project.tools" class="px-0 py-2">
                <v-chip
                  color="primary"
                  variant="flat"
                  class="mr-2"
                >
                  <v-icon start icon="mdi-tools" size="small"></v-icon>
                  {{ project.tools }}
                </v-chip>
              </v-card-subtitle>
              
              <v-card-text class="px-0">
                <p class="mb-4 text-body-1">{{ project.description }}</p>
                
                <div v-if="project.steps">
                  <div class="text-subtitle-1 font-weight-medium mb-2">
                    <v-icon icon="mdi-format-list-checks" class="mr-2"></v-icon>
                    Les étapes de réalisation :
                  </div>
                  <v-list class="bg-transparent pa-0">
                    <v-list-item
                      v-for="(step, index) in project.steps"
                      :key="index"
                      density="compact"
                      class="px-2"
                    >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-check-circle-outline" size="small" color="primary"></v-icon>
                      </template>
                      <v-list-item-title class="text-body-2">{{ step }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card-text>
              
              <v-card-actions class="px-0">
                <v-btn
                  color="primary"
                  variant="tonal"
                  :href="project.github"
                  target="_blank"
                  prepend-icon="mdi-github"
                >
                  GitHub Code
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PortfolioView',
  data: () => ({
    projects: [
      {
        title: 'Virtual Data Integration',
        tools: 'Python, Pandas, SQL, Flask',
        description: 'In this project, starting from scratch, we identified different sources of data in order to integrate them virtually and make them accessible through a web application that we set up.',
        image: '/images/SOIVD_Global_architecture.png',
        github: 'https://github.com/Master2-IAFA/65307369',
        steps: [
          'Identifying data sources',
          'Modelling: using the mediator/adapter architecture',
          'Data extraction: via APIs',
          'Data exploration and transformation',
          'Data analysis',
          'Implementation of the mediator and adapters',
          'Logical optimisation of requests',
          'Modelling and creation of the web application'
        ]
      },
      {
        title: 'Data Analysis',
        description: 'Data analysis using a sleep data set to predict cardiovascular events.',
        image: '/images/data_analysis.jpg',
        github: 'https://github.com/Abakar-Issa/Data_Analysis/blob/main/Analyse_donnees.ipynb',
        steps: [
          'Data Loading',
          'Analysis of the data form',
          'Background analysis',
          'Examination of the target column',
          'Qualitative variable',
          'Relationship between variables',
          'Study of the correlation',
          'Kolmogorov Smirnov normality test'
        ]
      },
      {
        title: 'Recommandation System Using Oriented Graph Data',
        description: 'Recommendation of top restaurant customers',
        image: '/images/neo4j.svg',
        github: 'https://github.com/Abakar-Issa/neo4j_project',
        steps: [
          'Data collection and storage',
          'Data analysis',
          'Data transformation',
          'Modelling of relationships between users and restaurants in order to create Neo4J graphs',
          'Data querying using Neo4J (and in particular the Cypher query language)',
          'Calculation of the scores of the best influencers: python scripts',
          'Display and interpretation of results'
        ]
      },
      {
        title: 'Graph Analysis',
        description: 'Social Data Analysis: Communities and Link Prediction',
        image: '/images/community_detection.jpg',
        github: 'https://github.com/Abakar-Issa/Graph_analysis/blob/main/graph_analysis.ipynb',
        steps: [
          'Installing Package',
          'Data Loading',
          'Community Detection',
          'Community Visualisation',
          'Unsupervied Link Prediction',
          'Supervised Link Prediction'
        ]
      },
      {
        title: 'AVC Prediction',
        description: 'After the previous data analysis, this work consists in using these data to make a prediction of the target AVC (Cardiovascular accident). For this, several prediction algorithms are implemented: RandomForest, Logistic Regression, DecisionTree, AdaBoost, KNN, SVM, GaussianNB and the use of neural networks at the end.',
        image: '/images/prediction.png',
        github: 'https://github.com/Abakar-Issa/AVC_Prediction/blob/main/Prediction_AVC.ipynb',
        steps: [
          'Data Loading',
          'Analysis of the data form',
          'Standard Normalization',
          'Machine Learning Modeling',
          'Application of Greadsearch to models',
          'Metrics'
        ]
      },
      {
        title: 'Multiclasse Classification',
        description: 'Implementation of a multiclass classification model with a linear model using Pytorch. The data used are from the MNIST dataset.',
        image: '/images/mnist.png',
        github: 'https://github.com/Abakar-Issa/MNIST/blob/main/mnist_lineaire.ipynb',
        steps: [
          'Loading Data',
          'Linear Model with Pytorch',
          'Make Predictions',
          'Loss fonction',
          'Optimization and regulation',
          'Batching'
        ]
      },
      {
        title: 'Principal Composante Analysis (PCA)',
        description: 'With the Covid-19 pandemic, we have learned to wear masks on a daily basis. Now half of our face is hidden, leaving us with only our eyes as a visible means of expression. This operation of restoring the face is similar to a field in image and video processing called inpainting. Indeed, the pixels corresponding to the area of the mask (modeled by a rectangle) are set to 0. And the PCA and the eigenfaces allow, among other things, to restore the degraded area.',
        image: '/images/Unsupervised-Machine-Learning.jpg',
        github: 'https://github.com/Abakar-Issa/KNN-project/blob/main/MiniProjet.ipynb',
        steps: [
          'Loading of the data',
          'Eigenfaces and dimension reduction by PCA',
          'Recognition by the KNN method (k-Neirest Neighbor)',
          'Reconstruction and evaluation'
        ]
      },
      {
        title: 'NLP',
        description: 'NLP : pre-processing using nltk and spacy',
        image: '/images/nlp.jpg',
        github: 'https://github.com/Abakar-Issa/NLP_preprocessing/blob/main/preprocessing.ipynb',
        steps: [
          'Sentence segmentation',
          'Tokenisation',
          'Normalisation : lower-casing, lemmatization, removing stop-words and ponctuation',
          'Post-tagging',
          'Named entity recognition',
          'Parsing'
        ]
      }
    ]
  })
}
</script>

<style scoped>
.project-card {
  border: 1px solid rgba(var(--v-border-color), 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1) !important;
}

.project-image-container {
  background-color: rgb(245, 245, 245);
  min-height: 400px;
}

.project-image {
  width: 100%;
  height: 100%;
  padding: 24px;
}

.v-list-item {
  min-height: 32px !important;
}

.v-card-text :deep(.v-list-item__prepend) {
  padding-right: 8px;
}
</style>
