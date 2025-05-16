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
            In my recent roles as a Software Engineer, I've built new features and resolved critical
            production bugs across full-stack applications using React and Ruby on Rails. I enjoy tackling
            complex problems and turning them into practical, reliable solutions that deliver real value.
            <br />
            <br />
            My primary tech stack is <span style="color:#05d9e8">React, Ruby on Rails, PostgreSQL and AWS.</span>,
            
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
