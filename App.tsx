import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>NOME: </Text>
      <TextInput style={styles.txtField}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  field:{
    color: 'white',
    fontSize: 31,
  },
  txtField:{
    backgroundColor: '#363636',
    width: 'auto',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  }
});
