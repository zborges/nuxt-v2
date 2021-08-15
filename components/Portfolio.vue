<template>
  <v-lazy>
    <v-container class="portfolio">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6 pb-14">Portfolio</h2>
      <div class="projects d-flex flex-wrap justify-center ">
        <div class="single-project">
          <br />
          <a href="https://ourpack.netlify.app/">
            <h3 class="project-title">OurPack</h3>
            <v-card :elevation="6" color="#e6f1ff" class="rounded-xl project-card" outlined shaped tile>
              <v-card-title>
                Ruby on Rails, Vue.js,
                <br />
                PostGreSQL
              </v-card-title>
              <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
              <v-card-text>
                A Web Application that allows backpackers and hikers to log all of the gear into categories,
                <br />
                to allow for an easier planning process.
              </v-card-text>
              <v-card-actions class="icons">
                <a href="https://github.com/zackartborges/capstone_project">
                  <v-icon>fab fa-github</v-icon>
                </a>
              </v-card-actions>
            </v-card>
          </a>
        </div>
        <div class="single-project">
          <br />
          <h3 class="project-title">Corkboard</h3>
          <v-card :elevation="6" color="#e6f1ff" class="  rounded-xl " outlined shaped tile>
            <v-card-title>
              Ruby on Rails, Vue.js,
              <br />
              PostGreSQL
            </v-card-title>
            <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
            <v-card-text>
              An instant messaging web application. Users are able to log in, add friends and send messages in real
              time. The Vue app will be deployed with AWS S3, while the Rails app will be deployed using an EC2
              Instance. This project is in its final stages.
            </v-card-text>
            <v-card-actions class="icons">
              <a href="https://github.com/zackartborges/corkboard_frontend">
                <v-icon>fab fa-github</v-icon>
              </a>
            </v-card-actions>
          </v-card>
        </div>
        <div class="single-project">
          <br />
          <a href="https://framework-watcher.netlify.app/">
            <h3 class="project-title">Framework Watcher</h3>
            <v-card :elevation="6" color="#e6f1ff" class="  rounded-xl " outlined shaped tile>
              <v-card-title>
                Ruby on Rails, Vue.js
              </v-card-title>
              <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
              <v-card-text>
                A simple display of popular JavaScript frameworks. Data is being collected from the GitHub API and being
                displayed using
                <a href="https://www.chartjs.org/docs/latest/">Chart.js</a>
                .
              </v-card-text>
              <v-card-actions class="icons">
                <a href="https://github.com/zackartborges/js_framework_watcher">
                  <v-icon>fab fa-github</v-icon>
                </a>
              </v-card-actions>
            </v-card>
          </a>
        </div>
        <!-- <v-img src="OurPack.png" height="200" width="150"></v-img> -->
        <div class="single-project">
          <br />
          <a href="https://state-data.netlify.app/">
            <h3 class="project-title">State Data Visualizer</h3>
            <v-card :elevation="6" color="#e6f1ff" class=" rounded-xl project-card" outlined shaped tile>
              <v-card-title>
                VanillaJS, HTML
              </v-card-title>
              <v-card-text>
                Interactive map that displays data from a Rails API. Data was taken from a CSV file and migrated into a
                PostGreSQL DB. The map was created using
                <a href="datamaps.github.io">DataMaps</a>
                .
              </v-card-text>
              <v-card-actions class="icons">
                <a href="https://github.com/zackartborges/rails_state_data">
                  <v-icon>fab fa-github</v-icon>
                </a>
              </v-card-actions>
            </v-card>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <!-- <v-divider class="divider"></v-divider> -->
    </v-container>
  </v-lazy>
</template>

<style scoped>
a {
  text-decoration: none;
}
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
.icons {
  /* margin: 0 0 0 20px; */
  display: flex;
  justify-content: flex-end;
  padding: 0 35px 10px 0;
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
  margin: 0 0 20px 0;
}
.project-card {
  margin: 0 0 0 0;
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
  padding: 0 0 0 10px;
  width: 80%;
}
.projects {
  width: 100%;
  /* justify-items: left; */
  color: #ccd6f6;
}
</style>
