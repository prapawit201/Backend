import express from 'express';
import sampleController from '../controllers/samples'
const router = express.Router();

router.get('/ping', sampleController.sampleHealthCheck)

export = router