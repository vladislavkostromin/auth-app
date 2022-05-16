import {Link} from 'react-router-dom'
import {SignUp} from 'components/SignUp'
import styles from './styles.module.scss'

const RegisterPage = () => {
    return (
        <div className={styles.wrap}>
            <h1>Register</h1>
            <SignUp />
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </div>
    )
}

export default RegisterPage
