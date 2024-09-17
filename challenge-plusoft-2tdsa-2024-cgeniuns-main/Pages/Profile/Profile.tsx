import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../Componentes/imagens/Logo";
import Person from "../../Componentes/imagens/Person";
import { Card } from "react-native-paper";
import { auth } from "../../firebaseConfig";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AtendenteResponse, SignInScreenProp, TestePersonScreenProp } from "../../@types";
import styles from "./styles";
export  function Profile({ route }) {  
  const navigationSingin = useNavigation<SignInScreenProp>();
  const navigationTestePerson = useNavigation<TestePersonScreenProp>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const { setUserLogged, userLogged } = route.params;
  const navigation = useNavigation();
  const [atendente, setAtendente] = React.useState<AtendenteResponse[]>([]);
  

  const Atendente: AtendenteResponse[] = atendente;
  const handleLogout = async () => {
    setLoading(true);
    try {
      setUserLogged(false);
-      navigationSingin.navigate("SignIn");
    } catch (error) {
      setError("Erro ao sair. Tente novamente.");
      console.error("Error during sign out:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleNavigateToTestePerson = () => {
  //   if (user?.perfil) {
  //     navigationTestePerson.navigate("ResultadoPerfil", {
  //       perfil: user.perfil,
  //     });
  //   } else {
  //     setLoading(true);
  //     setTimeout(() => {
  //       navigationTestePerson.navigate("TestePerson");
  //       setLoading(false);
  //     }, 500);
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.personIconContainer}>
          <Person />
        </View>
        <View>
          <Text style={styles.nameText}>{userLogged?.name}</Text>
          <Text style={styles.cpfText}>{userLogged?.cpf}</Text>
          <Text style={styles.setorText}>{userLogged?.setor}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (userLogged?.perfil) {
            navigationTestePerson.navigate("ResultadoPerfil", { perfil: userLogged.perfil });
          } else {
            alert("Perfil não disponível! Faça o teste.");
          }
        }}
        style={styles.personalitiesContainer}
      >
        <Text style={styles.sectionTitle}>Personalidades</Text>
        <Card style={styles.card}>
          <Text style={styles.cardText}>
            {userLogged?.perfil || "Não disponível! Faça o teste"}
          </Text>
        </Card>
      </TouchableOpacity>
      <View style={styles.testsContainer}>
        <Text style={styles.sectionTitle}>Testes</Text>
        {/* <TouchableOpacity
          onPress={handleNavigateToTestePerson}
          style={styles.testButton}
        >
          <View style={styles.testButtonContent}>
            <Ionicons name="person" color={"#A99EDE"} size={30} />
            <Text style={styles.testButtonText}>Personalidade</Text>
          </View>
          <Text style={styles.testButtonDescription}>
            {user?.perfil
              ? "Você já fez o teste! Veja seu perfil"
              : "Faça o Teste e descubra qual o seu perfil de Vendedor!!"}
          </Text>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Profile;
