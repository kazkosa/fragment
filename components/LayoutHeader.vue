<template>
  <header class="w-full absolute md:static bg-black px-2 py-2 z-50">
    <div class="md:max-w-3xl mx-auto md:flex md:items-center">
      <div
        class="w-full md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16"
      >
        <h1>
          <nuxt-link
            class="text-white text-xl font-mono font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
            to="/"
            >FRAGMENT</nuxt-link
          >
        </h1>
        <div class="text-white md:hidden">
          <!-- <button class="focus:outline-none" @click="isOpen = !isOpen"> -->
          <button
            class="focus:outline-none"
            @click="$store.commit('menu/toggleMenu')"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-show="!$store.state.menu.isOpen"
                d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
              />
              <path
                v-show="$store.state.menu.isOpen"
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full md:block absolute left-0 md:static bg-black md:bg-none z-20"
        :class="$store.state.menu.isOpen ? 'block' : 'hidden'"
      >
        <ul class="md:flex md:justify-end md:items-end">
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/concept/"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              >Concept</nuxt-link
            >
          </li>
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/articles/"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              >Article</nuxt-link
            >
          </li>
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/information/"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              >Information</nuxt-link
            >
          </li>
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/about/"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              >About Us</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  // fetch() {
  //   console.log(this.$store.state.menu.isOpen)
  //   console.log(this.$store.state.menu.isOpen)
  //   this.$store.commit('menu/resetMenu')
  // },
  name: 'LayoutHeader',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
