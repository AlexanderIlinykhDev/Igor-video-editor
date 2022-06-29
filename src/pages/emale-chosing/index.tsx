import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { Input } from '../../components/ui-elements/input';
import { validateEmail } from './helpers';
import LayoutPage from '../../components/templates/form-page';

export default function EmaleChosing() {
  const [errorMsg, setErrorMsg] = useState('');
  const setEmail = useStore(state => state.setEmail);
  let navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const localEmail = e.target['email'].value;
    if (!validateEmail(localEmail)) {
      setErrorMsg('e-mail format is invalid!');
      return;
    } else {
      setEmail(localEmail);
    }
    navigate('/general-info');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const localEmail = e.target.value;
    if (errorMsg) {
      if (validateEmail(localEmail)) {
        setErrorMsg('');
      }
    }
  };

  return (
    <LayoutPage onSubmit={handleSubmit} heading='Welcome!' buttonText='Continue'>
      <Input
        id='email'
        placeholder="please type you'r email here"
        label='email'
        onChange={handleEmailChange}
        error={errorMsg}
      />
    </LayoutPage>
  );
}