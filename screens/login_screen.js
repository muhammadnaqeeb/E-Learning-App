import { StyleSheet, Text, View, Button } from 'react-native';
export default function Login({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title='Need an account? signup' onPress={
          () => navigation.navigate("Tab")
        }></Button>
      </View>
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