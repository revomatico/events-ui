import Vue from 'vue'
import App from '@/components/events.vue'

function mountComponentWithProps(Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({
        propsData
    }).$mount()

    return vm.$el
}

describe('ALLmatches', () => {
    it('should be empty', () => {
        const headingData = mountComponentWithProps(App, { matches: {} })
        const titleData = headingData.textContent

        expect(titleData).toEqual('No data.')
    })
})