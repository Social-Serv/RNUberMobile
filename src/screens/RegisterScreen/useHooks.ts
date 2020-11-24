import React from 'react';
import firebase1 from '../../firebase';

type Props = {
  email: string;
  password: string;
};

export const useHooks = (props: Props) => {
  const onSignInButtonPress = () => {
    firebase1.login(props.email, props.password);
  };
};
