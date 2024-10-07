import { expect, test } from 'bun:test'
import { Karabiner } from '.'

// enJpToggle
test('enJpToggle', () => {
  const manipulators = [
    Karabiner.toggle('ja', 'right_command', 'japanese_eisuu', ['any']),
    Karabiner.toggle('en', 'right_command', 'japanese_kana', ['any']),
  ]
  const expected = [
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
        key_code: 'right_command',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'japanese_eisuu',
        },
      ],
    },
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
        key_code: 'right_command',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'japanese_kana',
        },
      ],
    },
  ]

  expect(manipulators).toEqual(expected)

  const result = {
    title: 'Change the right command key to toggle between alphanumeric and kana',
    rules: [
      {
        description: 'Kana Eisuu Toggle right_command',
        manipulators: manipulators,
      },
    ],
  }

  const expected_karabiner = {
    title: 'Change the right command key to toggle between alphanumeric and kana',
    rules: [
      {
        description: 'Kana Eisuu Toggle right_command',
        manipulators: [
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
              key_code: 'right_command',
              modifiers: {
                optional: ['any'],
              },
            },
            to: [
              {
                key_code: 'japanese_eisuu',
              },
            ],
          },
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
              key_code: 'right_command',
              modifiers: {
                optional: ['any'],
              },
            },
            to: [
              {
                key_code: 'japanese_kana',
              },
            ],
          },
        ],
      },
    ],
  }

  expect(result).toEqual(expected_karabiner)
})
