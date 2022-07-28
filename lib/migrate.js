const glob = require('glob')
const fs = require('fs')
const fse = require('fs-extra')

const getFiles = () => {
  const promise = new Promise((promise) => {
    glob('content/**/*.html.haml', {}, (err, files) => {
      promise(files)
    })
  })
  return promise
}

const migrate = async () => {
  const files = await getFiles()

  //   console.log(files)

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8')
    const newFilename = file
      .replace('.html.haml', '.md')
      .replace('source', 'migrated')

    const tokens = content.split('\n')
    const output = []
    let i = 0

    while (i < tokens.length) {
      console.log(tokens[i].trim())
      if (tokens[i].trim() === ':ruby') {
        console.log('codeblock')
        const codeBlock = []
        i++
        i++
        while (tokens[i].trim() !== 'CODE') {
          codeBlock.push(tokens[i].replace('    ', ''))
          i++
        }
        i++
        if (tokens[i].trim() === '=code(code)') {
          output.push('```js\n' + codeBlock.join('\n') + '\n```\n')
        } else if (tokens[i].trim() === '=code(code, :css)') {
          output.push('```css\n' + codeBlock.join('\n') + '\n```\n')
        } else if (tokens[i].trim() === '=code(code, :ruby)') {
          output.push('```ruby\n' + codeBlock.join('\n') + '\n```\n')
        } else if (tokens[i].trim() === '=code(code, :js)') {
          output.push('```js\n' + codeBlock.join('\n') + '\n```\n')
        } else if (tokens[i].trim() === '=code(code, :html)') {
          output.push('```html\n' + codeBlock.join('\n') + '\n```\n')
        } else {
          output.push('```js\n' + codeBlock.join('\n') + '\n```\n')
        }
      }
      output.push(tokens[i].trim())
      i++
    }
    const codeContent = output.join('\n')
    const cleanContent = codeContent
      .replaceAll(':markdown', '')
      .replaceAll('%section.exercise', '')
      .replaceAll('%section', '')
      .replaceAll('=code(code, :css)', '')
      .replaceAll('=code(code, :ruby)', '')
      .replaceAll('=code(code, :js)', '')
      .replaceAll('=code(code, :html)', '')
      .replaceAll('=code(code)', '')
    fse.outputFileSync(newFilename, cleanContent)
  })
}

migrate()
