# webpack5 getting started

## dependency
- express
- webpack, webpack-cli
- babel, @babel/polyfill


## install webpack
- 참고링크: https://webpack.js.org/guides/getting-started/
```
$ npm install webpack webpack-cli —save-dev 
```

## basic command(설정파일 없어도 가능)
``` 
$ npx webpack --entry ./source/index.js --output-path ./public
```
```
이렇게 돌리면 번들링 파일은 public아래에 나올꺼야.
그리고 추가로 mode option 설정 하라고 메시지 출력되는데,
이유는 mode가 develop일때와 production일 때 번들링 결과가 달라서야.
webapck.config.js 만들어서 돌릴때 마다 mode다르게 넣어서 돌려도 되고,
아래 처럼 다른 파일로 설정도 가능
```

## mode setting
- 참고 링크: https://webpack.js.org/configuration/#options 
```
$ touch webapck.config.js // mode = 'develop'
$ touch webapck.config.prod.js  // mode = 'production'

아니면 .env 프로세스 띄울때 값넣고 그 걸 config에서 받아서 모드 설정해줘도됨.
```

develop, production 설정방법은 다양하지만 편하게 하고 싶으면 package.json script 추가
```
package.json
"scripts": {
    "start": "npx webapck",
    "master": "npx webpack --config webpack.config.prod.js",
    "build": "webpack"
},
```
## loader setting
- 참고 링크: https://webpack.js.org/loaders/
 
## output 설정
- 개발을 하다보면 a파일은 a,b,c,d.js 파일만 번들링 하고, 
- b파일은 b,c,d,e파일만 번들링 하고 싶은 경우가 많이 생기자나
  아래처럼 entry object로 넣고 output [name].bundle.js 로 설정 후 빌드
  하면 잘됨.
```
#webpack.config.js 

module.exports = {
    mode: 'development',
    entry: {
        index: './source/index.js',
        about: './source/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]_bundle.js'
    },
	module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './source/index.html',
			filename: './index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './source/about.html',
			filename: './about.html',
			chunks: ['about']
		})
	]
};

/public/index_bindle.js
/public/about_bindle.js 나옴.
```

## plugin 설정
- n개 파일 n개 템플릿 사용하고 각기 다른 js 넣는 방법
- https://github.com/jantimon/html-webpack-plugin 
~~~
plugins: [
		new HtmlWebpackPlugin({
			template: './source/index.html',
			filename: './index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './source/about.html',
			filename: './about.html',
			chunks: ['about']
		})
	]
~~~