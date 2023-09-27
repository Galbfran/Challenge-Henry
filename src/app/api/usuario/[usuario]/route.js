import { NextResponse } from "next/server";
import { connectDB } from "../../../../Base_Datos/db";
import Usuario from "../../../../models/usuario";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const UsuarioEncontrado = await Usuario.findById(params.usuario);
    if (!UsuarioEncontrado)
      return NextResponse.json(
        {
          message: "tarea no encontrada",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(UsuarioEncontrado);
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
    let UsuarioDelete = await Usuario.findByIdAndDelete(params.usuario, {
      new: true,
    });

    if (!UsuarioDelete)
      return NextResponse.json(
        {
          message: "tarea no encontrada",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(UsuarioDelete);
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
    let UsuarioUpdate = await Usuario.findByIdAndUpdate(
      params.usuario,
      data,
      {
        new: true,
      }
    );

    return NextResponse.json(UsuarioUpdate);
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
