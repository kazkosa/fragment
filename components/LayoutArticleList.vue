<template>
  <div :class="itemClass">
    <!-- <div :class="blockClass"> -->
    <nuxt-link
      :to="`/articles/${id}`"
      class="text-white xflex xmd:block inline-block xmd:py-0 py-0 xpy-5 xpx-5 px-0 xmd:px-0 w-full"
      :class="[blockClass, isRow ? 'isRow' : '']"
    >
      <div class="imgBox">
        <img v-if="image" :src="imageUrl" :alt="title" :class="imageClass" />
        <img
          v-else
          src="~/assets/img/dummy.jpg"
          :alt="name"
          :class="imageClass"
        />
      </div>
      <div :class="[dataClass, 'c-article-body']">
        <div class="font-bold text-xl mb-2 text-gray-600">{{ title }}</div>
        <p v-if="flagBody" class="c-article-body__content text-base mb-2">
          {{ body }}
        </p>
        <!-- <p class="text-gray-700 text-base mb-4">{{ price }}円（税込）</p> -->
      </div>
      <!-- </div> -->
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LayoutArticleList',
  props: {
    itemClass: {
      type: String,
      default: 'w-full mb-10 shadow-lg',
    },
    blockClass: {
      type: String,
      default:
        'md:w-full bg-gray-200 flex flex-wrap justify-between md:px-4 md:py-4',
    },
    imageClass: {
      type: String,
      default: 'md:w-2/5',
    },
    dataClass: {
      type: String,
      default: 'w-7/12 px-6 py-4 mb:px-0 mb:px-0',
    },
    flagBody: {
      type: Boolean,
      default: true,
    },
    image: {
      type: Object,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isRow: {
      type: Boolean,
      default: false,
    },
    body: {
      type: String,
      required: true,
    },
    // price: {
    //   type: Number,
    //   required: true,
    // },
  },
}
</script>

<style lang="scss" scoped>
.imgBox {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  // height: 135px;
  @media screen and (min-width: 768px) {
    height: 135px;
    width: auto;
  }
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
  // &.isRow {
  //   width: 50%;
  // }
}
.c-article-body {
  // width: 50%;
  // @media screen and (min-width: 768px) {
  width: auto;
  // }
  &__content {
    display: none;
  }
}
</style>
