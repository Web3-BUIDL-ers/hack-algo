<template>
  <div class="home">
    <hero-section/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    HeroSection
  }
}
</script>
