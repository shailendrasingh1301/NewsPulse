import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const reset = (routeName, params = {}) => {
  navigationRef.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [{name: routeName, params: params}],
    }),
  });
};

const push = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

const pop = count => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
};

const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

const setParams = (key, params) => {
  navigationRef.dispatch({
    type: 'SET_PARAMS',
    payload: {params},
    source: key,
  });
};
const RootNavigation = {
  navigate,
  push,
  pop,
  popToTop,
  reset,
  setParams,
};

export default RootNavigation;
