import admin from "firebase-admin";
import serviceAccount from '../../car-rental-a4ab4-firebase-adminsdk-7cuqb-d50673e9c7.json'
import { getApps } from "firebase-admin/app";

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const firestore = admin.firestore();
