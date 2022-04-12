<template>
  <section class="section pt-20">
    <div class="w-full">
      <img class="w-11/12" src="@/assets/svg/staking-algo.svg" />
    </div>
    <div class="maxWidthContainer">
      <div class="w-full flex flex-col md2:flex-row pt-16">
        <div class="w-full md2:w-1/2 flex items-center justify-center">
          <img src="@/assets/images/Rectangle.png" />
        </div>
        <div class="w-full mt-10 md2:mt-0 md2:w-1/2 flex items-center">
          <div
            class="
              xl:w-572
              md2:px-10
              mini-card
              text-center
              md2:text-left
              px-4
              sm:px-12
            "
          >
            <h1 class="text-3xl md:text-4xl md2:text-45.5">
              RSVP Event tickets by staking Algos
            </h1>
            <h4 class="text-base md:text-lg md2:text-21.4 mt-5">
              Eventalgo is an Algorand-based event management service that
              delivers higher event participation rates by asking registrants.
            </h4>
            <div class="pt-12">
              <a
                class="
                  inline-block
                  bg-hack-cyan
                  text-hack-black
                  border border-hack-cyan
                  hover:bg-hack-cyan-dark
                  text-base
                  no-underline
                  font-semibold
                  w-64
                  text-center
                  py-4
                  cursor-pointer
                  rounded
                "
              >
                <div class="flex items-center justify-center">
                  Learn About Staking
                  <img class="ml-2" src="@/assets/svg/arrow-up-right.svg" />
                </div>
              </a>
            </div>
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
@media (min-width: 1280px) {
  .mini-card {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>