import { useEffect } from "react";

const ApiSupport = () => {
  useEffect(() => {
    window.userData = {
      api_url: "https://ai-support.webuldum.com/api",
      api_key: "751bf2eeacc17e27657c38f8fd24dbf4",
      user_id: 12345678,
      user_tel: "",
      user_name: "Guest User",
      admin: -1,
    };

    const script = document.createElement("script");
    script.src = "https://ai-support.webuldum.com/js/destek.js?v=1.2";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div class="page-section border-bottom-2">
      <div class="container page__container">
        <div id="app-acr-support-api-react"></div>
      </div>
    </div>
  );
};

export default ApiSupport;
