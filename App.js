import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const App = () => {
  const [stats, setStats] = useState(undefined);
  async function getstats() {
    const response = await fetch(
      "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=278&player_ids[]=419&player_ids[]=202&player_ids[]=182&player_ids[]=349&player_ids[]=38017690&player_ids[]=485&player_ids[]=2189&player_ids[]=666729&player_ids[]=147&player_ids[]=17896041&player_ids[]=38017711&player_ids[]=17896058&player_ids[]=17896028"
    );
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    getstats().then((data) => setStats(data));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Lillard stats={stats} />
        <Simons stats={stats} />
        <Hart />
      </ScrollView>
    </View>
  );
};

const Lillard = (props) => {
  console.log(props);
  if (!props.stats) return <Text>Loading</Text>;
  const stats = props.stats;

  return (
    <View style={styles.playerCard}>
      <Image
        style={styles.playerPicture}
        source={{
          uri: "https://assets1.sportsnet.ca/wp-content/uploads/players/nba/d/damian-lillard.png",
        }}
      />
      <View style={styles.playerBio}>
        <Text>Damian Lillard - 6'2" 195lbs 32 YO</Text>
      </View>
      <View style={styles.playerStats}>
        <Text>Games played: {stats["data"][3]["games_played"]}</Text>
        <Text>Mins played: {stats["data"][3]["min"]}</Text>
        <Text>Mins played: {stats["data"][3]["min"]}</Text>
      </View>
    </View>
  );
};
const Simons = (props) => {
  if (!props.stats) return <Text>Loading</Text>;
  const stats = props.stats;
  return (
    <View style={styles.playerCard}>
      <Image
        style={styles.playerPicture}
        source={{
          uri: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png",
        }}
      />
      <View style={styles.playerBio}>
        <Text>Anfernee Simons - 6'3" 181lbs 23 YO</Text>
      </View>

      <View style={styles.playerStats}>
        <Text>Games played: {stats["data"][5]["games_played"]}</Text>
        <Text>Mins played: {stats["data"][5]["min"]}</Text>
        <Text>Mins played: {stats["data"][5]["min"]}</Text>
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
        <Text>Josh Hart - 6'5" 215lbs 27</Text>
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
