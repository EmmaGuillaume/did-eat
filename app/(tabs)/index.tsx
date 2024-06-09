import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Auth from "@/components/Auth";
import Account from "@/components/Account";
import { StyleSheet, Text, View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Date</Text>
      </View>

      <View style={styles.dateSlider}>
        <AntDesign name="left" size={12} color="black" />
        <Text>15 Nov</Text>
        <AntDesign name="right" size={12} color="black" />
      </View>

      <View style={styles.addDishes}>
        <Text style={{ fontSize: 28, textAlign: "center" }}>
          Quel repas avez vous mangé ajd ?
        </Text>
      </View>

      {/* {session && session.user ? ( */}
      {/* <Account key={session.user.id} session={session} /> */}
      {/* ) : ( */}
      {/* <Auth /> */}
      {/* )} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#D8D8D8",
    width: "100%",
  },
  dateSlider: {
    marginTop: 32,
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#D8D8D8",
    width: "40%",
    justifyContent: "space-between",
  },

  addDishes: {
    marginTop: 32,
    width: "70%",
    justifyContent: "space-between",
  },
});
