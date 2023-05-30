import express from 'express'
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch } from '../controllers/tourControllers.js'

const router = express.Router()

// create new tour
router.post('/', createTour);

// update tour
router.put('/:id', updateTour);

// delete tour
router.delete('/:id', deleteTour);

// getSingle tour
router.get('/:id', getSingleTour);

// getAll tour
router.get('/', getAllTour);

//get tour by search
router.get("/search/getToursBySearch", getTourBySearch)

export default router;
