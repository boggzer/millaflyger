import express from 'express';
import { getImageById, getImagesByTitle } from '../controllers/imageController';

const router = express.Router();

router.get('/image', getImageById);
router.get('/', getImagesByTitle);
