import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Lillard />
        <Simons />
        <Hart />
      </ScrollView>
    </View>
  );
};

// const GetStats = () => {
//   fetch("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=278");
// };

const Lillard = () => {
  return (
    <View style={styles.playerCard}>
      <Image
        style={styles.playerPicture}
        source={{
          uri: "https://assets1.sportsnet.ca/wp-content/uploads/players/nba/d/damian-lillard.png",
        }}
      />
      <View style={styles.playerBio}>
        <Text>Damien Lillard - 6'2" 200lbs</Text>
      </View>
      <View style={styles.playerStats}>
        <Text></Text>
      </View>
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
      <View style={styles.playerBio}>
        <Text>Anfernee Simons - 6'3" 200lbs</Text>
      </View>

      <View style={styles.playerStats}>
        <Text></Text>
      </View>
    </View>
  );
};
const Hart = () => {
  return (
    <View style={styles.playerCard}>
      <Image
        style={styles.playerPicture}
        source={{
          uri: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3062679.png",
        }}
      />
      <View style={styles.playerBio}>
        <Text>Josh Hart - 6'5" 200lbs</Text>
      </View>
      <View style={styles.playerStats}></View>
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
    width: 350,
    height: 350,
    backgroundColor: "red",
    flexDirection: "row",
  },
  playerPicture: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  playerBio: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
  },
  playerStats: {
    backgroundColor: "grey",
    width: 200,
    height: 200,
    flexDirection: "row",
  },
});
export default App;
