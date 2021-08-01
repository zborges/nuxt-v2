<template>
  <v-lazy>
    <v-container class="portfolio">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6 pb-14">Portfolio</h2>
      <div class="projects d-flex">
        <div class="single-project">
          <br />
          <h3 class="project-title">OurPack</h3>
          <v-card :elevation="6" color="#e6f1ff" class=" d-flex flex-wrap rounded-xl " outlined shaped tile>
            <v-card-title>
              Ruby on Rails, Vue.js,
              <br />
              PostGreSQL
            </v-card-title>
            <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
            <v-card-text>
              A Web Application that allows backpackers and hikers to log all of the gear into categories, to allow for
              an easier planning process.
            </v-card-text>
          </v-card>
        </div>
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
.project-title {
  font-size: clamp(24px, 6vw, 45px);
}
.v-card {
  height: 100%;
}

/* .flex-child:first-child {
  margin-right: 20px;
} */
.single-project {
  /* background-color: transparent; */
  height: 100%;
  outline: thin;
  outline-color: whitesmoke;
  padding: 0 0 0 40px;
}
.projects {
  width: 60%;
  /* justify-items: left; */
  color: #ccd6f6;
}
</style>
