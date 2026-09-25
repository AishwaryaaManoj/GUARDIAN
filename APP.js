import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Dashboard from "./components/Dashboard";
import LocationScreen from "./components/LocationScreen";
import EmergencyScreen from "./components/EmergencyScreen";

export default function App() {
  const [screen, setScreen] = useState("dashboard");
  const [emergency, setEmergency] = useState(false);

  const triggerEmergency = () => {
    setEmergency(true);
    setScreen("emergency");
  };

  return (
    <View style={styles.container}>

      {screen === "dashboard" && (
        <Dashboard onEmergency={triggerEmergency} />
      )}

      {screen === "location" && (
        <LocationScreen />
      )}

      {screen === "emergency" && (
        <EmergencyScreen />
      )}

      <View style={styles.navigation}>

        <TouchableOpacity
          onPress={() => setScreen("dashboard")}
          style={styles.navButton}
        >
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen("location")}
          style={styles.navButton}
        >
          <Text>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={triggerEmergency}
          style={styles.navButton}
        >
          <Text>🚨 SOS</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  navButton: {
    padding: 10,
  },
});
