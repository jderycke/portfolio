<template>
  <div id="app">
      <nav class="nav">
          <ul class="nav__menu toggle-sidebars">
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Home' }" exact active-class="nav__menu__link--active">
                      <span class="nav__menu__icon fa fa-home"></span>
                      <span class="nav__menu__text">Home</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'About' }" exact active-class="nav__menu__link--active">
                      <span class="nav__menu__icon fa fa-user"></span>
                      <span class="nav__menu__text">About</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Work' }" exact active-class="nav__menu__link--active">
                      <span class="nav__menu__icon fa fa-pencil"></span>
                      <span class="nav__menu__text">Work</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Blog' }" exact active-class="nav__menu__link--active">
                      <span class="nav__menu__icon fa fa-comments"></span>
                      <span class="nav__menu__text">Blog</span>
                  </router-link>
              </li>
          </ul>
      </nav>
      <main class="wrapper">
          <transition name="fade" mode="out-in">
              <router-view></router-view>
          </transition>
      </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import 'src/assets/scss/style';
</style>
