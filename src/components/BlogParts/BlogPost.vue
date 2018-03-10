<template>
    <div class="column--flex-wrap post page" v-if="post" >
        <article class="article column--8-col column--2-offset">
            <header class="article__header">
                <h2>{{ title }}</h2>

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
import axios from 'axios'
import { kebabify } from '../../helpers'

export default {
  name: 'blog-post',
  resource: 'BlogPost',
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
    commentsReady: false,
    errors: []
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
      const url = '/static/data/portfolio.json'

      axios.get(url)
        .then(response => {
          for (var i = 0; i < response.data.blog.length; i++) {
            if (response.data.blog[i].id === postId) {
              var item = response.data.blog[i]
              this.title = item.title
              this.author = item.meta.author
              this.content = item.content
              this.published = item.meta.published
              this.description = item.meta.description
              this.image_url = item.image.url
              this.fallback_image_url = item.image.fallback_url
              this.image_caption = item.image.caption
            }
          }
        })
        .catch((err) => {
          this.errors.push(err)
        })
    }
  },

  beforeMount () {
    if (!this.post) return

    this.buildPost(this.post)
  }
}
</script>
