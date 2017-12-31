<template>
    <div>
        <section class="page" v-bind:class="{ waiting: items && !items.length && errors && !errors.length }">
            <div class="main-content">
                <div class="row">
                    <div class="container">
                        <h1 class="h2">Featured work<em>.</em></h1>
                        <div class="loading__content" v-if="items && items.length">
                            <ul class="grid">
                                <li class="grid__item" v-for="item in items">
                                    <a class="grid__item--link" :href="item.url" :title="item.title" target="_blank" data-ga-category="Portfolio" data-ga-action="Click" :data-ga-label="item.title" rel="noopener">
                                        <div class="grid__item--image" :style="{ 'background-image': 'url(' + item.image_url + ')' }"></div>
                                        <article class="overlay">
                                            <div class="overlay__content">
                                                <h3 class="overlay__content--title">{{item.title}}</h3>
                                                <span class="overlay__icon" :class="'overlay__icon--' + item.category"></span>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="loading">
                            <div class="loading__container">
                                <div class="loading__half--up"></div>
                                <div class="loading__half--down"></div>
                                <div class="loading__dot"></div>
                                <div class="loading__dot"></div>
                                <div class="loading__dot"></div>
                                <span class="loading__text">loading...</span>
                            </div>
                        </div>
                        <ul v-if="errors && errors.length">
                            <li v-for="error of errors">
                                {{error.message}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="separator-section">
            <div class="container separator-section__container">
                <blockquote>
                    <span class="line">
                        <span class="line__content font-effect-wallpaper">Creativity is contagious, pass it on.</span>
                    </span>
                    <cite>Albert Enstein</cite>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    errors: []
  }),
  created () {
    const url = '/static/data/portfolio.json'

    this.$http.get(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.items = data.items
      })
      .catch((err) => {
        this.errors.push(err)
      })
  }
}
</script>
