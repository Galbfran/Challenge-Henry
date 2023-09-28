import { Schema , model , models} from "mongoose";


const Encuesta = new Schema({
    name:{
        type:String,
        require:[true, "El titulo es requerido"],
    },
    encuestas:{
        type: [Schema.Types.Mixed],
    }
},{
    timestamps:true
})

export default models.Encuesta || model("Encuesta", Encuesta)