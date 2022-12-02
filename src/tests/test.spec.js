import { assert, describe, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../components/UI/NavBar.vue'


test('test', async () => {
    const page = mount(NavBar)
    expect(page.text()).toContain('This is an about page')

})