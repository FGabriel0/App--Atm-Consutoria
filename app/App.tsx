import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './src/components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
