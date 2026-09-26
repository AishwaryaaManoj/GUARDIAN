import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Linking,
} from "react-native";

export default function EmergencyScreen() {
  const [status, setStatus] = useState("SYSTEM READY");
  const [sending, setSending] = useState(false);

  // SEND SOS TO ESP8266
  const sendSOS = async () => {
    if (sending) return;

    setSending(true);
    setStatus("SENDING SOS...");

    try {
      const response = await fetch("http://192.168.4.1/SOS");

      if (response.ok) {
        setStatus("SOS SENT SUCCESSFULLY");

        Alert.alert(
          "🚨 EMERGENCY ALERT",
          "SOS signal has been sent to the Guardian device."
        );
      } else {
        setStatus("DEVICE ERROR");

        Alert.alert(
          "SOS ERROR",
          `Server returned response error code ${response.status}`
        );
      }
    } catch (error) {
      console.log(error);

      setStatus("DEVICE NOT CONNECTED");

      Alert.alert(
        "CONNECTION ERROR",
        "Connect your phone to NIRMAAN_SOS Wi-Fi and try again."
      );
    } finally {
      setSending(false);
    }
  };

  // CALL 112
  const callEmergency = () => {
    Linking.openURL("tel:112");
  };

  // OPEN GOOGLE MAPS
  const openMaps = () => {
    Linking.openURL(
      "https://www.google.com/maps"
    );
  };

  // GET LOCATION
  const getLocation = () => {
    setStatus("LOCATION REQUESTED");

    Alert.alert(
      "📍 LOCATION",
      "GPS location feature is ready. Connect the GPS module to enable live location."
    );
  };

  // SEND MESSAGE
  const sendMessage = () => {
    Linking.openURL(
      "sms:?body=EMERGENCY! I need help. Please contact me immediately."
    );
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>GUARDIAN</Text>
          <Text style={styles.subtitle}>
            Personal Emergency Safety System
          </Text>
        </View>

        <View style={styles.onlineBadge}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>ONLINE</Text>
        </View>
      </View>

      {/* STATUS */}
      <View style={styles.statusCard}>
        <Text style={styles.statusLabel}>SYSTEM STATUS</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>

      {/* SOS */}
      <Text style={styles.sectionTitle}>EMERGENCY</Text>

      <Pressable
        onPress={sendSOS}
        disabled={sending}
        style={({ pressed }) => [
          styles.sosButton,
          pressed && styles.pressed,
          sending && styles.disabled,
        ]}
      >
        <Text style={styles.sosIcon}>SOS</Text>
        <Text style={styles.sosText}>
          {sending ? "SENDING..." : "EMERGENCY SOS"}
        </Text>
        <Text style={styles.sosSubtext}>
          Tap to alert the Guardian device
        </Text>
      </Pressable>

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

      <View style={styles.actionRow}>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.pressed,
          ]}
          onPress={callEmergency}
        >
          <Text style={styles.actionIcon}>📞</Text>
          <Text style={styles.actionText}>CALL 112</Text>
          <Text style={styles.actionSubtext}>
            Emergency Services
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.pressed,
          ]}
          onPress={getLocation}
        >
          <Text style={styles.actionIcon}>📍</Text>
          <Text style={styles.actionText}>GET GPS</Text>
          <Text style={styles.actionSubtext}>
            Get Location
          </Text>
        </Pressable>

      </View>

      <View style={styles.actionRow}>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.pressed,
          ]}
          onPress={openMaps}
        >
          <Text style={styles.actionIcon}>🗺️</Text>
          <Text style={styles.actionText}>OPEN MAP</Text>
          <Text style={styles.actionSubtext}>
            Google Maps
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.pressed,
          ]}
          onPress={sendMessage}
        >
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionText}>MESSAGE</Text>
          <Text style={styles.actionSubtext}>
            Send Emergency SMS
          </Text>
        </Pressable>

      </View>

      {/* DEVICE INFORMATION */}
      <Text style={styles.sectionTitle}>DEVICE INFORMATION</Text>

      <View style={styles.deviceCard}>

        <View style={styles.deviceRow}>
          <Text style={styles.deviceLabel}>DEVICE</Text>
          <Text style={styles.deviceValue}>ESP8266 NodeMCU</Text>
        </View>

        <View style={styles.deviceRow}>
          <Text style={styles.deviceLabel}>BUZZER</Text>
          <Text style={styles.deviceValue}>D5 / GPIO14</Text>
        </View>

        <View style={styles.deviceRow}>
          <Text style={styles.deviceLabel}>NETWORK</Text>
          <Text style={styles.deviceValue}>NIRMAAN_SOS</Text>
        </View>

        <View style={styles.deviceRow}>
          <Text style={styles.deviceLabel}>IP ADDRESS</Text>
          <Text style={styles.deviceValue}>192.168.4.1</Text>
        </View>

      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>
        GUARDIAN • Emergency Protection System
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
    paddingTop: 45,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#B00020",
  },

  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  onlineBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E7F7ED",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#20A050",
    marginRight: 5,
  },

  onlineText: {
    color: "#16833D",
    fontWeight: "bold",
    fontSize: 11,
  },

  statusCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 13,
    marginBottom: 12,
    elevation: 2,
  },

  statusLabel: {
    fontSize: 10,
    color: "#888",
    fontWeight: "bold",
  },

  statusText: {
    fontSize: 14,
    color: "#222",
    fontWeight: "600",
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    marginTop: 5,
    marginBottom: 8,
    letterSpacing: 1,
  },

  sosButton: {
    backgroundColor: "#D00000",
    borderRadius: 18,
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 10,
  },

  sosIcon: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
  },

  sosText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 2,
  },

  sosSubtext: {
    color: "#FFDADA",
    fontSize: 11,
    marginTop: 3,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  actionButton: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    minHeight: 76,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    paddingVertical: 8,
  },

  actionIcon: {
    fontSize: 21,
    marginBottom: 2,
  },

  actionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#222",
  },

  actionSubtext: {
    fontSize: 9,
    color: "#777",
    marginTop: 2,
    textAlign: "center",
  },

  deviceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
  },

  deviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  deviceLabel: {
    fontSize: 10,
    color: "#888",
    fontWeight: "bold",
  },

  deviceValue: {
    fontSize: 11,
    color: "#333",
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    color: "#999",
    fontSize: 9,
    marginTop: 10,
    marginBottom: 5,
  },

  pressed: {
    opacity: 0.65,
  },

  disabled: {
    opacity: 0.6,
  },

});
