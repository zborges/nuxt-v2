<template>
  <v-lazy>
    <v-container class="text-md-left mt-5" align="center">
      <v-divider class="divider"></v-divider>
      <h2 class="pr-6">Technologies</h2>
      <h4 class="text-md-left">These are some of the technologies that I have been working with recently:</h4>
      <p style="color:#64ffda; font-size:clamp(11px, 2vw, 17px)" class="d-none d-sm-flex">(hover!)</p>
      <p style="color:#64ffda; font-size:clamp(11px, 1.5vw, 15px)" class="d-sm-none">(click me!)</p>
      <div class="technologies text-center">
        <v-carousel interval="12000" cycle height="525" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item>
            <v-sheet class="sheet">
              <v-row class="fill-height" align="center" justify="center">
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="-90" :size="120" :width="15" :value="value" color="#8892b0">
                          {{ value.JavaScript }}%
                        </v-progress-circular>
                        <h3>JavaScript</h3>
                      </span>
                    </template>
                    <span>
                      One of my favorite languages, and one I aspire to master.
                    </span>
                  </v-tooltip>
                </div>
               
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#ccd6f6">
                          {{ value.React }}%
                        </v-progress-circular>
                        <h3>React</h3>
                      </span>
                    </template>
                    <span>
                      Have built a few small projects using React.
                      <br />
                      I enjoy the core principles that differentiate React from other JavaScript frameworks. 
                      </br>
                      Excited to learn more.
                    </span>
                  </v-tooltip>
                </div>
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#64ffda">
                          {{ value.RubyOnRails }}%
                        </v-progress-circular>
                        <h3>Ruby (on Rails)</h3>
                      </span>
                    </template>
                    <span>
                      The first language I learned. Will always
                      <br />
                      hold a special place in my heart.
                      <br />
                    </span>
                  </v-tooltip>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet class="sheet">
              <v-row class="fill-height" align="center" justify="center">
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#64ffda  ">
                          {{ value.Vue }}%
                        </v-progress-circular>
                        <h3>Vue.js</h3>
                      </span>
                    </template>
                    <span>
                      JavaScript Framework that I use primarily.
                      <br />
                      The frontend for my first full stack web application was built using Vue.
                      <br />
                      Thoroughly enjoy learning more and more about the framework.
                    </span>
                  </v-tooltip>
                </div>
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#ccd6f6">
                          {{ value.ReactNative }}%
                        </v-progress-circular>
                        <h3>React Native</h3>
                      </span>
                    </template>
                    <span>
                      Recently began learning. Great documentation,
                      <br>
                  really looking forward to diving deeper into React Native.
                    </span>
                  </v-tooltip>
                </div>
                
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#8892b0">
                          {{ value.PostGreSQL }}%
                        </v-progress-circular>
                        <h3>PostGreSQL</h3>
                      </span>
                    </template>
                    <span>
                      Relational Database that I use primarily.
                      <br />
                    </span>
                  </v-tooltip>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>

          <v-carousel-item>
            <v-sheet class="sheet">
              <v-row class="fill-height" align="center" justify="center">
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#ccd6f6">
                          {{ value.AWS }}%
                        </v-progress-circular>
                        <h3>AWS</h3>
                      </span>
                    </template>
                    <span>
                      Learning more and more about AWS as it is
                      <br />
                      becoming implemented more and more among companies.
                      <br />
                    </span>
                  </v-tooltip>
                </div>
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#64ffda">
                          {{ value.Git }}%
                        </v-progress-circular>
                        <h3>Git</h3>
                      </span>
                    </template>
                    <span>
                      My primary method of version control.
                      <br />
                    </span>
                  </v-tooltip>
                </div>
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#8892b0">
                          {{ value.Express }}%
                        </v-progress-circular>
                        <h3>Express</h3>
                      </span>
                    </template>
                    <span>
                      Have built a small unpublished project, but plan on
                      <br />
                      learning more.
                    </span>
                  </v-tooltip>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet class="sheet">
              <v-row class="fill-height" align="center" justify="center">
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#64ffda">
                          {{ value.Heroku }}%
                        </v-progress-circular>
                        <h3>Heroku</h3>
                      </span>
                    </template>
                    <span>
                      Have all of my projects on Heroku.

                      <br />
                      Easy and enjoyable to manuever.
                    </span>
                  </v-tooltip>
                </div>
                <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="180" :size="120" :width="15" :value="value" color="#ccd6f6">
                          {{ value.CSS3 }}%
                        </v-progress-circular>
                        <h3>CSS3</h3>
                      </span>
                    </template>
                    <span>
                      The styling component that is very straightforward.
                      <br />
                      Can be a bit frustrating, but the most rewarding.
                      <br />
                    </span>
                  </v-tooltip>
                </div>
                 <div class="skill">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-progress-circular :rotate="90" :size="120" :width="15" :value="value" color="#ccd6f6">
                          {{ value.HTML5 }}%
                        </v-progress-circular>
                        <h3>HTML5</h3>
                      </span>
                    </template>
                    <span>
                      Very familiar and experienced in providing
                      <br />
                      the skeleton of web pages etc.
                    </span>
                  </v-tooltip>
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
  data: function() {
    return {
      interval: {},
      value: {
        RubyOnRails: 90,
        JavaScript: 85,
        HTML5: 100,
        CSS3: 95,
        PostGreSQL: 85,
        AWS: 60,
        Git: 95,
        Heroku: 85,
        Vue: 90,
        Express: 65,
        React: 75,
        ReactNative: 60,
      },
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   if (this.value === 100) {
    //     return (this.value = 0);
    //   }
    //   this.value += 10;
    // }, 1000);
  },
};
</script>

<style scoped>
li {
  color: #a8b2d1;
}
p {
  font-size: 13px;
  /* width: ; */
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
h4 {
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
  background-color: transparent;
  width: 100%;
}
.skill {
  padding: 0 70px 0 70px;
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
