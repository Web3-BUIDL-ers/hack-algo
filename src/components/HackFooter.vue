<template>
  <section class="section">
    <div class="maxWidthContainer w-10/12 py-20">
      <div class="w-full flex flex-col sm:flex-row">
        <div class="w-full sm:w-1/2 flex items-center justify-center sm:justify-start sm:items-start">
          <h1 class=" text-2xl md:text-3xl ">EventAlgo. 2022</h1>
        </div>
        <div class="w-full mt-5 sm:mt-0  sm:w-1/2 flex items-center justify-center sm:items-end sm:justify-end">
          <div class="flex"> 
            <img class="mx-4" src="@/assets/svg/email.svg" />
            <img class="mx-4" src="@/assets/svg/twitter.svg" />
            <img class="ml-4" src="@/assets/svg/discord.svg" />
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
</style>