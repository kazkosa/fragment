<template>
  <div
    v-if="readyOK"
    class="relative pt-20 pb-32 flex content-center items-center justify-center z-10"
    :style="`min-height: ${visualHeight}`"
  >
    <div :class="`absolute top-0 w-full h-full bg-center bg-cover ${visual}`">
      <span id="blackOverlay" class="w-full h-full absolute opacity-75"></span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div>
            <h1
              class="font-semibold text-5xl"
              :class="['text-' + color, shadow]"
            >
              {{ title }}
            </h1>
            <p class="mt-4 text-lg" :class="['text-' + color, shadow]">
              {{ message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style="height: 70px; transform: translateZ(0px)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-white fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutVisual',
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    visual: {
      type: String,
      default: 'visual-main',
    },
    height: {
      type: Number,
      default: 75,
    },
    color: {
      type: String,
      default: 'white',
    },
    textShadow: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      readyOK: false,
    }
  },
  computed: {
    shadow() {
      return this.textShadow ? `text-shadow--${this.textShadow}` : ''
    },
    visualHeight() {
      if (process.browser) {
        if (window.innerWidth < 768) {
          return '300px'
        } else {
          return this.height + 'vh'
        }
      } else {
        return this.height + 'vh'
      }
    },
  },
  mounted() {
    this.readyOK = true
  },
}
</script>

<style scoped>
.visual-main {
  background-image: url('~@/assets/img/visual-main.jpg');
}
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
.visual-concept {
  background-image: url('~@/assets/img/visual-concept.jpg');
}
.visual-shop {
  background-image: url('~@/assets/img/visual-shop.jpg');
}
.visual-menu {
  background-image: url('~@/assets/img/visual-menu.jpg');
}
.visual-article {
  background-image: url('~@/assets/img/visual-article.jpg');
}
.visual-information {
  background-image: url('~@/assets/img/visual-information.jpg');
}
.visual-error {
  background-image: url('~@/assets/img/visual-error.jpg');
}
.visual-about {
  background-image: url('~@/assets/img/visual-about.jpg');
}
.text-shadow--white {
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
    1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff, 1px 0 0 #fff;
}
</style>
