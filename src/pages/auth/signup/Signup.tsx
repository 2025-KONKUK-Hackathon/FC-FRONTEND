import * as styles from './Signup.css';
import SignupForm from './components/SignupForm';
import Button from '@shared/components/button/Button';

export default function Signup() {
  return (
    <div className={styles.signupWrapper}>
      <SignupForm type='email' />
      <SignupForm type='emailVerification' />
      <SignupForm type='password' />
      <SignupForm type='name' />
      <div className={styles.buttonContainer}>
        <Button 
          text='회원가입'
          variant='outline'
          size='large'
          bgColor='KU_Darkgreen'
        />
      </div>
    </div>
  )
}
