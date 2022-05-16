import {Form} from '../Form'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addUser} from 'store/slices/userSlice'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
  const dispatch = useDispatch()
  const {push} = useHistory()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(addUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken
      }))
      push('/')
    })
    .catch(() => alert('Invalid user!'))
  }

  return (
    <Form 
      title='Login'
      handleClick={handleLogin}
    />
  )
}

export {Login}