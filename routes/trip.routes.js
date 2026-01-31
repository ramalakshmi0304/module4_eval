import express from "express"
import {createTrip,updateTrip,deleteTrip,getTrip} from "../controllers/trip.controller"

const router = express.Router();

router.post("/trips/create/",createTrip)
router.patch("/trips/update/:tripId",updateTrip)
router.get("/trips/:tripId", getTrip)
router.delete("trips/delete/:tripId", deleteTrip)

export default router;