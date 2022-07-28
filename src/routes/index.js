import express from 'express'
import route1 from './route1'
import route2 from './route2'
const router =express.Router()
router.use("/route1",route1);
router.use("/route2",route2);
export default router;