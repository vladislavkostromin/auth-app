import Form from './Form'
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userSlice'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const SignUp = () => {
  const dispatch = useDispatch()

  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch(console.error)
  }

  return (
    <Form 
      title='Register'
      handleClick={handleRegister}
    />
  );
};

export default SignUp;