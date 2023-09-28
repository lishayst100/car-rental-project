import { firestore } from "@/firebase";
import { ContactType } from "../../../../types";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const contact:ContactType = await request.json();

  try {
    await firestore
      .collection("contact")
      .doc()
      .set({
        ...contact,
      });
    console.log("created");
    return NextResponse.json({ message: "created" });
  } catch (e) {
    console.log(e);
  }
}

export async function GET() {
  const snapshot: FirebaseFirestore.QuerySnapshot = await firestore
    .collection("contact")
    .get();
  const contacts = snapshot.docs.map((d) => {
    const { name, email,text } =
      d.data();
    return {
      id: d.id,
      name,
      email,
      text
        
    };
  });

  return NextResponse.json({ contacts });
}
