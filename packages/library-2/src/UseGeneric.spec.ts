import { expect } from "vitest"
import { mount } from "@vue/test-utils"
import UseGeneric from './UseGeneric.vue'
import { Generic } from 'library-1'

describe('Generic', () => {
    it('Should not be ok', () => {
        const wrapper = mount(UseGeneric)

        expect(wrapper.findAllComponents(Generic)).toBeTruthy()
    })
})