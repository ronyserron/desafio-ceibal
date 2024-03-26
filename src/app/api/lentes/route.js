import { NextResponse } from "next/server";
import db from '../../../../config/db';

export async function GET() {
    try {        
        await db.connect();        
        const [results] = await db.query("SELECT * FROM lentes");        
        return NextResponse.json({ message: "Solicitud registrada exitosamente", results });
    } catch (error) {
        console.error(error);        
        return NextResponse.json({ error: "Error al procesar la solicitud" });
    }
}