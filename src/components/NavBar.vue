<template>
  <section class="section ">
    <nav
    class="
      flex
      fixed
      z-10
        items-center
        justify-between   
         px-6
        sm:px-10
        md:px-12
        lg:px-24
        xl:px-24
        py-6
    "
    >
      <div>
        <a href="/"> <img src="@/assets/svg/hack-algo-logo.svg" alt="hack-algo" /></a>
      </div>

      <div class="md:flex items-center justify-center hidden">
        <router-link class="mx-4 lg:mx-10" to="#features">Events</router-link>
        <router-link class="mx-4 lg:mx-10" to="#about">Learn</router-link>
        <router-link class="mx-4 lg:mx-10" to="#about">Staking</router-link>
        <router-link class="mx-4 lg:mx-10" to="#about">FAQ</router-link>
      </div>
      <div class="md:flex items-center justify-center hidden">
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
            w-48
            text-center
            py-3
            cursor-pointer
            rounded
          "
          href="/connect-wallet"
        >
          Connect wallet</a
        >
      </div>

      <div
        class="md:hidden cursor-pointer"
        @click="dropdownMenuIsVisible = !dropdownMenuIsVisible"
      >
        <img
          v-if="!dropdownMenuIsVisible"
          width="21"
          height="15"
          alt="menu"
          src="@/assets/svg/hamburger.svg"
        />
        <img
          v-if="dropdownMenuIsVisible"
          width="21"
          height="15"
          alt="x"
          src="@/assets/svg/x.svg"
        />
      </div>
      <div style="background: #909090"
        class="block md:hidden fixed w-fit shadow rounded right-2 top-14"
        :class="dropdownMenuIsVisible ? 'block' : 'hidden'"
      >
        <div class="flex flex-col p-4 text-center">

          <router-link class="m-3" to="#features">Events</router-link>
          <router-link class="m-3" to="#about">Learn</router-link>
          <router-link class="m-3" to="#about">Staking</router-link>
          <router-link class="m-3" to="#about">FAQ</router-link>
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
            w-48
            mt-4
            my-2
            text-center
            py-3
            cursor-pointer
            rounded
          "
          href="/connect-wallet"
        >
          Connect wallet</a
        >
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
// import WalletModal from "@/components/WalletModal.vue";
export default {
  name: "NavBar",
  data() {
    return {
      dropdownMenuIsVisible: false,
      
    };
  },
  components: {
    // WalletModal,
  },
  methods: {
    createNewWallet() {
      this.openModalOne = false;
      this.openModalTwo = true;
    },
    connectWallet() {
      this.openModalOne = true;
      this.openModalTwo = false;
    },
    createSelectedWallet(value) {
      console.log(value);
    },
    connectSelectedWallet(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.section {
  background: #020204;
  /* width: 100vw; */
}
nav {
  background: #020204;
  width: 100%;
}
</style>