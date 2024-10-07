export class Karabiner {
  static karabinerDescription(title: string, description: string, result: string[]) {
    return {
      title: title,
      rules: [
        {
          description: description,
          manipulators: result,
        },
      ],
    }
  }

  static mandatoryKeymap(fromKey: string, toKey: string, mandatory: string[]) {
    return {
      type: 'basic',
      from: {
        key_code: fromKey,
        modifiers: {
          mandatory: mandatory,
        },
      },
      to: [
        {
          key_code: toKey,
          modifiers: mandatory,
        },
      ],
    }
  }

  static jpMode(fromKey: string, toKey: string) {
    return {
      type: 'basic',
      from: {
        key_code: fromKey,
      },
      to: [
        {
          key_code: toKey,
        },
      ],
      conditions: [
        {
          type: 'input_source_if',
          input_sources: [
            {
              language: 'ja',
            },
          ],
        },
      ],
    }
  }

  static toggle(lan: string, fromKey: string, toKey: string, opt: string[]) {
    return {
      type: 'basic',
      conditions: [
        {
          input_sources: [
            {
              language: lan,
            },
          ],
          type: 'input_source_if',
        },
      ],
      from: {
        key_code: fromKey,
        modifiers: {
          optional: opt,
        },
      },
      to: [
        {
          key_code: toKey,
        },
      ],
    }
  }
}
