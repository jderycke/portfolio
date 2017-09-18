<template>
    <div>
        <section id="work" class="page work" v-bind:class="{ waiting: items && !items.length && errors && !errors.length }">
            <div class="main-content">
                <div class="row">
                    <div class="container">
                        <h2>Featured work<em>.</em></h2>
                        <div class="loading__content" v-if="items && items.length">
                            <ul class="grid">
                                <li class="grid__item" v-for="item in items">
                                    <a class="grid__item--link" :href="item.url" :title="item.title" target="_blank" data-ga-category="Portfolio" data-ga-action="Click" :data-ga-label="item.title">
                                        <div class="grid__item--image" :style="{ 'background-image': 'url(' + item.image_url + ')' }"></div>
                                        <article class="overlay">
                                            <div class="overlay__content">
                                                <h3 class="overlay__content--title">{{item.title}}</h3>
                                                <span class="genericon" :class="item.category"></span>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                            </ul>
                            <div class="column column--12-col no-gutters text--right margin--top">
                                <a class="btn btn--social btn--flickr" href="http://www.flickr.com/photos/jamiederycke/" title="See more at Flickr" target="_blank" data-ga-category="See More" data-ga-action="Click" data-ga-label="Flickr">
                                    <span class="genericon social--flickr"></span>
                                </a>
                                <a class="btn btn--social btn--fivehundred" href="http://500px.com/jamiederycke" title="See more at 500px" target="_blank" data-ga-category="See More" data-ga-action="Click" data-ga-label="500px">
                                    <span class="genericon social--fivehundred"></span>
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
        <div class="seperator-section picture">
            <div class="container">
                <blockquote>
                    <span class="line">
                        <span class="line__content">Creativity is contagious, pass it on.</span>
                    </span>
                    <cite class="line">
                        <span class="line__content">Albert Enstein</span>
                    </cite>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    items: [],
    errors: []
  }),
  created () {
    const url = '/static/data/portfolio.json'

    axios.get(url)
      .then(response => {
        this.items = response.data.items
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>

</style>
