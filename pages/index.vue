<template>
  <layout-wrapper>
    <div>
      <LayoutVisual
        title="NUXT SMAPLE SITE DEMO"
        message="This is a demo site that introduces articles and information with microCMS"
        color="black"
        text-shadow="white"
      />
      <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
        <BaseHeading>Recommended articles</BaseHeading>
        <div class="flex b-articles">
          <LayoutArticleList
            v-for="(item, index) in articleItems"
            :id="item.id"
            :key="index"
            :image="item.image"
            :image-url="item.image.url"
            :title="item.title"
            :body="item.content"
            item-class="w-full md:w-60 mb-20 shadow-lg bg-gray-200"
            block-class="max-w"
            image-class="xw-full"
            data-class="px-6 py-4"
            :flag-body="false"
            class="c-article-item"
          />
        </div>
        <BaseButton name="Artticle List" link="/articles/" />
        <BaseHeading>Information</BaseHeading>
        <div class="mb-20">
          <LayoutInformationList
            v-for="(item, index) in infoItems"
            :id="item.id"
            :key="index"
            :date="item.date"
            :title="item.title"
          />
        </div>
        <BaseButton name="Information List" link="/information/" />
      </div>
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $config }: { $config: any }) {
    const articles = await axios.get(`${$config.apiUrl}/articles?limit=3`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    const info = await axios.get(`${$config.apiUrl}/news?limit=3`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    return {
      articleItems: articles.data.contents,
      infoItems: info.data.contents,
    }
  },
  data() {
    return {
      items: [],
    }
  },
  fetch({ store }: { store: any }) {
    store.commit('menu/resetMenu')
  },
})
</script>

<style lang="scss" scoped>
.c-article-item {
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
}
.b-articles {
  flex-wrap: wrap;
}
</style>
