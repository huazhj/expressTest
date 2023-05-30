const express = require('express')
//如果前端使用的是history模式而非hash模式 
//这个插件可以有效解决刷新发送请求路径404问题 或者使用nginx解决
const  history=require('connect-history-api-fallback')
const app = express()
app.use(history)//必须写在app.use(express.static(__dirname+'/static'))之前
//指定静态资源
//如http://localhost:5005/demo.html 可以访问到demo.html页面
app.use(express.static(__dirname+'/static'))
//访问 http://localhost:5005/person
app.get('/person', (req, res) => {
    //返回的数据
    res.send({
        name: 'tom',
        age:18
    })
})
//端口号监听 运行node server.js
app.listen(5005, (err) => {
    if (!err) console.log('服务器启动成功')
})