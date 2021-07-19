<template>
  <v-container class="text-md-left mt-16" align="center">
    <v-divider class="divider"></v-divider>

    <h2 class="pr-6">About Me</h2>
    <v-img
      alt="my-photo"
      src="zack.jpeg"
      max-height="400"
      max-width="400"
      class="rounded-lg text-md-right my_photo"
    ></v-img>
    <div class="testimonial">
      <p class="text-md-left">
        Hello! My name is Zack and I enjoy surfing, floating in the ocean, and having my heart rate spike as I watch
        thriller/ psychological horror movies.
        <br />
        <br />
        I started coding about a year after graduating with a Psychology degree, and decided to pursue a career as a
        developer. I have a passion in learning, and while I was in University, I was especially intersted in Human
        Development and learning about adults and children with special needs.
        <br />
        <br />
        Currently, I am painting houses for a living, and building projects on the side until I find the right fit for
        me.
      </p>
    </div>
  </v-container>
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
  width: 60%;
  /* float-right */
  margin-right: auto;
  padding-right: 80px;
  font-weight: 400;
  font-size-adjust: inherit;
}
.my_photo {
  position: relative;
  float: right;
  margin-bottom: 80px;
}
</style>
