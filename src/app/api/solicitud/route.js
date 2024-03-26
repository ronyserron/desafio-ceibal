import { NextResponse } from "next/server";
import db from '../../../../config/db';

export async function POST(request) {
    
    try {
        const data = await request.formData();
        
        if (!data.get("correo")) {
            return NextResponse.json({ message: "Correo es requerido", }, { status: 400 });
        }

        const result = await db.query("INSERT INTO solicitudes SET ?", {
            nombre: data.get("nombre"),
            correo: data.get("correo"),
            opcion: data.get("lente")
          });

        return NextResponse.json({ message: "Solicitud registrada correctamente.", });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}