import Vue from 'vue'
import Work from '@/components/Work'

describe('Work.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Work)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App')
  })
})
