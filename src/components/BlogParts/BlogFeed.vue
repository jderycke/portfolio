<template>
    <div class="polling__content" v-if="items && items.length">
        <div class="grid">
            <article v-for="item in items" class="grid__item article">
                <router-link class="grid__item--link"
                    :to="`/blog/post/${item.id}/`"
                    @click.native="scrollTo(0, 220, 560)">

                    <figure v-if="item.image.url">
                        <amp-img width="500" height="281" layout="responsive" :src="item.image.url" :alt="item.image.caption">
                            <amp-img fallback width="500" height="281" :alt="item.image.caption" :src="item.image.fallback_url" />
                        </amp-img>
                    </figure>

                    <div :class="{'align--middle': !item.image.url}">
                        <div class="grid__item__content">
                            <header class="article__header">
                                <h1 class="article__header__title">{{item.title}}</h1>
                                <ul class="article__meta">
                                    <li class="article__meta__item">
                                        <span>by {{item.meta.author}}</span>
                                    </li>
                                    <li class="article__meta__item">
                                        <time :datetime="item.meta.published">{{item.meta.published | formatDate}}</time>
                                    </li>
                                </ul>
                            </header>

                            <div class="article__content">
                            </div>

                            <footer class="article__footer">
                                <div class="article__footer__content">
                                </div>
                            </footer>
                        </div>
                    </div>
                    <div class="overlay">
                        <div class="overlay__content">
                            <h2 class="overlay__content--title">Read blog post</h2>
                            <span class="overlay__icon overlay__icon--blog"></span>
                        </div>
                    </div>
                </router-link>
            </article>
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
</template>

<script>
import { scrollTo } from '../../helpers'
import db from '../../firebase.js'

export default {
  name: 'blog-feed',
  resource: 'BlogFeed',

  props: {
    filters: {
      type: Object,
      default: () => {}
    }
  },

  firebase: {
    items: db.ref('blog')
  },

  computed: {
    reading () { return this.filters.post }
  },

  methods: {
    scrollTo
  }
}
</script>
