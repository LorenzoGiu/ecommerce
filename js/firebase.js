
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
 import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

 const firebaseConfig = {
   apiKey: "AIzaSyBgIhRqrCVOs4hRpL1zCJhnuspCpT7kBsM",
   authDomain: "e-commerce-2a58d.firebaseapp.com",
   projectId: "e-commerce-2a58d",
   storageBucket: "e-commerce-2a58d.appspot.com",
   messagingSenderId: "187785142490",
   appId: "1:187785142490:web:ea9f4991472d3bfa9045e3"
 };

 const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

 export const getProducts = async () => {

 const querySnapshot = await getDocs(collection(db, "products"));

  const products = []

  querySnapshot.forEach((doc) => {
  
  products.push(doc);

});


return products;
}

export const getProduct = async (id) => {

const docRef = doc(db, "products", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}