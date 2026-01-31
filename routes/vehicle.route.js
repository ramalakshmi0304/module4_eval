import express from "express"
import {addVehicle,assignDriver,getVehicle} from "../controllers/vehicle.controller"

const router = express.Router();

router.post("/vehicles/add/",addVehicle)
router.patch("/vehicles/assign-driver/:vehicleId",assignDriver)
router.get("/vehicles/:vehicleId", getVehicle)

export default router;