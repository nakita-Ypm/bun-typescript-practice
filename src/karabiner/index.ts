const qwerty_us = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]

// QWERTY
const qwerty = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]

// Dvorak
const programmer_dvorak = [
    [';', ',', '.', 'p', 'y', 'f', 'g', 'c', 'r', 'l'],
    ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
    ['\'', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
]

// 大西
const onishi = [
    ['q', 'l', 'u', '-', '.', 'f', 'w', 'r', 'y', 'p'],
    ['e', 'i', 'a', 'o', ',', 'k', 't', 'n', 's', 'h'],
    ['z', 'x', 'c', 'v', '/', 'g', 'd', 'm', 'j', 'b'],
]

// Eucalyn
const eucalyn = [
    ['q', 'w', ',', '.', '\'', 'm', 'r', 'd', 'y', 'p'],
    ['a', 'o', 'e', 'i', 'u', 'g', 't', 'k', 's', 'n'],
    ['z', 'x', 'c', 'v', 'f', 'b', 'h', 'j', 'l', '/'],
]

// Eucalyn改
const eucalyn_kai = [
    [';', '\'', '\'', 'p', 'q', 'y', 'g', 'd', 'm', 'f'],
    ['a', 'o', 'e', 'i', 'u', 'b', 'n', 't', 'r', 's'],
    ['z', 'x', 'c', 'v', 'w', 'h', 'j', 'k', 'l', '/'],
]

// ASTARTE
const astarte = [
    ['q', 'p', 'u', 'y', ',', 'j', 'd', 'h', 'g', 'w'],
    ['i', 'o', 'e', 'a', '.', 'k', 't', 'n', 's', 'r'],
    ['z', 'x', '-', 'c', '/', 'm', 'l', 'f', 'b', 'v'],
]

export class Karabiner {
    static karabinerDescription(title: string, description: string, result: any[]) {
        return {
            title: title,
            rules: [
                {
                    description: description,
                    manipulators: result
                }
            ]
        };
    }

    static mandatoryKeymap(fromKey: string, toKey: string, mandatory: string[]) {
        return {
            type: "basic",
            from: {
                key_code: fromKey,
                modifiers: {
                    mandatory: mandatory,
                }
            },
            to: [
                {
                    key_code: toKey,
                    modifiers: mandatory,
                }
            ]
        };
    }

    static jpMode(fromKey: string, toKey: string): any {
        return {
            type: "basic",
            from: {
                key_code: fromKey
            },
            to: [
                {
                    key_code: toKey
                }
            ],
            conditions: [
                {
                    type: "input_source_if",
                    input_sources: [
                        {
                            language: "ja"
                        }
                    ]
                }
            ]
        };
    }

    static toggle(lan: string, fromKey: string, toKey: string, opt: string[]) {
        return {
            type: "basic",
            conditions: [
                {
                    input_sources: [
                        {
                            language: lan
                        }
                    ],
                    type: "input_source_if"
                }
            ],
            from: {
                key_code: fromKey,
                modifiers: {
                    optional: opt
                }
            },
            to: [
                {
                    key_code: toKey
                }
            ]
        };
    }
}