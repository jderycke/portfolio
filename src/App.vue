<template>
  <div id="app">
      <nav class="nav">
          <ul class="nav__menu toggle-sidebars">

              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'About' }" active-class="nav__menu__link--active">
                      <span class="nav__menu__icon genericon person"></span>
                      <span class="nav__menu__text">About</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Work' }" active-class="nav__menu__link--active">
                      <span class="nav__menu__icon genericon pencil"></span>
                      <span class="nav__menu__text">Work</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Blog' }" active-class="nav__menu__link--active">
                      <span class="nav__menu__icon genericon notes"></span>
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
