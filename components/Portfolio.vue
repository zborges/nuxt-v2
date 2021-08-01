<template>
  <v-lazy>
    <v-container class="portfolio">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6 pb-14">Portfolio</h2>
      <div class="projects">
        <h3 class="align-right">OurPack</h3>
        <v-card class="single-project mx-auto mb-12" elevation="2" outlined shaped tile>
          <v-card-title>Ruby on Rails, Vue.js, PostGreSQL</v-card-title>
          <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
          <v-card-text>
            A Web Application that allows backpackers and hikers to log all of the gear into categories, to allow for an
            easier planning process.
          </v-card-text>
        </v-card>
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
h3 {
  font-size: clamp(24px, 5vw, 40px);
  color: #e6f1ff;
}
.divider {
  /* align: center; */
  /* vertical-align: start, center, end, baseline, stretch; */
  background-color: #ccd6f6;
  /* justify-content: center; */
  /* width: 50%; */
}
.v-card {
  height: 100%;
}

/* .flex-child:first-child {
  margin-right: 20px;
} */
.single-project {
  background-color: bisque;
}
.projects {
  width: 60%;
  /* justify-items: left; */
}
</style>
