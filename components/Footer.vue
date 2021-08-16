<template>
  <v-lazy>
    <!-- <v-divider class="divider"></v-divider> -->
    <v-container class="footer" dark padless>
      <h2 class="pr-6 d-flex justify-center">Get In Touch</h2>
      <div class="contact-info d-flex justify-center text-center pt-16">
        <p>
          Whether you have a question or just want to say hello, I will get back to you!
          <br />
          <br />
        </p>
      </div>
      <div class="d-flex justify-center mb-12">
        <v-btn href="mailto:zackartborges@gmail.com" class="align-center" elevation="2" depressed color="#05d9e8">
          Contact Me
        </v-btn>
      </div>

      <div class="icons d-flex justify-center ">
        <a href="https://github.com/zackartborges">
          <v-icon class="icon">fab fa-github</v-icon>
        </a>
        <a href="https://www.linkedin.com/in/zack-borges/">
          <v-icon class="icon">fab fa-linkedin</v-icon>
        </a>
      </div>
    </v-container>
  </v-lazy>
</template>

//
<script>
// export default {
//   data: function() {
//     return {};
//   },
// };
//
</script>

<style scoped>
.divider {
  /* align: center; */
  /* vertical-align: start, center, end, baseline, stretch; */
  background-color: #ccd6f6;
  /* justify-content: center; */
  /* width: 50%; */
}
.footer {
  width: 100%;
}
.contact-info {
  width: 100%;
  color: #a8b2d1;
  display: flex;
  justify-content: center;
}
.icon {
  color: #a8b2d1;
  padding: 0 16px 0 16px;
}
a {
  text-decoration: none;
}

h2 {
  font-size: clamp(38px, 70vw, 60px);
  align-items: center;
  position: relative;
  color: #e6f1ff;
}

p {
  color: #a8b2d1;
  font-weight: 400;
  font-size-adjust: inherit;
}
</style>
