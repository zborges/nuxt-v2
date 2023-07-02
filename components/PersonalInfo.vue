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
          <p class="text-center text-md-left ">
            Hello! My name is Zack and I enjoy hiking, rock climbing, and having my
            <span style="color:#05d9e8">heart rate spike</span>
            as I watch thriller/ psychological horror movies.
            <br />
            <br />
            I started coding about a year after graduating with a Psychology degree, and decided to pursue a career as a
            developer after falling in love with the endless possibilities of improvement.
            <br />
            <br />
            At my last job, I was a full-stack developer for a consultancy that built Saas 
            products primarily used in the health care industry. The tech stack used for the different applications was  <span style="color:#05d9e8">React, Ruby on Rails, and PostgreSQL</span>.
            <br />
            <br />
           I am currently looking for my next dev role, where I plan to continue to grow as a developer and learn new technologies.
          </p>
        </div>
      </div>
      <br />
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
  align-content: center;
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
  width: 100%;
  /* float-right */
  /* margin-right: auto; */
  /* padding-right: 80px; */
  font-weight: 400;
  font-size-adjust: inherit;
}
.my_photo {
  /* float: right; */
  margin-bottom: 80px;
}
</style>
