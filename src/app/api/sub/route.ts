import { firestore } from "@/firebase";
import { NextResponse, NextRequest } from "next/server";
import { SubscribeType } from "../../../../types";




export async function GET() {
  const snapshot: FirebaseFirestore.QuerySnapshot = await firestore
    .collection("email")
    .get();
  const email = snapshot.docs.map((d) => {
    const { email} =
      d.data();
    return {
      id: d.id,
      email
    };
  });

  return NextResponse.json({ email });
}





// POST /api/sub
export async function POST(request: NextRequest) {
  const email:SubscribeType = await request.json();

  try{
    await firestore
      .collection("email")
      .doc()
      .set({
        ...email,
      });
    console.log("created");
    return NextResponse.json({ message: "Thank you for subscribe us" });}
   catch (e) {
    console.log(e);
  }

}