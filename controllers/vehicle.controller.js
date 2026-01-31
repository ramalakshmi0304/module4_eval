import express from "express"
import supabase from "../config/supabase"

export const addVehicle = (req,res)=>{
    try{
    const{name,registation_number,owner_id}= req.body

    if (!name||!registration_number)
        return res.status(400).json("name and registration number are required")

if(!owner_id)
    return res.status(401).json("owner_id is required to create vehicle")

if (owner_id ===! users2.id)
    return res.status(403).json("access denied")

const{data,error}= await supabase
.from("users2")
.insert([{
name,
registration_number,
rate_per_km,
}]);

if(error)
    return res.status(500).json ({message: "internal server error"})
res.status(201).json({message:"vehicle created"},data)

} catch (err) {
        res.status(500).json({ error: err.message })
    }
}


export const assignDriver= async(req,res)=>{
     try{

    {}

} catch (err) {
        res.status(500).json({ error: err.message })
    }
}


export const getVehicle = async(req,res)=>{

   try{

    {}

} catch (err) {
        res.status(500).json({ error: err.message })
    }
}
