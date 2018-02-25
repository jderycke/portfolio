<template>
    <div>
        <section class="page" v-bind:class="{ waiting: items && !items.length }">
            <div class="main-content">
                <div class="row">
                    <div class="container">
                        <h1 class="h2">Featured work<em>.</em></h1>
                        <div class="polling__content" v-if="items && items.length">
                            <ul class="grid">
                                <li class="grid__item" v-for="item in items" v-bind:key="item.id">
                                    <a class="grid__item--link" :href="item.url" :title="item.title" target="_blank" data-ga-category="Portfolio" data-ga-action="Click" :data-ga-label="item.title" rel="noopener">
                                        <amp-img width="500" height="281" layout="responsive" :src="item.image.url" :alt="item.title">
                                            <amp-img fallback width="500" height="281" :alt="item.title" :src="item.image.fallback_url">
                                                <div fallback></div>
                                            </amp-img>
                                        </amp-img>
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
                        <div class="polling">
                            <div class="polling__container">
                                <div class="polling__half--up"></div>
                                <div class="polling__half--down"></div>
                                <div class="polling__dot"></div>
                                <div class="polling__dot"></div>
                                <div class="polling__dot"></div>
                                <span class="polling__text">Loading...</span>
                            </div>
                        </div>
                        <div v-if="!items && !items.length">
                            Something has gone wrong
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="separator-section">
            <div class="container separator-section__container">
                <blockquote>
                    <span class="line">Creativity is contagious, pass it on.</span>
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
        this.items = data.portfolio
      })
      .catch((err) => {
        this.errors.push(err)
      })
  }
}
</script>
