<template>
  <div>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>
        Zack Borges
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items class="">
        <v-btn to="/signup" text>Sign Up</v-btn>
        <v-btn to="/login" text>login</v-btn>
      </v-toolbar-items>
      </v-menu> -->
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    activate: true,
    theme: 1,
    themes: [
      {
        text: "Dark",
        icon: "mdi-clock",
      },
      {
        text: "Light",
        icon: "mdi-account",
      },
    ],
    mini: true,
    services: [
      {
        icon: "mdi-domain",
        title: "Media Monitoring",
        link: "/mmrservices",
      },
      {
        icon: "mdi-message-text",
        title: "Audience Measurement",
        link: "/amrservices",
      },
      {
        icon: "mdi-flag",
        title: "Integration Analysis",
      },
    ],
  }),
};
</script>
