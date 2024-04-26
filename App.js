import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import DeveloperInfo from "./components/DeveloperInfo"
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
return (
        <NavigationContainer>
            <View style={styles.container}>
                <Header
                    title="Mobile App"
                    imageUrl={require('./assets/logo_zdtu.png')}
                />
                <Navigation />
                <DeveloperInfo />
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
