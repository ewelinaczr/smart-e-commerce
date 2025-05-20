import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase";

export const getProductsData = async (): Promise<any[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const list: any[] = [];
    querySnapshot.forEach((doc) => list.push(doc.data()));
    return list;
  } catch (err) {
    console.error("Error fetching data", err);
    return [];
  }
};

export const getUserOrders = async (): Promise<any[]> => {
  try {
    const userId = auth.currentUser?.uid;
    const userOrdersRef = collection(doc(db, "users", userId), "orders");
    const querySnapshot = await getDocs(userOrdersRef);
    const orderList: any[] = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        data: doc.data() ?? {},
      };
    });
    return orderList;
  } catch (err) {
    console.error("Error fetching orders", err);
    return [];
  }
};
