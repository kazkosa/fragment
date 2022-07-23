<template>
  <layout-wrapper>
    <layout-visual
      title="Concept"
      :height="60"
      visual="visual-concept"
      color="black"
      text-shadow="white"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <h3 class="text-2xl text-red-800 font-extrabold mb-5 text-center">
        As Notebook Storage
      </h3>
      <div class="clearfix p-4 mb-10">
        <img
          class="float-right ml-4 my-2 h-56"
          src="~/assets/img/concept.jpg"
        />
        <div>
          <p class="mb-5">
            Accumulate for the purpose of outputting daily input regardless of
            field. Also, it does not sometimes limit whether it is a theoretical
            or experimental result or a comparison thereof.<br />
            Believe that the fragments will gradually do something
          </p>
        </div>
      </div>
      <base-button name="Back to Top page" link="/" />
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
export default {
  name: 'ConceptIndexPage',
  fetch({ store }: { store: any }) {
    store.commit('menu/resetMenu')
  },
  head() {
    return {
      title: 'Concept',
    }
  },
}
</script>

<style lang="scss" scoped>
.clearfix {
  overflow: hidden;
}
</style>
