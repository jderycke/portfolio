<template>
    <section class="page page--no-padding">
        <div class="container">
            <div class="info-box height__full">
                <div class="info-box__text">
                    <h1 class="info-box__title">
                        <span class="info-box__line">Hello, my name is</span>
                        <span class="info-box__line info-box__title--large">Jamie De Rycke<em>.</em></span>
                    </h1>
                    <p class="info-box__line info-box__sub-title">I create things with pixels and code.</p>
                </div>
                <ul class="grid info-box__img">
                    <li class="grid__item" v-for="item in items" v-bind:key="item.id">
                        <amp-img width="500" height="281" layout="responsive" :src="item.image.url" :alt="item.title">
                            <amp-img fallback width="500" height="281" :alt="item.title" :src="item.image.fallback_url">
                                <div fallback></div>
                            </amp-img>
                        </amp-img>
                    </li>
                </ul>
                <p class="info-box__quote">If you can dream it, you can do it.<span>Walt Disney</span></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    items: [],
    errors: []
  }),
  created () {
    const url = '/static/data/portfolio.json'

    this.$http.get(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.items = data.featured
      })
      .catch((err) => {
        this.errors.push(err)
      })
  }
}
</script>
