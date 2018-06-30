const express = require('express')
const bodyParser = require('body-parser')
const template = require('express-art-template')
const router = require('./router')



const app = express()

app.use('/public', express.static('./public/'))
app.use('/node_module', express.static('./node_modules/'))

// 配置 body-parser 解析POST请求体

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('html', template)


app.use(router)
app.listen(3000, () => {
    console.log("监听3000端口");
})