import { NextResponse } from "next/server";
import { connectDB } from "../../../../Base_Datos/db";
import Encuesta from "../../../../models/encuestas";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const EncuestaEncontrado = await Encuesta.findById(params.encuesta);
    if (!EncuestaEncontrado)
      return NextResponse.json(
        {
          message: "tarea no encontrada",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(EncuestaEncontrado);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    //let data = await request.json()
    let EncuestaDelete = await Encuesta.findByIdAndDelete(params.encuesta, {
      new: true,
    });

    if (!EncuestaDelete)
      return NextResponse.json(
        {
          message: "tarea no encontrada",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(EncuestaDelete);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    let data = await request.json();
    let EncuestaUpdate = await Encuesta.findByIdAndUpdate(
      params.encuesta,
      data,
      {
        new: true,
      }
    );

    return NextResponse.json(EncuestaUpdate);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}