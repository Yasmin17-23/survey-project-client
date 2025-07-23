import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, 
  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
    
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
      setLoading(true);
      return signOut(auth)
    }

    //onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('currentuser on state change', currentUser)
        if(currentUser) {
           setUser(currentUser)
        } 
        setLoading(false)
      })

      return () => {
        return unsubscribe()
      }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider