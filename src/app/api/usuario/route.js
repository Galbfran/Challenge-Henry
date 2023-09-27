import {NextResponse} from "next/server"
import { connectDB } from "../../../Base_Datos/db"
import Usuario from "../../../models/usuario"

export async function GET(){
    await connectDB()
    const usuarios = await Usuario.find()
    return NextResponse.json(usuarios)
}

export async function POST(request){
    try {
        const data = await request.json()
        const usuario = new Usuario(data)
        const savedTask = await usuario.save()
        
        return NextResponse.json(savedTask, {
            status:200
        })
        
    } catch (error) {
        return NextResponse.json(error.message, {
            status:400
        })
    }
}