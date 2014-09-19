// ({
//   appDir: './js',
//   baseUrl: './',
//   dir: './build_js',

//   // call with `node r.js -o build.js`
//   // add `optimize=none` to skip script optimization (useful during debugging).

//   mainConfigFile: './js/main.js',

//   stubModules: ['jsx'],

//   modules: [
//     {
//       name: 'main',
//       exclude: ['JSXTransformer', 'text']
//     }
//   ]
// })

({
    baseUrl: '.',
    mainConfigFile: 'main.js',
    exclude: ['JSXTransformer', 'text'],
    modules: [
        {
          name: "main",
          exclude: ["JSXTransformer", "text"]
        }
    ]
    out: '../main-built.js'
})