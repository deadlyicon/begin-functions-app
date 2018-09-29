let begin = require('@architect/functions')

// TODO change defaultHTML
let defaultHTML = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Status</title>
  </head>
  <body style="font-family: sans-serif;">
    <h1>Status</h1>
  </body>
</html>
`

exports.handler = begin.html.get((req, res) => {
  console.log(JSON.stringify(req, null, 2))
  res({
    html: defaultHTML
  })
})
