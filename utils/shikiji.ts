import type { HighlighterCore } from 'shikiji-core'
import { getHighlighterCore } from 'shikiji-core'
import getWasmInlined from 'shikiji/wasm'

import langTs from 'shikiji/langs/typescript.mjs'
import themeBlack from 'theme-vitesse/themes/vitesse-black.json'
import themeLight from 'theme-vitesse/themes/vitesse-light.json'

let highlighter: Promise<HighlighterCore> | undefined

export async function getShikiji() {
  if (highlighter)
    return highlighter

  const darkColors = (themeBlack as any).colors as Record<string, string>
  darkColors['editor.background'] = '#00000000'
  darkColors['editor.lineHighlightBackground'] = '#00000000'
  themeLight.name = 'vitesse-light'
  themeBlack.name = 'vitesse-black'

  highlighter = getHighlighterCore({
    langs: [langTs],
    themes: [themeLight, themeBlack],
    loadWasm: getWasmInlined,
  })

  return highlighter
}
