import Vue from 'vue'
import Blog from '@/components/Blog'

describe('Blog.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Blog)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App')
  })
})
