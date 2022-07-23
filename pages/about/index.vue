<template>
  <layout-wrapper>
    <layout-visual title="About Us" :height="60" visual="visual-about" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <table class="table-auto w-full mb-10">
        <tbody>
          <tr>
            <td class="border px-4 py-2">Site Name</td>
            <td class="border px-4 py-2">Fragment</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Company</td>
            <td class="border px-4 py-2">MathBlink</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Location</td>
            <td class="border px-4 py-2">
              1-2-2 Izumizaki, Naha City, Okinawa 900-8570
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Industries</td>
            <td class="border px-4 py-2">
              Energy, Robotics, Smart Cities, Education
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Access</td>
            <td class="border px-4 py-2">
              1 minute walk from Exit 5 of the station
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.523668695717!2d127.67838431503027!3d26.212169083434336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5699dfe77fd89%3A0xe69ceb9c28817b01!2sOkinawa%20Prefecture%20Government%20Office!5e0!3m2!1sen!2sjp!4v1658362296241!5m2!1sen!2sjp"
          width="100%"
          height="300"
          style="border: 0; margin: 0 auto"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="mx-auto mb-10 text-center">
        <nuxt-link
          to="/"
          class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md"
          >Back to Top page</nuxt-link
        >
      </div>
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutIndex',
  fetch({ store }: { store: any }) {
    store.commit('menu/resetMenu')
  },
  head() {
    return {
      title: 'About us',
    }
  },
})
</script>

<style></style>
