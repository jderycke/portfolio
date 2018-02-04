<template>
    <div>
        <section class="page" v-bind:class="{ waiting: items && !items.length }">
            <div class="main-content">
                <div class="row">
                    <div class="container">
                        <h1 class="h2">Featured work<em>.</em></h1>
                        <div class="polling__content" v-if="items && items.length">
                            <ul class="grid">
                                <li class="grid__item" v-for="item in items">
                                    <a class="grid__item--link" :href="item.url" :title="item.title" target="_blank" data-ga-category="Portfolio" data-ga-action="Click" :data-ga-label="item.title" rel="noopener">
                                        <clazy-load :src="item.image_url">
                                            <img :src="item.image_url" :alt="item.title" slot="image" />
                                            <div class="preloader" slot="placeholder">
                                                <img src="/static/img/blank.png" alt="" />
                                            </div>
                                        </clazy-load>
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
import db from '../firebase.js'

export default {
  firebase: {
    items: db.ref('items').limitToLast(9)
  }
}
</script>
