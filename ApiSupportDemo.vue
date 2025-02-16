<template>
  <div class="page-section border-bottom-2">
    <div class="container page__container">
      <div id="app-acr-support-api-vue"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiSupport",
  mounted() {
        window.userData = {
            api_url: "https://ai-support.webuldum.com/api",
            api_key: "f528764d624db129b32c21fbca0cb8d6",
            user_id: 12345678,
            user_tel: "",
            user_name: "Misafir Kullanıcı",
            admin: -1,
        };
        this.loadExternalScript("https://ai-support.webuldum.com/js/destek.js?v=1.2");
  },
  methods: {
    loadExternalScript(url) {
      let script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    },
  },
};
</script>
