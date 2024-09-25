import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const newYear = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();

  function digitalClock() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    return `${hour}:${minute}:${second}`;
  }

  setInterval(digitalClock, 1000);

  return (
    <View style={styles.container}>
      <Text>
        {date}/{month}/{newYear}
      </Text>
      <Text>{digitalClock()}</Text>
      <Text>Hello World!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
