<template>
<v-lazy>

  <v-container class="text-md-left mt-5" align="center">
    <v-divider class="divider"></v-divider>
    <h2 class="pr-6">Technologies</h2>

    <div class="technologies">
      <p class="text-md-left"></p>
      <p>These are some of the technologies that I have been working with recently:</p>
      <div class="skills-div">
     <div class="flex-wrapper">
</div>
      </ul>
    </div>
      </ul>
    </div>
  </v-container>
  </v-lazy>
</template>

<style scoped>

.divider {
  /* align: center; */
  /* vertical-align: start, center, end, baseline, stretch; */
  background-color: #ccd6f6;
  /* justify-content: center; */
  /* width: 50%; */
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
.container {
  padding-top: 200px;
}
h2 {
  font-size: clamp(48px, 10vw, 80px);
  /* align-items: center; */
  /* position: relative; */
  color: #e6f1ff;
}
p {
  color: #a8b2d1;
}

</style>
