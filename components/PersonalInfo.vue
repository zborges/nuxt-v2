<template>
  <v-lazy>
    <v-container class="text-md-left mt-5 pt-md-15">
      <v-divider class="divider"></v-divider>

      <h2 class="pr-6">About Me</h2>
      <div class="">
        <v-img
          alt="my-photo"
          src="zack.jpeg"
          max-height="400"
          max-width="400"
          class="rounded-lg d-flex justify-center float-md-right ml-md-6 my_photo"
        ></v-img>
        <div class="testimonial pr-sm-8">
          <p class="text-center text-md-left">
            Hello! My name is Zack.
            I enjoy <span style="color:#05d9e8">hiking</span>,
            <span style="color:#05d9e8">rock climbing</span>, and
            having my heart rate spike as I watch thriller and
            psychological horror movies.
          </p>
          <p class="text-center text-md-left">
            As a full-stack Software Engineer, I have designed and
            built production applications across the stack —
            most recently developing geospatial features for
            <a
              href="https://power.larc.nasa.gov"
              target="_blank"
              rel="noopener noreferrer"
              style="color:#ff6b6b"
            >NASA's POWER Project</a>
            that process real-time satellite data to tackle
            critical environmental challenges.
            I specialize in
            <span style="color:#05d9e8">Ruby on Rails</span>,
            <span style="color:#05d9e8">React</span>, and
            <span style="color:#05d9e8">PostgreSQL</span>
            and I am driven by turning complex, large-scale
            problems into clean, scalable solutions.
          </p>
          <p class="text-center text-md-left">
            I thrive on turning complex problems into scalable,
            reliable solutions — and I'm looking to bring that
            drive to a team that values intellectual curiosity,
            bold thinking, and work that genuinely matters.
          </p>
        </div>
      </div>
    </v-container>
  </v-lazy>
</template>

<style scoped>
.divider {
  background-color: #ccd6f6;
}
.container {
  align-content: center;
}

h2 {
  font-size: clamp(48px, 10vw, 80px);
  color: #e6f1ff;
}

p {
  color: #a8b2d1;
}
.testimonial {
  width: 100%;
  font-weight: 400;
  font-size-adjust: inherit;
}
.my_photo {
  margin-bottom: 80px;
}

@media (max-width: 948px) {
  .my_photo {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
