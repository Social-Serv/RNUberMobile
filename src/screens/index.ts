import * as _ from 'lodash';

export const SCREENS = {
  REGISTER_SCREEN: {
    id: 'RegisterScreen',
    generator: () => require('./RegisterScreen').default,
  },
  LOGIN_SCREEN: {
    id: 'LoginScreen',
    generator: () => require('./LoginScreen').default,
  },
};

export const screenIds = _.mapValues(SCREENS, ({id}: {id: any}) => id) as {
  [K in keyof typeof SCREENS]: string;
};
