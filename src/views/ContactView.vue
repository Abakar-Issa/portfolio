<template>
  <v-container>
    <h2 class="text-h4 text-center section-title">Contact</h2>
    
    <div class="section-content">
      <v-row>
        <!-- Coordonnées -->
        <v-col cols="12" md="4">
          <v-card class="h-100">
            <v-card-title class="text-h6 text-center">
              Contact Information
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-phone</v-icon>
                  </template>
                  <v-list-item-title>
                    <a href="tel:+33749457176" class="text-decoration-none">
                      +33 7 58 34 25 37
                    </a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-email</v-icon>
                  </template>
                  <v-list-item-title>
                    <a href="mailto:abakarissa93@gmail.com" class="text-decoration-none">
                      issaabakar17@gmail.com
                    </a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-github</v-icon>
                  </template>
                  <v-list-item-title>
                    <a 
                      href="https://github.com/Abakar-Issa" 
                      target="_blank"
                      class="text-decoration-none"
                    >
                      github.com/Abakar-Issa
                    </a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-linkedin</v-icon>
                  </template>
                  <v-list-item-title>
                    <a 
                      href="https://www.linkedin.com/in/issa-abakar-564248159/"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      linkedin.com/in/issa-abakar
                    </a>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Formulaire de contact -->
        <v-col cols="12" md="8">
          <v-card class="h-100">
            <v-card-title class="text-h6 text-center">
              Send me a message
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="formData.name"
                      :rules="nameRules"
                      label="Name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="formData.email"
                      :rules="emailRules"
                      label="Email"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.subject"
                      :rules="subjectRules"
                      label="Subject"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.message"
                      :rules="messageRules"
                      label="Message"
                      required
                      rows="4"
                    ></v-textarea>
                  </v-col>
                </v-row>

                <v-card-actions class="justify-end">
                  <v-btn
                    color="primary"
                    type="submit"
                    :loading="loading"
                    :disabled="!valid"
                  >
                    Send Message
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Snackbar pour les notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactView',
  data: () => ({
    valid: false,
    loading: false,
    formData: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 50 || 'Name must be less than 50 characters'
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    subjectRules: [
      v => !!v || 'Subject is required',
      v => v.length <= 100 || 'Subject must be less than 100 characters'
    ],
    messageRules: [
      v => !!v || 'Message is required',
      v => v.length <= 1000 || 'Message must be less than 1000 characters'
    ],
    snackbar: {
      show: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    async submitForm() {
      if (!this.$refs.form.validate()) return

      this.loading = true

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: this.formData.name,
            from_email: this.formData.email,
            subject: this.formData.subject,
            message: this.formData.message
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        this.snackbar = {
          show: true,
          text: 'Message sent successfully!',
          color: 'success'
        }

        this.$refs.form.reset()
      } catch (error) {
        console.error('Error sending email:', error)
        this.snackbar = {
          show: true,
          text: 'Error sending message. Please try again.',
          color: 'error'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.v-list-item {
  min-height: 48px;
}

.v-list-item a {
  color: inherit;
  transition: color 0.2s ease;
}

.v-list-item a:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
