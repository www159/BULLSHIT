const bullshit = require('@lwys-pkg-releaser/node-bullshit-generator')
const fs = require('fs')
const day = require('dayjs')
const titleList = require('./title.json').title

let title = titleList[Math.floor(Math.random() * titleList.length)]

let article = new bullshit()
                .生成(title, 600)
                .split('\n')
                .map(line => line.trim())
                .join('\n\n')

console.log(title, article)

article = 
`
# 从废话中学习

> by \`@lwys-pkg-releaser/node-bullshit-generator\` 生成，非商业用途。

## ${title}

\`${day().format('YYYY-MM-DD')}\`

${article}
`.trim()

fs.writeFileSync('./README.md', article, 'utf-8')