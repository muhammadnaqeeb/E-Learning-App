import { StyleSheet, Text, View, Button } from 'react-native';
export default function SignUp({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
        <Button title='Need to login' onPress={
          () => navigation.navigate("login")
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