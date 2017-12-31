import Vue from 'vue'
import TechFault from '@/components/TechFault'

describe('TechFault.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TechFault)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App')
  })
})
