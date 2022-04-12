<template>
  <section class="section pt-10 relative">
    <div class="maxWidthContainer">
    <div  class="w-full flex flex-col md2:flex-row">
      <div class="w-full bg-hack-cyan  md2:w-1/2 flex items-center justify-center columnOne">
        <div class="xl:w-492 md2:px-10 mini-card text-center md2:text-left py-8 xl:py-0 px-4 sm:px-12 ">
          <h1 class="text-3xl md:text-4xl md2:text-45.5">RSVP Event tickets</h1>
          <h4 class="text-base md:text-lg md2:text-21.4 mt-3">
            Eventalgo is an Algorand-based event management service.
          </h4>

          <div
        class="flex items-center justify-center pt-8 pb-14 sm:pb-0 sm:inline-block flex-col"
      >
        <a
          class="
            inline-block
            bg-white
            text-hack-black
            border border-hack-cyan
            hover:bg-hack-cyan-dark
            text-base
            no-underline
            font-semibold w-56
            text-center
            py-5
            cursor-pointer
            rounded
          "
        >
          Get Started</a
        >
        
      </div>
        </div>
      </div>

      <div class="w-full md2:w-1/2 flex items-center justify-center">
        <img class="w-full" src="@/assets/svg/event.svg" />
      </div>
    </div>
    
    </div>
   
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
*{
    color: #020204 !important;
}
.section {
  background: #020204;
  /* padding-bottom: 150px; */
}
.section h1 {
  font-family: "Syne", sans-serif;
  font-style: normal;
  font-weight: 700;
  /* font-size: 45.5039px; */
  line-height: 140%;
  text-transform: capitalize;
  color: #e1e1e1;
}
.section h4 {
  font-style: normal;
  font-weight: 400;
  /* font-size: 21.3849px; */
  line-height: 160%;
  color: #e1e1e1;
}
.powered {
  bottom: 30px;
}

@media (min-width: 1280px) {
  .mini-card{
    padding-left:0 ;
    padding-right: 0;
  }
}

</style>