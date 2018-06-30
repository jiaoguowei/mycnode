const express = require('express')




const index = require('./controllers/index')
const topic = require('./controllers/topic')
const user = require('./controllers/user')


// 1创建路由实例
const router = express.Router()

// 2配置路由guize
router
    .get('/', index.showIndex)

//  用户路由

router
    .get('/signin', user.showSigin)
    .post('/signin', user.signin)
    .get('/signup', user.showSignup)
    .post('/signup', user.signup)
    .get('/signout', user.signout)

// 话题相关

router  
    .get('/topic/create', topic.showCreate)
    .post('/topic/create', topic.create)
    .get('/topic/:topicID', topic.show)
    .get('/topic/:topicID/edit', topic.showEdit)
    .post('/tpic/:topicID/edit', topic.edit)
    .post('/topic/:topicID/delete', topic.delete)

// 3 到处路由模块

module.exports = router