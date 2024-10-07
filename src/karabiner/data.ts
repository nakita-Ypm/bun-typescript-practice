export const qwerty_us = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]

// QWERTY
export const qwerty = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]

// Dvorak
export const programmer_dvorak = [
  [';', ',', '.', 'p', 'y', 'f', 'g', 'c', 'r', 'l'],
  ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
  ["'", 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
]

// 大西
export const onishi = [
  ['q', 'l', 'u', '-', '.', 'f', 'w', 'r', 'y', 'p'],
  ['e', 'i', 'a', 'o', ',', 'k', 't', 'n', 's', 'h'],
  ['z', 'x', 'c', 'v', '/', 'g', 'd', 'm', 'j', 'b'],
]

// Eucalyn
export const eucalyn = [
  ['q', 'w', ',', '.', "'", 'm', 'r', 'd', 'y', 'p'],
  ['a', 'o', 'e', 'i', 'u', 'g', 't', 'k', 's', 'n'],
  ['z', 'x', 'c', 'v', 'f', 'b', 'h', 'j', 'l', '/'],
]

// Eucalyn改
export const eucalyn_kai = [
  [';', "'", "'", 'p', 'q', 'y', 'g', 'd', 'm', 'f'],
  ['a', 'o', 'e', 'i', 'u', 'b', 'n', 't', 'r', 's'],
  ['z', 'x', 'c', 'v', 'w', 'h', 'j', 'k', 'l', '/'],
]

// ASTARTE
export const astarte = [
  ['q', 'p', 'u', 'y', ',', 'j', 'd', 'h', 'g', 'w'],
  ['i', 'o', 'e', 'a', '.', 'k', 't', 'n', 's', 'r'],
  ['z', 'x', '-', 'c', '/', 'm', 'l', 'f', 'b', 'v'],
]

export const title = 'Change the right command key to toggle between alphanumeric and kana'
export const description = 'Kana Eisuu Toggle right_command'

// japanese_eisuu
const ja = {
  lan: 'ja',
  from_key: 'right_command',
  to_key: 'japanese_eisuu',
  opt: ['any'],
}

// japanese_kana
const en = {
  lan: 'en',
  from_key: 'right_command',
  to_key: 'japanese_kana',
  opt: ['any'],
}

// toggles
const toggles = [ja, en]
