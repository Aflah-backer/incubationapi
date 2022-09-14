const { register, login, viewApplication, userApplication, getstatus, test } = require("../Controllers/Usercontrollers");
const { checkUser } = require("../Middlewares/UserMiddle");
const router = require("express").Router();

router.get("/",test)
router.post("", checkUser);
router.post('/register',register)
router.post('/login',login)
router.post('/userapplication',userApplication)
router.get('/status/:id',getstatus)
router.get('/viewapplication/:id',viewApplication)

module.exports = router;
