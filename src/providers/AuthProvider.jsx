import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, 
  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, 
  updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

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
      setUser(null)
      setLoading(true);
      return signOut(auth)
    }
    
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo
      })
    }
    
   
    //Save user
    const saveUser = async user => {
      const currentUser = {
        email: user?.email,
        role: 'user'
      }
      const { data } = await axios.put(`
        ${import.meta.env.VITE_API_URL}/user`,
        currentUser
      )
      return data;
    }


    //onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('currentuser on state change', currentUser)
        setUser(currentUser)
        if(currentUser) {
           saveUser(currentUser)
           //get token and store client
           const userInfo = { email: currentUser.email }
           axiosPublic.post('/jwt', userInfo)
           .then(res => {
             if(res.data.token){
               localStorage.setItem('access-token', res.data.token)
                setLoading(false);
             }
           })
           
        } 
        else{
             localStorage.removeItem('access-token');
              setLoading(false);
        }
       
      })

      return () => {
        return unsubscribe()
      }
    }, [axiosPublic])



    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        updateUserProfile
    }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider