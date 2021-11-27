import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinit from "./firebaseinit";

firebaseinit();
const useFirebase = () => {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(true);
  const [tempName, setTempName] = useState("");

  const auth = getAuth();

  const register = (userdata) => {
    setloading(true);
    setTempName(userdata.displayName);
    createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then((res) => {
        if (res.user) {
          updateProfile(auth.currentUser, {
            displayName: userdata.displayName,
          }).then(() => setuser(auth.currentUser));
        }
        setloading(false);
      })
      .catch((err) => alert(err))
      .finally(setloading(false));
  };

  const emailsign = (logindata) => {
    setloading(true);
    signInWithEmailAndPassword(auth, logindata.email, logindata.password)
      .then((res) => {
        setuser(res.user);
        setloading(false);
      })
      .catch((err) => alert(err))
      .finally(setloading(false));
  };

  const signInUsingGoogle = () => {
    setloading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => setuser(result.user))
      .catch((err) => alert(err))
      .finally(setloading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName) {
          setuser(user);
        } else {
          const newData = { ...user };
          newData.displayName = tempName;
          setuser(newData);
        }
      } else {
        setuser({});
      }
      setloading(false);
    });
  }, []);

  const logout = () => {
    setloading(true);
    signOut(auth)
      .then(() => setuser({}))
      .catch((err) => alert(err))
      .finally(() => setloading(false));
  };

  return {
    user,
    loading,
    signInUsingGoogle,
    emailsign,
    register,
    logout,
  };
};

export default useFirebase;
