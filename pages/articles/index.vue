<template>
  <layout-wrapper>
    <layout-visual
      title="Articles"
      :height="60"
      visual="visual-article"
      color="black"
      text-shadow="white"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <div v-if="items.length" class="mb-20 flex b-articles">
        <layout-article-list
          v-for="(item, index) in items"
          :id="item.id"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :title="item.title"
          :body="item.content"
          item-class="w-full md:w-60 mb-20 shadow-lg bg-gray-200"
          block-class="max-w"
          image-class="xw-full"
          class="c-article-item"
        />
      </div>
      <base-button name="Back to Top page" link="/" />
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'ArticlesIndexPage',
  async asyncData({ $config }: { $config: any }) {
    const { data } = await axios.get(`${$config.apiUrl}/articles`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
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
  head() {
    return {
      title: 'メニュー',
    }
  },
}
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
