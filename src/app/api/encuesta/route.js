import {NextResponse} from "next/server"
import { connectDB } from "../../../Base_Datos/db"
import Encuesta from "../../../models/encuestas"

export async function GET(){
    await connectDB()
    const Encuestas = await Encuesta.find()
    return NextResponse.json(Encuestas)
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
        console.log()
        return NextResponse.json(error.message, {
            status:400
        })
    }
}