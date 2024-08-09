export const devLog = (...message) => {
  if (__DEV__) {
    console.log(...message);
  }
};
