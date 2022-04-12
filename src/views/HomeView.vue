<template>
  <div class="home">
    <hero-section/>
    <staking-algo/>
    <how-it-works/>
    <post-an-event/>
    <rsvp-event-ticket/>
    <hack-footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeroSection from '@/components/HeroSection.vue'
import StakingAlgo from '@/components/StakingAlgo.vue'
import PostAnEvent from '@/components/PostAnEvent.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import RsvpEventTicket from '@/components/RsvpEventTicket.vue'
import HackFooter from '@/components/HackFooter.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    HeroSection,
    StakingAlgo,
    PostAnEvent,
    HowItWorks,
    RsvpEventTicket,
    HackFooter
  }
}
</script>
<style >
.maxWidthContainer {
  max-width: 1500px;
  margin: auto;
}
</style>
