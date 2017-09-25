<template>
    <div>
        <section class="page" v-bind:class="{ waiting: items && !items.length && errors && !errors.length }">
            <div class="main-content">
                <div class="row">
                    <div class="container">
                        <h1 class="h2">Blog<em>.</em></h1>
                        <div class="loading__content" v-if="items && items.length">
                            <div class="grid">
                                <article class="grid__item article" v-for="item in items" itemscope="" itemtype="http://schema.org/Article">
                                    <a class="grid__item--link" :href="item.permalink" :title="item.title" data-ga-category="Blog links" data-ga-action="Click" :data-ga-label="item.title">
                                        <img class="entry__image" v-if="item.thumbnail" :src="item.thumbnail.split(' ')[0]" :alt="item.title" />
                                        <div :class="{'align--center': !item.thumbnail}">
                                            <div class="grid__item__content">
                                                <header class="article__header">
                                                    <h1 class="article__header__title" v-html="item.title"></h1>
                                                    <ul class="article__meta">
                                                        <li class="article__meta__item">
                                                            <span itemprop="author" itemscope itemptype="http://schema.org/Person">by {{item.author}}</span>
                                                        </li>
                                                        <li class="article__meta__item">
                                                            <time :datetime="item.date" itemprop="datePublished">{{item.date | formatDate}}</time>
                                                        </li>
                                                    </ul>
                                                </header>
                                                <div class="article__content entry">
                                                    <p v-html="item.excerpt"></p>
                                                </div>
                                                <footer class="article__footer cf">
                                                    <div class="article__footer__content">
                                                        Read more
                                                    </div>
                                                </footer>
                                            </div>
                                        </div>
                                        <div class="overlay">
                                            <div class="overlay__content">
                                                <h2 class="overlay__content--title">Read Blog post</h2>
                                                <span class="fa fa-comments"></span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div class="column column--12-col no-gutters text--right margin--top">
                                <a href="http://blog.jamiederycke.me.uk" class="btn btn--default" title="See more blog posts" data-ga-category="See More" data-ga-action="Click" data-ga-label="Blog">
                                    See more
                                    <span class="fa fa-chevron-right"></span>
                                </a>
                            </div>
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
        <div class="separator-section picture">
            <div class="container">
                <blockquote>
                    <span class="line">
                        <span class="line__content font-effect-wallpaper">It is not our abilities that show what we truly are.</span>
                    </span>
                    <span class="line">
                        <span class="line__content font-effect-wallpaper">It is our choices.</span>
                    </span>
                    <cite class="line">
                        <span class="line__content">Professor Albus Percival Wulfric Brian Dumbledore</span>
                    </cite>
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
    const url = 'http://blog.jamiederycke.me.uk/feed/json'

    this.$http.jsonp(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.items = data
      })
      .catch((err) => {
        this.errors.push(err)
      })
  }
}
</script>

<style scoped>

</style>
