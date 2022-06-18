import {Schema, model} from 'mongoose'

const mobiliarioSchema = new Schema({
  categoria:{
    type: String,
    required: true,
    trim: true
  },
  nombre:{
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  detalles:{
    type: String,
    trim: true
  },
  costo: {
    type: Number
  },
  precio_renta:{
    type: Number,
    trim: true
  },
  existencia:{
    type: Number,
    trim: true
  }
}, {versionKey: false, timestamps: true})

export default model('Mobiliario',mobiliarioSchema)