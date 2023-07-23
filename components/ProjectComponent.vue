<template>
  <!-- <div class="projects d-flex flex-wrap justify-center">
    <div class="single-project">
      <br />
      <a href="https://state-data.netlify.app/">
        <h3 class="project-title">{{ projectTitle }}</h3>
        <v-card
          :elevation="6"
          color="#e6f1ff"
          class="rounded-xl project-card"
          outlined
          shaped
          tile
        >
          <v-card-title>
            {{ techUsed  }}
          </v-card-title>
          <v-card-text>
           {{ projectDescription  }}
          </v-card-text>
          <v-card-actions class="icons">
            <a href={{ projectLink }}>
              <v-icon>fab fa-github</v-icon>
            </a>
          </v-card-actions>
        </v-card>
      </a>
    </div>
  </div> -->
  <h1>{{ title }}</h1>
</template>


<script>
export default {
  props: {
    projectTitle: String,
    techUsed: String,
    projectDescription: String,
    projectLink: String,
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.single-project {
  /* background-color: transparent; */
  height: 100%;
  outline: thin;
  outline-color: whitesmoke;
  padding: 0 0 0 10px;
  width: 80%;
}

h3 {
  font-size: clamp(24px, 5vw, 40px);
  color: #e6f1ff;
}
</style>
