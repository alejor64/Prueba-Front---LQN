import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import Characters from '../../../components/Characters'
import { Charactercontext } from '../../../components/CharacterContext'
import {people} from '../../../helpers/helperTest'

describe('Pruebas en el componente <Characters />', () => {
    
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
    })

    test('Debe renderizar el componente <Characters/> con Data', () => {
        const data = {
            loading: false,
            error: false,
            data: {
                allPeople: {people}
            }
        }
        const wrapper = mount(
            <Charactercontext.Provider value={data}>
                <Characters />
            </Charactercontext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').exists()).toBe(true)
        expect(wrapper.find('li').first().text()).toBe('Luke SkywalkerDetails')
        expect(wrapper.find('li').first().find('button').exists()).toBe(true)
    })


    test('Debe renderizar el componente <Characters/> sin DATA', () => {
        const data = {
            loading: true,
            error: false,
            data: {}
        }
        const wrapper = mount(
            <Charactercontext.Provider value={data}>
                <Characters />
            </Charactercontext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').exists()).toBe(true)
    })
    
})
