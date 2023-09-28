import { firestore } from "@/firebase";
import { NextRequest, NextResponse } from "next/server";
import { OurTeam } from "../../../../types";

export async function GET() {
  const snapshot: FirebaseFirestore.QuerySnapshot = await firestore
    .collection("team")
    .get();
  const team = snapshot.docs.map((d) => {
    const { image,name,position} =
      d.data();
    return {
      id: d.id,
      image,
      name,
      position
    };
  });

  return NextResponse.json({ team });
}



export async function POST(request: NextRequest) {
  const team: OurTeam = await request.json();

  try {
    await firestore
      .collection("team")
      .doc()
      .set({
        ...team,
      });
    console.log("created");
    return NextResponse.json({ message: "created" });
  } catch (e) {
    console.log(e);
  }
}