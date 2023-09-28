import { NextResponse } from "next/server";
import { connectDB } from "../../../../Base_Datos/db";
import Usuario from "../../../../models/usuario";
import mongoose from "mongoose";

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
    const { email } = params;
    const data = await request.json();
    console.log(data);

    // Busca al usuario por su dirección de correo electrónico
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return NextResponse.json(
        {
          message: 'Usuario no encontrado',
        },
        {
          status: 404,
        }
      );
    }

    // Agrega elementos al array 'encuestas' en el documento encontrado
    usuario.encuestas.push(...data.encuestas);
    const UsuarioUpdate = await usuario.save();

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






