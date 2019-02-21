<template>
  <div class="container">
    <div class="main-container">
      <div class="wrapper">
        <button @click="show = !show">
          Toggle
        </button>
        <transition name="fade">
          <p
            class="text"
            v-if="show">hello</p>
        </transition>
      </div>
      <div class="wrapper">
        <button @click="showSlide = !showSlide">
          Toggle render
        </button>
        <transition name="slide-fade">
          <p v-if="showSlide">hello</p>
        </transition>
      </div>
      <div class="wrapper">
        <button @click="toggleShow = !toggleShow">Toggle show</button>
        <transition name="bounce">
          <p v-if="toggleShow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
      </div>
      <div class="wrapper">
        <div>
          <button @click="jsAnimate = !jsAnimate">
            Toggle
          </button>
        </div>

        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          :css="false"
        >
          <p
            class="content"
            v-if="jsAnimate">
            Demo
          </p>
        </transition>
      </div>
      <div
        class="wrapper"
        style="background-color: beige; height: 200px;overflow: auto;">
        <div style="height: 500px"/>
        <button @click="handleClick">Sample</button>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'Index',
  data () {
    return {
      show: true,
      showSlide: true,
      toggleShow: true,
      jsAnimate: true
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '+=0.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    },
    handleClick () {
      Velocity(document.activeElement, 'scroll')
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
