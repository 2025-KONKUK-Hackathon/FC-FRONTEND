import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './Login.css';
import Input from '@shared/components/input/Input';
import Button from '@shared/components/button/Button';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <span className={styles.title}>하나되는 우리</span>
        <div>
          <span className={styles.title}>feat/</span>
          <span className={styles.title2}>connect</span>
        </div>
        <span className={styles.subtitle}>건국대학교 컴퓨터공학부 학생들을 위한<br />통합 커뮤니티</span>

        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <Input 
              placeholder='이메일을 입력하세요'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
            />
            <Input 
              placeholder='비밀번호를 입력하세요' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
          </div>

          <div className={styles.buttonGroup}>
            <Button 
              text='로그인'
              size='large'
              bgColor='KU_Darkgreen'
              onClick={handleLogin}
              disabled={!email || !password}
            />
            
            <div className={styles.divider}>
              <span className={styles.dividerText}>또는</span>
            </div>

            <Button 
              text='회원가입' 
              variant='outline' 
              size='large'
              bgColor='KU_Darkgreen'
              onClick={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
