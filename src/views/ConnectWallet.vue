<template>
  <section class="pt-48 md:pt-32 pb-16 md:pb-8 section h-screen flex items-center justify-center">
    <div class="w-4/5 md:w-1/2 xl:w-1/3 bg-hack-grey rounded">
      <div @click="goHome()" class="flex items-center px-4 pt-2 cursor-pointer py-6 back">
        <img src="@/assets/svg/arrow-right.svg" alt="arrow-right" />
        <h4 class="pl-2">Back to Homepage</h4>
      </div>
      <div class="mini-card p-4 ">
        <div class="flex items-start py-4 justify-between">
          <div>
            <h3>Connect Wallet</h3>
            <h5>Select one of the wallet to connect to get started</h5>
          </div>
          <img src="@/assets/svg/help-circle.svg">
        </div>
      <div v-for="(item, index) in walletTypes" :key="index">
        <div
          @click="connectSelectedWallet(item.name)"
          class="wallet flex cursor-pointer my-2 py-4 items-center  justify-center sm:justify-start ">
          <img style="2height:40px;" class="sm:mx-8" :src="item.image">
          <h2 class="pl-2">{{ item.name }}</h2>
        </div>
      </div>
      <div class="flex mt-4 flex-col items-center ">
      <h4 >Don't have a wallet?</h4>
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
            w-52
            my-3
            text-center
            py-3
            cursor-pointer
            rounded
          "
        >
          Create wallet</a
        >
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConnectWallet",
  data() {
    return {
      walletTypes: [
        {
          name: "WalletConnect",
          image: require('@/assets/svg/wallet-connect.svg')
        },
        {
          name: "Atomic Wallet",
          image: require('@/assets/svg/atomic.svg')
        },
        {
          name: "Trust Wallet",
          image: require('@/assets/svg/trust.svg')
        },
        {
          name: "Algorand Wallet",
          image: require('@/assets/svg/algorand.svg')
        },
      ],
    };
  },
  methods:{
    goHome(){
      this.$router.push("/")
    },
    connectSelectedWallet(value){
      console.log(value)
    }
  }
};
</script>

<style scoped>
.section {
  background: #020204;
}
.wallet {
  background: rgba(16, 16, 16, 0.48);
  border-radius: 4px;
  border: 1px solid rgba(16, 16, 16, 0.48);
}
.wallet:hover {
  background: #001111;
  border: 1px solid #00f5f5;
  box-sizing: border-box;
  border-radius: 4px;
}
.mini-card{
  border: 1px solid whitesmoke;
}
.back h4{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color: #E1E1E1;
}
.wallet h2{
font-family: "Syne", sans-serif;
  font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 140%;
color: #E1E1E1;
}
.mini-card h3{
  font-family: 'Syne';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 140%;
color: #E1E1E1;
}
.mini-card h5{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color: #6D6868;
}
</style>