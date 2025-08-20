import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.topBackground}>
        <Image source={require('./assets/logo.png')} width={28} height={28} />
        <Text style={styles.heading}>Sign in to your Account</Text>
        <Text style={styles.subtitle}>Enter your email and password to log in</Text>
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('./assets/google.png')} width={18} height={18} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>Or login with</Text>
        <TextInput style={styles.input} placeholder='superunicorns@gmail.com' />
        <TextInput type="password" style={styles.input} placeholder='********' />
        <View style={styles.iWillRememberYou}>
          <View style={styles.checkboxContainer}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'start',
    position: 'relative',
  },
  topBackground: {
    paddingTop: statusBarHeight + 30,
    alignItems: 'center',
    backgroundColor: '#2567E8',
    width: '100%',
    height: '50%',
  },
  heading: {
    color: '#fff',
    paddingTop: 30,
    fontSize: 32,
    fontWeight: 700,
    width: 250,
    textAlign: 'center', 
  },
  subtitle: {
    color: '#fff',
    paddingTop: 20,
  },
  form: {
    padding: 30,
    width: 327, 
    backgroundColor: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-${50}%, -160px)`,
    borderRadius: 20,
  },
  googleButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
  },
  googleButtonText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 600,
  },
  separator: {
    justifyContent: 'center',
    paddingVertical: 24,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 10,
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  checkboxText: {
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#2567E8',
    fontWeight: 600,
  },
  iWillRememberYou: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signInButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#2567E8',
    borderRadius: 12,
    alignItems: 'center', 
  },
  signInButtonText: {
    color: '#fff'
  },
  noAccount: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  noAccountText: {
    color: 'rgba(0, 0, 0, 0.6)',
    marginRight: 10,
  },
  signUpText: {
    color: '#2567E8',
    fontWeight: 600
  }
});
