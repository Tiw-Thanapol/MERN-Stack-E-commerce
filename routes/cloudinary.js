const express = require('express')
const router = express.Router()

// controllers
const { createImage, removeImage} = require('../controllers/cloudinary')

// middleware
const { auth, adminCheck} = require('../middleware/auth')

// END point http://localhost:8888/api/images
router.post('/images',auth, adminCheck ,createImage)
router.post('/removeimages',auth, adminCheck ,removeImage)



module.exports = router;