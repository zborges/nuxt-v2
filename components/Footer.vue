<template>
  <v-lazy>
    <!-- <v-divider class="divider"></v-divider> -->
    <v-container class="footer" dark padless>
      <h2 class="pr-6">Contact me</h2>
      <div class="contact-info">
        <v-icon>fab fa-github</v-icon>
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
  width: 50%;
}

h2 {
  font-size: clamp(48px, 10vw, 80px);
  /* align-items: center; */
  /* position: relative; */
  color: #e6f1ff;
}

/* p {
  color: #a8b2d1;
} */
</style>
