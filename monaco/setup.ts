import * as monaco from 'monaco-editor-core'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import editorWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker'

/* eslint-disable no-restricted-globals */
/* eslint-disable new-cap */
export function initMonaco() {
  self.MonacoEnvironment = {
    async getWorker(_: any, label: string) {
      switch (label) {
        case 'typescript':
        case 'javascript':
          return new tsWorker()
        default:
          return new editorWorker()
      }
    },
  }

  if (!monaco.languages.getLanguages().find(x => x.id === 'typescript'))
    monaco.languages.register({ id: 'typescript', extensions: ['.ts'], aliases: ['TypeScript', 'ts', 'TS', 'Typescript', 'typescript'] })

  monaco.languages.onLanguage('typescript', () => {
    console.log('typescript language is ready')
  })
}
