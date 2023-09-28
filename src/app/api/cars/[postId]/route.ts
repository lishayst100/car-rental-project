import { firestore } from "@/firebase"
import { NextRequest, NextResponse } from "next/server"

/* export const GET = async (context: { params: { carId: string } }) => {
  const carId = context.params.carId;
  const document: FirebaseFirestore.DocumentSnapshot = await firestore
    .collection("cars")
    .doc(carId)
    .get();
  const data = document.data();
  if (!(document.exists && data)) {
    return new NextResponse("Bad request", { status: 400 });
  }

  return NextResponse.json({
    id: document.id,
    name: data.name,
    image: data.image,
    price: data.price,
    model: data.model,
    year: data.year,
    doors: data.doores,
    AC: data.AC,
    transmission: data.transmission,
    fuel: data.fuel, 
  });
}; */


export async function GET(
  request: NextRequest,
  context: { params: { postId: string } }
) {
  const postId = context.params.postId;
  
  const document: FirebaseFirestore.DocumentSnapshot = await firestore
    .collection("cars")
    .doc(postId)
    .get();
  const data = document.data();
  if (!(document.exists && data)) {
    return new NextResponse("Bad request", { status: 400 });
  }

  return NextResponse.json({
    id: document.id,
    name: data.name,
    image: data.image,
    price: data.price,
    model: data.model,
    year: data.year,
    doors: data.doors,
    AC: data.AC,
    transmission: data.transmission,
    fuel: data.fuel
  });
}

