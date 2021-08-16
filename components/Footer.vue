<template>
  <v-lazy>
    <!-- <v-divider class="divider"></v-divider> -->
    <v-container class="footer" dark padless>
      <h2 class="pr-6">Get In Touch</h2>
      <div class="contact-info d-flex justify-center flex-wrap text-center pt-16">
        <p>
          Whether you are have a question or just want to say hello, I will get back to you!
          <br />
        </p>
        <br />
        <br />
      </div>
      <div class="icons d-flex justify-center ">
        <v-icon class="icon">fab fa-github</v-icon>
        <v-icon class="icon">fab fa-linkedin</v-icon>
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
  padding: 0 16 0 16;
}

h2 {
  font-size: clamp(48px, 10vw, 80px);
  /* align-items: center; */
  /* position: relative; */
  color: #e6f1ff;
}

p {
  color: #a8b2d1;
  font-weight: 400;
  font-size-adjust: inherit;
}
</style>
