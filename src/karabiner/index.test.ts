import { expect, test } from 'bun:test'
import { Karabiner } from '.'

const toggles = [
  { lan: 'en', from_key: 'caps_lock', to_key: 'escape', opt: ['any'] },
  { lan: 'ja', from_key: 'caps_lock', to_key: 'kana', opt: ['any'] },
]

test('enJpToggle', () => {
  const result = Karabiner.enJpToggle(toggles)
  const expected = [
    {
      type: 'basic',
      conditions: [
        {
          input_sources: [
            {
              language: 'en',
            },
          ],
          type: 'input_source_if',
        },
      ],
      from: {
        key_code: 'caps_lock',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'escape',
        },
      ],
    },
    {
      type: 'basic',
      conditions: [
        {
          input_sources: [
            {
              language: 'ja',
            },
          ],
          type: 'input_source_if',
        },
      ],
      from: {
        key_code: 'caps_lock',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'kana',
        },
      ],
    },
  ]
  expect(result).toEqual(expected)
})

test('enJpToggle json', () => {
  const input = Karabiner.enJpToggle(toggles)
  const expected = [
    {
      type: 'basic',
      conditions: [
        {
          input_sources: [
            {
              language: 'en',
            },
          ],
          type: 'input_source_if',
        },
      ],
      from: {
        key_code: 'caps_lock',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'escape',
        },
      ],
    },
    {
      type: 'basic',
      conditions: [
        {
          input_sources: [
            {
              language: 'ja',
            },
          ],
          type: 'input_source_if',
        },
      ],
      from: {
        key_code: 'caps_lock',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'kana',
        },
      ],
    },
  ]

  const result = JSON.stringify(input)
  console.log(result)
  expect(result).toEqual(JSON.stringify(expected))
})
