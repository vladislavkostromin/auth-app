import {Link} from 'react-router-dom'
import {Login} from 'components/Login'
import styles from './styles.module.scss'

const LoginPage = () => {
    return (
        <div className={styles.wrap}>
            <h1>Login</h1>
            <Login />
            <p>
                or <Link to='/register'>register</Link>
            </p>
        </div>
    )
}

export default LoginPage
