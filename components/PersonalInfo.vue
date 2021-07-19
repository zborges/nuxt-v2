<template>
  <v-lazy>
    <v-container class="text-md-right mt-16" align="center">
      <div>
        <v-divider class="divider"></v-divider>
        <h2 class="pr-6">About Me</h2>
        <div class="testimonial">
          <p class="text-md-right! ">
            Hello! My name is Zack and I enjoy surfing and floating in the ocean long, as well as having my heart rate
            spike as I watch thriller/ psychological horror movies.
          </p>
        </div>
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
.testimonial {
  /* width: 400px; */
  /* float-right */
}
</style>
