
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CVProvider, useCVContext } from "../context/CVContext";

export default function RootLayout() {
  return (
    <CVProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => <HeaderProfile />,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Crear CV",
            headerShown: true,
          }}
        />
         <Stack.Screen
          name="profile-image"
          options={{
            title: "Foto de Perfil",
          }}
        />
        <Stack.Screen
          name="personal-info"
          options={{
            title: "Información Personal",
          }}
        />
        <Stack.Screen
          name="experience"
          options={{
            title: "Experiencia Laboral",
          }}
        />
        <Stack.Screen
          name="education"
          options={{
            title: "Educación",
          }}
        />
        <Stack.Screen
          name="skills"
          options={{
            title: "Habilidades",
          }}
        />
        <Stack.Screen
          name="preview"
          options={{
            title: "Vista Previa",
            presentation: "modal",
          }}
        />
      </Stack>
    </CVProvider>
  );
}

function HeaderProfile() {
  const { cvData } = useCVContext();
  const router = useRouter();

  const imageUri = cvData?.personalInfo?.profileImage;
  const fullName = cvData?.personalInfo?.fullName ?? "";

  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <TouchableOpacity
      onPress={() => router.push("/profile-image")}
      style={styles.headerButton}
      accessibilityLabel="Editar foto de perfil"
    >
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.headerImage} />
      ) : (
        <View style={styles.headerPlaceholder}>
          <Text style={styles.headerInitials}>{initials || "?"}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 12,
  },
  headerImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
  },
  headerPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerInitials: {
    color: "#fff",
    fontWeight: "700",
  },
});
