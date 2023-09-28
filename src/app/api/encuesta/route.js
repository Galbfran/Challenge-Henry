import {NextResponse} from "next/server"
import { connectDB } from "../../../Base_Datos/db"
import Encuesta from "../../../models/encuestas"

export async function GET(){
    await connectDB()
    const Encuestas = await Encuesta.find()
    const encuestasReducidas = Encuestas.map((encuesta) => ({
        _id: encuesta._id,
        name: encuesta.name,
        createdAt: encuesta.createdAt,
      }));

    return NextResponse.json(encuestasReducidas)
}

export async function POST(request){
    await connectDB()
    try {
        const data = await request.json()
        const NewEncuesta = new Encuesta(data)
        const savedTask = await NewEncuesta.save()
        
        return NextResponse.json(savedTask, {
            status:200
        })
        
    } catch (error) {
        return NextResponse.json(error.message, {
            status:400
        })
    }
}