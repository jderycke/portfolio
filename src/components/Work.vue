<template>
    <section class="page" v-bind:class="{ waiting: items && !items.length }">
        <div class="main-content">
            <div class="row">
                <div class="container">
                    <h1>Featured work<em>.</em></h1>
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
                                            <h1 class="overlay__content--title">{{item.title}}</h1>
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
</template>

<script>
import axios from 'axios'

export default {
  name: 'work',
  data: () => ({
    items: [],
    errors: []
  }),
  async created () {
    const url = '/static/data/portfolio.json'

    try {
      const response = await axios.get(url)
      this.items = response.data.portfolio
    } catch (err) {
      this.errors.push(err)
    }
  }
}
</script>
