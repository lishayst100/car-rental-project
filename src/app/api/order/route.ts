import { firestore } from "@/firebase";
import { NextRequest, NextResponse } from "next/server";
import { OrderTypePost, SubscribeType } from "../../../../types";


export async function POST(request: NextRequest) {
  const order: OrderTypePost = await request.json();

  try {
    await firestore
      .collection("orders")
      .doc()
      .set({
        ...order,
      });
    console.log("created");
    return NextResponse.json({ message: "Thank you for Ordering a car in our company" });
  } catch (e) {
    console.log(e);
  }
}


export const GET = async() => {
 const snapshot:FirebaseFirestore.QuerySnapshot = await firestore.collection('orders').get()
 const orders = snapshot.docs.map(doc => {
  const {car,dropOff,dropOffDate,pickUp,pickUpDate,daysDifference,price,username,totalPrice,firstName,lastName,email,zip,address,city,age} = doc.data();
  const id = doc.id
  return {
    id: id,
    car,
    dropOff,
    dropOffDate,
    pickUp,
    pickUpDate,
    daysDifference,
    price,
    username,
    totalPrice,
    firstName,
    lastName,
    email,
    zip,
    address,
    city,
    age,
  };
 })

  return NextResponse.json({ orders });
}