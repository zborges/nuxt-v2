<template>
  <v-lazy>
    <v-container class="portfolio">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6 pb-14">Portfolio</h2>
      <div class="projects d-flex flex-wrap flex-column ">
        <div class="single-project">
          <br />
          <h3 class="project-title">OurPack</h3>
          <v-card :elevation="6" color="#e6f1ff" class="rounded-xl project-card" outlined shaped tile>
            <v-card-title>
              Ruby on Rails, Vue.js,
              <br />
              PostGreSQL
            </v-card-title>
            <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
            <v-card-text>
              An instant messaging web application. Users are able to log in, add friends and send messages in real
              time. This project is in its final stages. The Vue app will be built with AWS S3, while the Rails app will
              be deployed using an EC2 Instance.
            </v-card-text>
          </v-card>
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
              A Web Application that allows backpackers and hikers to log all of the gear into categories,
              <br />
              to allow for an easier planning process.
            </v-card-text>
          </v-card>
        </div>
        <div class="single-project">
          <br />
          <h3 class="project-title">Framework Watcher</h3>
          <v-card :elevation="6" color="#e6f1ff" class="  rounded-xl " outlined shaped tile>
            <v-card-title>
              Vanilla.JS HTML
            </v-card-title>
            <!-- <v-card-subtitle>Ruby on Rails, Vue.js, PostGreSQL</v-card-subtitle> -->
            <v-card-text>
              A simple display of the popularity of the most popular JavaScript frameworks.
              <br />
              Data is being collected from the Github API.
            </v-card-text>
          </v-card>
        </div>
        <!-- <v-img src="OurPack.png" height="200" width="150"></v-img> -->
        <div class="single-project">
          <br />
          <h3 class="project-title">Framework Watcher</h3>
          <v-card :elevation="6" color="#e6f1ff" class=" d-flex flex-wrap rounded-xl project-card" outlined shaped tile>
            <v-card-title>
              VanillaJS, HTML
            </v-card-title>
            <v-card-text>
              A simple display of popular JavaScript frameworks. Data is being collected from the GitHub API.
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
  max-width: 60%;
}
.projects {
  width: 100%;
  /* justify-items: left; */
  color: #ccd6f6;
}
</style>
