<template>
    <section class="page" :class="{ 'blog--reading': this.post }">
        <div class="main-content">
            <div class="row">
                <div class="container">
                    <h1>Blog<em>.</em></h1>
                    <blog-feed :filters="filters" />
                    <blog-post :post="post" />
                </div>
            </div>
        </div>
    </section>
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
