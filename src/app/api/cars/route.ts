import { firestore } from "@/firebase";
import { NextRequest, NextResponse } from "next/server";
import Cars from "../../../../types";


export async function GET(){
  
    const snapshot: FirebaseFirestore.QuerySnapshot = await firestore.collection('cars').get();
    const cars = snapshot.docs.map(d => {
        const {name,image,price,model,year,doors,AC,transmission,fuel} = d.data()
        return {
          id: d.id,
          name,
          image,
          price,
          model,
          year,
          doors,
          AC,
          transmission,
          fuel,
        };
    })

   return NextResponse.json({cars})
}


// POST /api/posts
export async function POST(request: NextRequest) {
  const car: Cars = await request.json();

  try {
    await firestore
      .collection("cars")
      .doc()
      .set({
        ...car,
      });
    console.log("created");
    return NextResponse.json({ message: "created" });
  } catch (e) {
    console.log(e);
  }
}


