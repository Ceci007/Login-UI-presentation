import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <Image source={require("./assets/logo.png")} width={28} height={28} />
        <Text style={styles.heading}>Sign in to your Account</Text>
        <Text style={styles.subtitle}>Enter your email and password to log in</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
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
  }
});
