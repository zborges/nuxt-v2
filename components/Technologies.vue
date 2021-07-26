<template>
  <v-lazy>
    <v-container class="text-md-left mt-5" align="center">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6">Technologies</h2>
      <p class="text-md-left">These are some of the technologies that I have been working with recently:</p>
      <div class="technologies text-center">
        <v-carousel cycle height="320" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item>
            <v-sheet class="sheet">
              <v-row class="fill-height" align="center" justify="center">
                <div class="skill">
                  <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.JavaScript }}%
                  </v-progress-circular>
                  <h3>JavaScript</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="90" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.HTML5 }}%
                  </v-progress-circular>
                  <h3>HTML5</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.Vue }}%
                  </v-progress-circular>
                  <h3>Vue</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.CSS3 }}%
                  </v-progress-circular>
                  <h3>CSS3</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.RubyOnRails }}%
                  </v-progress-circular>
                  <h3>Ruby on Rails</h3>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>

          <v-carousel-item>
            <v-sheet class="sheet">
              <v-row class="fill-height" align="center" justify="center">
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.PostGreSQL }}%
                  </v-progress-circular>
                  <h3>PostGreSQL</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.AWS }}%
                  </v-progress-circular>
                  <h3>AWS</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.Git }}%
                  </v-progress-circular>
                  <h3>Git</h3>
                </div>
                <div class="skill">
                  <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="#8892b0">
                    {{ value.Express }}%
                  </v-progress-circular>
                  <h3>Express</h3>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  // components: {
  //   // SearchBar,
  // },
  data: function() {
    return {
      interval: {},
      value: {
        RubyOnRails: 90,
        JavaScript: 85,
        HTML5: 100,
        CSS3: 95,
        PostGreSQL: 85,
        AWS: 70,
        Git: 95,
        Heroku: 85,
        Vue: 90,
        Express: 65,
      },
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   // if (this.value === 100) {
    //   //   return (this.value = 0);
    //   // }
    //   this.value += 10;
    // }, 1000);
  },
};
</script>

<style scoped>
li {
  color: #a8b2d1;
}

ul {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style-type: disc;
}
h2 {
  font-size: clamp(48px, 10vw, 80px);
  /* align-items: center; */
  /* position: relative; */
  color: #e6f1ff;
}
p {
  color: #b2b2b4;
}
.container {
  padding-top: 220px;
}
.divider {
  /* align: center; */
  /* vertical-align: start, center, end, baseline, stretch; */
  background-color: #ccd6f6;
  /* justify-content: center; */
  /* width: 50%; */
}
.sheet {
  color: #e6f1ff;
  height: 100%;
  background-color: #0a192f;
  width: 100%;
}
.skill {
  padding: 0 30px 0 30px;
}
.skills-div {
  align-content: center !important;
}
.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}
.technologies {
  margin: 60px 0 60px 0;
  color: #a8b2d1;
}
</style>
