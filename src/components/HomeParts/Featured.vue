<template>
<ul class="grid info-box__img">
    <li class="grid__item" v-for="item in items" v-bind:key="item.id">
        <amp-img width="500" height="281" layout="responsive" :src="item.image.url" :alt="item.title">
            <amp-img fallback width="500" height="281" :alt="item.title" :src="item.image.fallback_url">
                <div fallback></div>
            </amp-img>
        </amp-img>
    </li>
</ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'featured',
  resource: 'Featured',
  data: () => ({
    items: {},
    errors: []
  }),

  async created () {
    const url = '/static/data/portfolio.json'

    try {
      const response = await axios.get(url)
      this.items = response.data.featured
    } catch (err) {
      this.errors.push(err)
    }
  }
}
</script>
