<template>
  <v-lazy>
    <v-container class="portfolio">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6 pb-14">Portfolio</h2>
      <div class="d-flex justify-center">
        <v-btn
          elevation="4"
          x-large
          class="mb-8"
          style="background-color:#8892b0; size:40px"
          v-on:click="openPdf()"
          target="_blank"
        >
          Resume
        </v-btn>
      </div>
      <div class="projects d-flex flex-wrap justify-center ">
        <div class="single-project">
          <br />
          <a href="https://ourpack.netlify.app/">
            <h3 class="project-title">OurPack</h3>
            <v-hover v-slot="{ wrapper }">
              <v-card color="#e6f1ff" class="rounded-xl project-card">
                <v-card-title>
                  Ruby on Rails, Vue.js, PostgreSQL,
                  <br />
                  Node.js, LocalStorage,
                  <br />
                  Bcrypt, Axios
                </v-card-title>
                <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
                <v-card-text>
                  A Web Application that allows backpackers and hikers to log all of the gear into categories
                  <br />
                  to allow for an easier planning process.
                </v-card-text>
                <v-card-actions class="icons">
                  <a href="https://github.com/zackartborges/capstone_project">
                    <v-icon>fab fa-github</v-icon>
                  </a>
                </v-card-actions>
              </v-card>
            </v-hover>
          </a>
        </div>

        <div class="single-project">
          <br />
          <h3 class="project-title">Corkboard</h3>
          <v-card :elevation="6" color="#e6f1ff" class="  rounded-xl " outlined shaped tile>
            <v-card-title>
              Ruby on Rails, Vue.js, PostgreSQL,
              <br />
              Node.js, Axios, ActionCable,
              <br />
              Heroku, Bcrypt
            </v-card-title>
            <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
            <v-card-text>
              An instant messaging web application. Users are able to log in, add friends and send messages in real
              time. The application will be deployed onto Heroku. This project is in its final stages.
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
                Ruby on Rails, Vue.js,
                <br />
                Chart.js
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

        <div class="single-project">
          <br />
          <a href="https://meme-generator01.netlify.app/">
            <h3 class="project-title">Meme Generator</h3>
            <v-card :elevation="6" color="#e6f1ff" class="  rounded-xl " outlined shaped tile>
              <v-card-title>
                React, HTML, CSS
              </v-card-title>
              <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
              <v-card-text>
                A meme generator that displays a random meme after pressing a button. The user will be able to add text
                that transfers over to the newly generated meme. .
              </v-card-text>
              <v-card-actions class="icons">
                <a href=https://github.com/zackartborges/react-generator>
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
                Vue.js, Ruby on Rails, PostgreSQL,
                <br />
                DataMaps
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

        <div class="single-project">
          <br />
          <a href="https://phaser-game-99.netlify.app/">
            <h3 class="project-title">JavaScript Game</h3>
            <v-card :elevation="6" color="#e6f1ff" class=" rounded-xl project-card" outlined shaped tile>
              <v-card-title>
                JavaScript, HTML
              </v-card-title>
              <v-card-text>
                As part of a Hackathon, I created this game. At first, I felt a bit out of my element, but as I
                proceeded in creating the game I had a lot of fun.
                <br />
                Have not yet made it completley accessible with mobile, but will be working on it!
              </v-card-text>
              <v-card-actions class="icons">
                <a href="https://github.com/zackartborges/phaser_game">
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
      <v-divider class="divider"></v-divider>
    </v-container>
  </v-lazy>
</template>

<script>
// import axios from "axios";
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {
    openPdf: function() {
      window.open("./Zack_Borges_Resume.pdf");
    },
  },
};
</script>
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
v-card-title {
  font-size: clamp(16px, 4vw, 30px);
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
