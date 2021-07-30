<template>
  <v-lazy>
    <v-container class="portfolio  " align="center">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6">Portfolio</h2>
      <div class="projects flex-container">
        <v-card class="project flex-child" elevation="2" outlined shaped tile>
          <v-card-title>Our Pack</v-card-title>
          <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle>
          <v-card-text>
            A Web Application that allows backpackers and hikers to log all of the gear into categories, to allow for an
            easier planning process.
          </v-card-text>
        </v-card>
      </div>
      <div class="flex-child">
        <v-img src="comer-run.jpeg"></v-img>
      </div>
    </v-container>
  </v-lazy>
</template>

<style scoped>
h2 {
  font-size: clamp(48px, 10vw, 80px);
  /* align-items: center; */
  /* position: relative; */
  color: #e6f1ff;
}
.divider {
  /* align: center; */
  /* vertical-align: start, center, end, baseline, stretch; */
  background-color: #ccd6f6;
  /* justify-content: center; */
  /* width: 50%; */
}
.flex-container {
  display: flex;
}
.flex-child {
  flex: 1;
  border: 2px solid yellow;
}
.flex-child:first-child {
  margin-right: 20px;
}
.project {
  background-color: bisque;
}
.projects {
  width: 60%;
  /* justify-items: left; */
}
</style>
