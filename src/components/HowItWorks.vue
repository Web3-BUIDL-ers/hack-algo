<template>
  <section class="section pt-20">
    <div class="w-full flex justify-end">
      <img class="w-11/12" src="@/assets/svg/how-it-works.svg" />
    </div>
    <div class="maxWidthContainer w-11/12">
      <div class="w-full px-4 md2:px-0 flex flex-col md2:flex-row pt-16">
        <div class="w-full  md2:w-1/3 mt-6 md2:mt-0 md2:mx-6 flex flex-col items-center justify-end column">
          <div class="mt-28 px-6 pb-4 ">
            <h2 class=" text-2xl md:text-3xl">Attend Event</h2>
              <h4 class=" text-lg md:text-xl my-4">Eventalgo is an Algorand-based event management service that 
                  delivers higher event participation rates by asking registrants.</h4>
          </div>
        </div>
        <div class="w-full  md2:w-1/3 mt-6 md2:mt-0 md2:mx-6 flex flex-col items-center justify-end column">
          <div class="mt-28 px-6 pb-4 ">
            <h2 class=" text-2xl md:text-3xl">Stake Algo</h2>
              <h4 class=" text-lg md:text-xl my-4">Eventalgo is an Algorand-based event management service that 
                  delivers higher event participation rates by asking registrants.</h4>
          </div>
        </div>
        <div class="w-full  md2:w-1/3 mt-6 md2:mt-0 md2:mx-6 flex flex-col items-center justify-end column">
          <div class="mt-28 px-6 pb-4 ">
            <h2 class=" text-2xl md:text-3xl">Earn Algo</h2>
              <h4 class=" text-lg md:text-xl my-4">Eventalgo is an Algorand-based event management service that 
                  delivers higher event participation rates by asking registrants.</h4>
          </div>
        </div>
        
        
        
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  background: #020204;
  padding-bottom: 150px;
}
.section h2 {
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
@media (min-width: 1280px) {
  .mini-card {
    padding-left: 0;
    padding-right: 0;
  }
}
.column {
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>