<template>
    <div class="column--flex-wrap post page" v-if="post" >
        <article class="article column--6-col column--3-offset">
            <header class="article__header">
                <h1>{{ title }}</h1>

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

      this.$http.get(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          for (var i = 0; i < data.blog.length; i++) {
            if (data.blog[i].id === postId) {
              this.title = data.blog[i].title
              this.author = data.blog[i].meta.author
              this.content = data.blog[i].content
              this.published = data.blog[i].meta.published
              this.description = data.blog[i].meta.description
              this.image_url = data.blog[i].image.url
              this.fallback_image_url = data.blog[i].image.fallback_url
              this.image_caption = data.blog[i].image.caption
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
