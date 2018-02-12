<template>
      <div class="column--flex-wrap post page" v-if="post" >
          <article class="article column--6-col column--3-offset">
              <header class="article__header">
                  <h1 class="h2">{{ title }}</h1>

                  <ul class="article__meta article__meta--page">
                      <li class="article__meta__item">
                          By
                          <router-link class="post__author"
                              :to="`/blog/author/${kebabify(author)}/`">{{ author }}</router-link>
                      </li>
                      <li class="article__meta__item">
                          <time :datetime="published">{{published | formatDate}}</time>
                      </li>
                  </ul>
              </header>

              <figure v-if="image_url">
                  <amp-img width="500" height="281" layout="responsive" :src="image_url" :alt="image_caption">
                      <amp-img fallback width="500" height="281" :alt="image_caption" :src="fallback_image_url" />
                  </amp-img>
                  <figcaption>{{image_caption}}</figcaption>
              </figure>

              <section class="article__content" v-html="content"></section>

              <footer class="article__footer">
                  <vue-disqus v-if="commentsReady" shortname="vue-blog-demo"
                    :key="post" :identifier="post" :url="`https://vue-blog-demo.netlify.com/read/${post}`"/>
              </footer>
          </article>
      </div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus'
import { kebabify } from '../../helpers'
import db from '../../firebase.js'

export default {
  name: 'blog-post',
  resource: 'BlogPost',
  components: {
    VueDisqus
  },
  props: {
    post: String
  },

  data: () => ({
    title: '',
    author: '',
    content: '',
    published: '',
    description: '',
    image_url: '',
    fallback_image_url: '',
    image_caption: '',
    commentsReady: false
  }),

  watch: {
    post (to, from) {
      if (to === from || !this.post) return

      this.buildPost(to)
    }
  },

  methods: {
    kebabify,
    showComments () {
      setTimeout(() => {
        this.commentsReady = true
      }, 1000)
    },
    buildPost: function (postId) {
      var data = {}

      db.ref('blog').orderByChild('id').startAt(postId).limitToFirst(1).on('child_added', function (snapshot) {
        data = snapshot.val()
      })

      if (data) {
        this.title = data.title
        this.author = data.meta.author
        this.content = data.content
        this.published = data.meta.published
        this.description = data.meta.description
        this.image_url = data.image.url
        this.fallback_image_url = data.image.fallback_url
        this.image_caption = data.image.caption
      }
    }
  },

  beforeMount () {
    if (!this.post) return

    this.buildPost(this.post)
  }
}
</script>
