import { expect } from "vitest"
import { mount } from "@vue/test-utils"
import NoUseGeneric from './NoUseGeneric.vue'
import { NoGeneric } from 'library-1'

describe('No Generic', () => {
    it('Should be ok', () => {
        const wrapper = mount(NoUseGeneric)

        expect(wrapper.findAllComponents(NoGeneric)).toBeTruthy()
    })
})