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
export default {
  name: 'quote',
  resource: 'Quote',
  data: () => ({
    quote: {},
    errors: []
  }),

  created () {
    const url = '/static/data/portfolio.json'

    this.$http.get(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.quotes = data.quotes
        this.quote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
      })
      .catch((err) => {
        this.errors.push(err)
      })
  }
}
</script>
