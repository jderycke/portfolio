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
                <featured />
                <quote />
            </div>
        </div>
    </section>
</template>

<script>
import Featured from './HomeParts/Featured'
import Quote from './HomeParts/Quote'

export default {
  name: 'home',
  components: {
    Featured,
    Quote
  }
}
</script>
