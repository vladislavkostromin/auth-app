import {useState} from 'react'
import styles from '../styles.module.scss'

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className={styles.form}>
      <input className={styles.field}
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email...'
      />
      <input className={styles.field}
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password...'
      />
      <button onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </div>
  )
}

export {Form}