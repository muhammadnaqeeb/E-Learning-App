import { StyleSheet, Text, View, Button } from 'react-native';
export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button title='Logout' onPress={
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