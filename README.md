# Artificial Intelligence Support System

## Overview
Artificial Intelligence Support System is an AI-assisted solution designed to analyze pre-loaded data and provide users with accurate responses. The system can generate direct answers or assist users in forming the most suitable response based on the given data.

## Features
- **AI-Powered Responses:** The system processes user queries with AI, providing accurate and contextual answers.
- **User Feedback Mechanism:** Users can rate responses on a scale of 1 to 10, allowing the system to evaluate user satisfaction.
- **Admin Notification System:** If a response receives a rating below 5, an SMS notification is sent to the administrator.
- **Chat History Rating Adjustment:** Users can update their initial ratings by revisiting their chat history.
- **Admin Review Panel:** Administrators receive a link to review low-rated responses and can provide new answers if needed.
- **Direct Communication with Admins:** If an administrator provides contact information, AI can share it with users upon request.
- **Flexible Pricing Model:** The system operates on a pay-as-you-go model, requiring users to purchase AI credits in advance.

## Integration Guide
The AI Support System can be easily integrated into various platforms, including Vue.js, React.js, HTML, and Laravel.

### Vue 3 Integration (Options API)
#### **ApiSupport.vue**
```vue
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
```

### React.js Integration
#### **ApiSupport.js**
```jsx
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
```

### HTML Integration
```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Destek Sayfası</title>
    <link rel="stylesheet" href="https://ai-support.webuldum.com/css/api_web.css?v=1.2">
</head>
<body>
    <div id="app-acr-support-api-vue"></div>
    <script>
        window.userData = {
            api_url: "https://ai-support.webuldum.com/api",
            api_key: "751bf2eeacc17e27657c38f8fd24dbf4",
            user_id: 12345678,
            user_tel: "",
            user_name: "Guest User",
            admin: -1
        };
    </script>
    <script src="https://ai-support.webuldum.com/js/destek.js?v=1.2"></script>
</body>
</html>
```

### Laravel Blade Integration
```blade
@extends('index')

@php
    $baseUrl = 'https://ai-support.webuldum.com/';
@endphp

@section('acr_index')
<div class="page-section border-bottom-2">
    <div class="container page__container">
        <div id="app-acr-support-api-vue"></div>
    </div>
</div>
@endsection

@section('header')
<link rel="stylesheet" href="{{ $baseUrl }}css/api_web.css?v=1.2">
@endsection

@section('footer')
<script>
    window.userData = {
        api_url: "{{ $baseUrl }}api",
        api_key: "751bf2eeacc17e27657c38f8fd24dbf4",
        user_id: {{ auth()->check() ? auth()->user()->id : rand(10000000, 90000000) }},
        user_tel: "{{ auth()->check() ? auth()->user()->tel : null }}",
        user_name: "{{ auth()->check() ? auth()->user()->name : 'Guest User' }}",
        admin: {{ in_array(1, roleIds()) ? 1 : -1 }}
    };
</script>
<script src="{{ $baseUrl }}js/destek.js?v=1.2"></script>
@endsection
```

## Pricing Model
- **No Free Trial:** The system does not offer a free trial.
- **Credit-Based System:** Users must purchase AI tokens in advance.
- **No Corporate Discounts:** There are currently no bulk or special pricing plans.

## Useful Links
- **[Demo Page](https://ai-support.webuldum.com/tr/app/destekapi/demo#/)**
- **[Pricing Page](https://ai-support.webuldum.com/tr/app/destekapi/fiyatlandirma)**

For further details, visit [AI Support System](https://ai-support.webuldum.com).

