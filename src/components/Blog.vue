<template>
    <div :class="{ 'blog--reading': this.post }">
        <section class="page">
            <div class="main-content">
                <div class="row">
                    <div class="container">
                        <h1 class="h2">Blog<em>.</em></h1>
                          <blog-feed :filters="filters" />
                          <blog-post :post="post" />
                    </div>
                </div>
            </div>
        </section>
        <div class="separator-section">
            <div class="container separator-section__container">
                <blockquote>
                    <span class="line font-effect-wallpaper">It is not our abilities that show who we truly are.</span>
                    <span class="line font-effect-wallpaper">It is our choices.</span>
                    <cite>Professor Albus Percival Wulfric Brian Dumbledore</cite>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import BlogFeed from './BlogParts/BlogFeed'
import BlogPost from './BlogParts/BlogPost'

export default {
  name: 'blog',
  components: {
    BlogFeed,
    BlogPost
  },
  resource: 'Blog',
  props: {
    post: String,
    author: String
  },

  data () {
    return {
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },

  computed: {
    content () {
      return {
        title: this.title,
        labels: this.labels
      }
    },
    filters () {
      let filters = {}

      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  }
}
</script>
