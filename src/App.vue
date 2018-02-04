<template>
  <div id="app">
      <nav class="nav">
          <ul class="nav__menu toggle-sidebars">
              <li class="nav__menu__item">
                  <router-link class="site-header__logo display" :to="{ name: 'Home' }" exact active-class="site-header__logo">
                      <span class="srt">Jamie De Rycke - Web Developer, North Wales</span>
                      <span class="site-header__logo__dot font-effect-wallpaper"></span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'About' }" exact active-class="nav__menu__link--active">
                      <span class="nav__menu__icon nav__menu__icon--about"></span>
                      <span class="nav__menu__text">About</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Work' }" exact active-class="nav__menu__link--active">
                      <span class="nav__menu__icon nav__menu__icon--work"></span>
                      <span class="nav__menu__text">Work</span>
                  </router-link>
              </li>
              <li class="nav__menu__item">
                  <router-link class="nav__menu__link" :to="{ name: 'Blog' }" active-class="nav__menu__link--active">
                      <span class="nav__menu__icon nav__menu__icon--blog"></span>
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
