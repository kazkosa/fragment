<template>
  <layout-wrapper>
    <layout-visual
      title="Information"
      :height="60"
      visual="visual-information"
    />

    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <h2 class="text-xl pb-5 border-b border-gray-500 border-solid font-bold">
        {{ item.title }}
      </h2>
      <div class="pt-4 mb-4">
        <time class="text-gray-700 text-base">
          {{ item.date | formatDate }}
        </time>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="mb-20" v-html="item.body"></div>
      <base-button name="Back to Information list" link="/information/" />
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'InformationDetailPage',
  async asyncData({
    $config,
    params,
    error,
  }: {
    $config: any
    params: any
    error: any
  }) {
    try {
      const { data }: { data: any } = await axios.get(
        `${$config.apiUrl}/news/${params.id}`,
        {
          headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
        }
      )
      return {
        item: data,
      }
    } catch (err) {
      error({
        errorCode: 404,
      })
    }
  },
  fetch({ store }: { store: any }) {
    store.commit('menu/resetMenu')
  },
  head(): any {
    return {
      // @ts-ignore
      title: this.item.title,
    }
  },
}
</script>
