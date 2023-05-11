const Router = require('koa-router')
const router = new Router()

const user = require('./user')
const treatment=require('./treatment')
const body=require('./body')
const question = require('./question')
const symptom = require('./symptom')
const dashboard = require('./dashboard')
const reference = require('./reference')
const treatmentCategory = require('./treatmentCategory')
const jingluo = require('./jingluo')
const xueweiCategory = require('./xueweiCategory')
const xuewei = require('./xuewei')
const food = require('./food')
router.use(user.routes(), user.allowedMethods())
router.use(treatment.routes(), treatment.allowedMethods())
router.use(body.routes(), body.allowedMethods())
router.use(question.routes(), question.allowedMethods())
router.use(symptom.routes(), symptom.allowedMethods())
router.use(dashboard.routes(), symptom.allowedMethods())
router.use(reference.routes(), symptom.allowedMethods())
router.use(treatmentCategory.routes(), symptom.allowedMethods())
router.use(jingluo.routes(), symptom.allowedMethods())
router.use(xueweiCategory.routes(), symptom.allowedMethods())
router.use(xuewei.routes(), symptom.allowedMethods())
router.use(food.routes(), symptom.allowedMethods())
module.exports = router
