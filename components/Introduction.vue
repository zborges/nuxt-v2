<template>
    <v-container class="mt-16" align="center mx-width-300">
      <div class="text-center  text-md-right mt-16">
          <h2 class="pr-6">
            Hello, my name is
          </h2>
        </div>
        <h1 class="font-weight-400">Zack Borges</h1>
        <h3>I build websites and web applications.</h3>
        <p>I'm a software engineer, currently living in Athens, Georgia.</p>
        <p></p>
      </div>
    </v-container>
</template>

<style scoped>
h2 {
  margin: 0 10;
  color: #05d9e8;
  font-family: "Roboto Mono";
  font-weight: 400;
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
}
/* .hero {
  font-family: "Ubuntu Mono", monospace;
} */
h1 {
  color: #e6f1ff;
  font-size: clamp(40px, 8vw, 80px);
}
h3 {
  color: #a8b2d1;
  font-size: clamp(40px, 8vw, 80px);
}
p {
  font-size: var(--fz-xl);
  color: #a8b2d1;
}
</style>

