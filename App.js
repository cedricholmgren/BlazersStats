import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Lillard />
        <Simons />
      </ScrollView>
    </View>
  );
}

const Lillard = () => {
  return (
    <View style={styles.playerCard}>
      <Image
        style={styles.playerPicture}
        source={{
          uri: "https://assets1.sportsnet.ca/wp-content/uploads/players/nba/d/damian-lillard.png",
        }}
      />
    </View>
  );
};
const Simons = () => {
  return (
    <View style={styles.playerCard}>
      <Image
        style={styles.playerPicture}
        source={{
          uri: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  playerCard: {
    flex: 1,
  },
  playerPicture: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  playerBio: {
    flex: 1,
  },
  playerStats: {
    flex: 1,
  },
});
