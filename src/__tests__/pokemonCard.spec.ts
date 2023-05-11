import PokemonCard from '@/components/PokemonCard.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'

describe('PokemonCard', () => {
  test('should render pokemon object', async () => {
    expect(PokemonCard).toBeTruthy()

    const wrapper = mount(PokemonCard, {
      props: {
        // objet
        // use the interface to define the props
        poke: {
          id: Number, // Pikachu
          title: 'Pikachu',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
          types: ['electric'],
          stats: {
            hp: 35,
            attack: 55,
            defense: 40,
            'special-attack': 50,
            'special-defense': 50,
            speed: 90,
          },
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
