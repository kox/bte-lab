
<template>
  <div class="flex flex-col w-full bg-back">
    <Nav />

    <MainBanner />
    
    <About />
    
    <HospitalBanner />

    <ResearchMain />

    <Team />

    <!-- <Instagram /> -->

    <ContactForm />

    <Map />
    
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NuxtImage from '@nuxt/image'
/* 
Vue.component('nux-image', NuxtImage); */

export default Vue.extend({});
</script>
