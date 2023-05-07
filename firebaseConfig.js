import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDc4eCcWcOnD-X4gXWo4eIpVizI1rkfYQs",
  authDomain: "the-place-d595b.firebaseapp.com",
  projectId: "the-place-d595b",
  storageBucket: "the-place-d595b.appspot.com",
  messagingSenderId: "803553950212",
  appId: "1:803553950212:android:27dc12849019f4dc361351",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
