// models/Usuario.js
import { Schema , model , models} from "mongoose";

const Usuario = new Schema({
    name:{
        type:String,
        require:[true, "El titulo es requerido"],
        unique: true,
        trim:true
    },
    email:{
        type:String,
        require:[true, "La descripcion es requerido"],
        trim:true
    },
    password:{
        type:String,
        require:[true, "La descripcion es requerido"],
        trim:true
    },
    encuestas:{
        type: Schema.Types.Mixed,
    }
},{
    timestamps:true
})

export default models.Usuario || model("Usuario", Usuario)

