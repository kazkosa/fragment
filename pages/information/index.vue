<template>
  <layout-wrapper>
    <layout-visual
      title="Information"
      :height="60"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <layout-information-list
        v-for="(item, index) in items"
        :id="item.id"
        :key="index"
        :date="item.date"
        :title="item.title"
      />
      <base-button name="Back to Top page" link="/" />
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'InformationIndexPage',
  async asyncData({ $config }: { $config: any }) {
    const { data } = await axios.get(`${$config.apiUrl}/news`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
    }
  },
  fetch({ store }: { store: any }) {
    store.commit('menu/resetMenu')
  },
  head() {
    return {
      title: 'Information',
    }
  },
}
</script>
