<template>
  <blockquote>
      <span class="line">{{quote.line1}}</span>
      <span class="line" v-if="quote.line2">{{quote.line2}}</span>
      <footer>
          <cite>{{quote.cite}}</cite>
      </footer>
  </blockquote>
</template>

<script>
import axios from 'axios'

export default {
  name: 'quote',
  resource: 'Quote',
  data: () => ({
    quote: {},
    errors: []
  }),

  async created () {
    const url = '/static/data/portfolio.json'

    try {
      const response = await axios.get(url)
      this.quotes = response.data.quotes
      this.quote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)]
    } catch (err) {
      this.errors.push(err)
    }
  }
}
</script>
