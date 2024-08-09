import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'; // Import KeyboardAwareScrollView
import CustomTextInput from '../../components/CustomTextInput.js';
import {COLORS} from '../../utils/colors.js';
import {Images} from '../../assets/images/index.js';
import {styles} from './styles.js';
import {useDispatch} from 'react-redux';
import {navigationRef} from '../../navigators/helper.js';
import {ROUTES} from '../../utils/routes.js';
import {setIsLoggedIn} from '../../store/slices/userSlice.js';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = () => {
    if (username === 'Innopad Solution' && password === 'Innopad@123') {
      dispatch(setIsLoggedIn(true));
      navigationRef.navigate(ROUTES.HOME);
      Alert.alert('Sign-In Successful');
    } else {
      Alert.alert('Invalid Username or Password');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.BackgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra.
          </Text>
        </View>
      </ImageBackground>

      <KeyboardAwareScrollView
        style={styles.formContainer}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={20}>
        <CustomTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="User name"
          placeholderTextColor={COLORS.DIM_GRAY}
          inputStyle={styles.inputStyle}
          keyboardType={'default'}
          containerStyle={styles.inputContainer}
        />

        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={COLORS.DIM_GRAY}
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          keyboardType={'default'}
          rightComponent={
            <TouchableOpacity onPress={() => {}}>
              <Image source={Images.Eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          }
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => signInHandler()}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.createAccountText}>
              Don’t have an account?{' '}
              <Text style={styles.createAccountLink}>Create Account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
