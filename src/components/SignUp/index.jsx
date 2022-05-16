import {Form} from '../Form'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addUser} from 'store/slices/userSlice'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const SignUp = () => {
  const dispatch = useDispatch()
  const {push} = useHistory()

  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(addUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken
      }))
      push('/')
    })
    .catch(() => alert('Error'))
  }

  return (
    <Form 
      title='Register'
      handleClick={handleRegister}
    />
  )
}

export {SignUp}