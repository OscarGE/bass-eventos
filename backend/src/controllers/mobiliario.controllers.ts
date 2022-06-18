import { RequestHandler } from "express";
import Mobiliario from "../models/Mobiliario";

export const createMobiliario: RequestHandler = async (req, res) => {
  const mobiliarioFound = await Mobiliario.findOne({nombre: req.body.nombre})
  if (mobiliarioFound)
    return res.status(202).json({message: "Ya existe un mobiliario con ese nombre"})
  
  const mobiliario = new Mobiliario(req.body)
  const savedMobiliario = await mobiliario.save()
  console.log(savedMobiliario)
  res.status(200).json({message: "Mobiliario creado"})
}

export const getMobiliarios: RequestHandler = async (req, res) => {
  try {
    const mobiliarios = await Mobiliario.find()
    return res.json(mobiliarios)
  } catch (error) {
    res.json(error)
  }
  
}

export const getMobiliario: RequestHandler = async (req, res) => {
  const mobiliarioFound = await Mobiliario.findById(req.params.id)
  if (!mobiliarioFound)
    return res.status(202).json({message: "El mobiliario solicitado no existe"})
  res.json(mobiliarioFound)
}

export const deleteMobiliario: RequestHandler = async (req, res) => {
  const mobiliarioDeleted = await Mobiliario.findByIdAndDelete(req.params.id)
  if (!mobiliarioDeleted)
    return res.status(202).json({message: "El mobiliario solicitado no existe"})
  res.status(200).json({message: "Mobiliario eliminado"})
}

export const updateMobiliario: RequestHandler = async (req, res) => {
  const mobiliarioUpdated = await Mobiliario.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if (!mobiliarioUpdated)
    return res.status(202).json({message: "El mobiliario solicitado no existe"})
  res.status(200).json({message: "Mobiliario actuaizado"})
}