import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useAuth} from 'hooks/use-auth'
import {removeUser} from 'store/slices/userSlice'

const HomePage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()

    return isAuth ? (
        <div>
            <h1>Welcome!</h1>
            <p>Your email: {email}</p>
            <button onClick={() => dispatch(removeUser())}>Log out</button>
        </div>
    ) : (
        <Redirect to='/login' />
    )
}

export default HomePage
