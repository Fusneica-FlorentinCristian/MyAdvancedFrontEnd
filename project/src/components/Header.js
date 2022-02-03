import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Header() {
    
  const [user, loading, error] = useAuthState(auth);
  const [profileName, setProfileName] = React.useState("")


  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setProfileName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user)   fetchUserName();
  }, [user, loading]);

    return (
        <header className="header">
            <img 
                src={require("../troll-face.png")}
                alt="Troll face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        {user?
        <h2>
            Hello <Link to="/dashboard">{profileName}</Link>!
        </h2>   
        :
            <h2>
                Don't have an account? <Link to="/register">Register</Link> now.
            </h2>}
        </header>
    )
}