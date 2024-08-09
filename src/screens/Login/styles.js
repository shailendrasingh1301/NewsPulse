import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 271,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerContainer: {
    margin: 18,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.6)',
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'rgba(15, 105, 241, 0.1)',
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#000',
    padding: 18,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'rgba(15, 105, 241, 1)',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  footerContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  signInButton: {
    width: '100%',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(15, 105, 241, 1)',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.6)',
    textAlign: 'center',
  },
  createAccountLink: {
    color: 'rgba(15, 105, 241, 1)',
    fontWeight: 'bold',
  },
});
