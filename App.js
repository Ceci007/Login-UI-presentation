import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
    width: 380,
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
  }
});
