<template>
  <v-footer
  absolute
  app
  height="auto"
  color="#f9fbe7"
    
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>
 <v-btn>
          <a href="https://www.facebook.com">
          <v-icon size="24px" color="blue">fab fa-facebook</v-icon></a>
        </v-btn>
        <v-btn>
          <a href="https://twitter.com" color="blue">
          <v-icon size="24px">fab fa-twitter</v-icon></a>
        </v-btn>
      <v-btn>
          <a href="https://linkedin.com">
          <v-icon size="24px" color="blue">fab fa-linkedin</v-icon></a>
        </v-btn>
        <v-btn>
          <a href="https://www.instagram.com">
          <v-icon size="24px" color="red darken-1">fab fa-instagram</v-icon></a>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
     © 2019 revomatico. – All rights reserved.
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
  }
</script>
