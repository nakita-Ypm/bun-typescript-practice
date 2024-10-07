import { expect, test } from 'bun:test'
import { Karabiner } from '.'
import { expected_en_jp_toggle, expected_mandatory_keymap } from './data'

// enJpToggle
test('enJpToggle', () => {
  const manipulators = [
    Karabiner.toggle('ja', 'right_command', 'japanese_eisuu', ['any']),
    Karabiner.toggle('en', 'right_command', 'japanese_kana', ['any']),
  ]

  const result = {
    title: 'Change the right command key to toggle between alphanumeric and kana',
    rules: [
      {
        description: 'Kana Eisuu Toggle right_command',
        manipulators: manipulators,
      },
    ],
  }

  const expected = expected_en_jp_toggle

  expect(result).toEqual(expected)
})

//    修飾キー
const mandatory = [
  ['command'],
  ['command', 'shift'],
  ['control'],
  ['control', 'shift'],
  ['option'],
  ['option', 'shift'],
]

const programmer_dvorak = [
  ['semicolon', 'comma', 'period', 'p', 'y', 'f', 'g', 'c', 'r', 'l'],
  ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
  ['quote', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
]

const qwerty = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'quote'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash'],
]

test('mandatoryKeymap', () => {
  const keymap = Karabiner.generateMandatoryKeymap(programmer_dvorak, qwerty, mandatory)
  const result = {
    title: 'Programmer Dvorak Qwerty',
    rules: [
      {
        description: 'Programmer Dvorak Qwerty',
        manipulators: keymap,
      },
    ],
  }

  const expected = expected_mandatory_keymap

  expect(result).toEqual(expected)
})
