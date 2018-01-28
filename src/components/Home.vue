<template>
    <section id="home" class="page page--no-padding">
        <div class="column--flex-wrap">
            <div class="column column--10-col no-gutters border__right">
                <div class="row row__home">
                    <div class="container container__custom">
                        <div class="column--flex-wrap height__full">
                            <div class="column column--8-col border__right">
                                <div class="display--block-mobile height__full mobile__padding">
                                    <div class="align--middle display--block-cell-mobile">
                                        <h1 class="info-box__title">
                                            <span class="info-box__line">
                                                <span class="info-box__line__content">Hello, my name is</span>
                                            </span>
                                            <span class="info-box__line">
                                                <span class="info-box__title--large info-box__line__content">Jamie De Rycke<em>.</em></span>
                                            </span>
                                        </h1>
                                        <p class="info-box__sub-title">I create things with pixels and code.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column column--4-col background__image">
                                <div class="display--table height__full">
                                    <div class="align--bottom display--table-cell">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row separator-section">
                    <div class="container separator-section__container">
                        <blockquote>
                            <span class="line">
                                <span class="line__content font-effect-wallpaper">If you can dream it, you can do it.</span>
                            </span>
                            <cite>Walt Disney</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div class="column column--2-col no-gutters height__screen">
                <div class="row height__half box__padding">
                    <div class="column">

                    </div>
                </div>
                <div class="row background__image height__half border__top">
                    <div class="column">
                        <div class="display--table height__full">
                            <div class="align--bottom display--table-cell box__padding">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data: () => ({
    items: [],
    work: [],
    errors: []
  }),
  created () {
    const url = 'http://blog.jamiederycke.me.uk/feed/json'

    this.$http.jsonp(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.items = data
      })
      .catch((err) => {
        this.errors.push(err)
      })
  }
}
</script>
