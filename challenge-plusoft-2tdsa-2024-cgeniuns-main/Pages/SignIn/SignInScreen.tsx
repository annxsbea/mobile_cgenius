import React, { useState } from "react";
import { Card, TextInput, Snackbar, ActivityIndicator } from "react-native-paper";
import { Pressable, View, Text,  ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { AtendenteResponse, HomeScreenProp, SignUpScreenProp, UserDetails } from "../../@types";
import { storeData } from "../../hooks";
import styles from "./styles";
import Logo from "../../Componentes/imagens/Logo";
import Fundo from "../../Componentes/imagens/Fundo";
import { authService } from "../../services/authService";

export default function SignInScreen({ setUserLogged }) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const navigation = useNavigation<HomeScreenProp>();
  const navigationSignUp = useNavigation<SignUpScreenProp>();


  const Logar = async () => {
    if (!cpf || !senha) {
        setError('Por favor, preencha todos os campos.');
        return;
    }

    setLoading(true);
    setError('');

    try {
        const response = await authService.login({ cpf, senha });
        console.log("Resposta do login:", response);  
        const atendenteResponse: AtendenteResponse = {
            id: response.id, 
            nome_atendente: response.nome,
            cpf_atendente: response.cpf,
            setor: response.setor,
            senha: senha, 
            perfil_atendente: response.perfil,
            token: response.token 
        };
        console.log("Atendente Response:", atendenteResponse);
        setUserLogged(atendenteResponse);
        await storeData(atendenteResponse);
        navigation.navigate('Home');
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message || 'Erro ao fazer login. Tente novamente mais tarde.';
            setError(message);
            console.error("API Response Error:", message);
        } else {
            setError('Erro ao fazer login. Verifique sua conexão ou credenciais.');
            console.error("Network or Unexpected Error:", error);
        }
    } finally {
        setLoading(false);
    }
};




  const handleSignUp = () => {
    navigationSignUp.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Fundo />
      </View>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.overlay} />
          <Text style={styles.cardTitle}>Login</Text>
          <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>

          <Card.Content style={styles.cardContent}>
            <TextInput
              label="cpf"
              value={cpf}
              onChangeText={(text) => setCpf(text)}
              placeholder=""
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              textColor="#fff"
              mode="outlined"
              outlineColor="#54476b"
            />
            <TextInput
              label="Senha"
              value={senha}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={true}
              style={styles.textInput}
              textColor="#fff"
              mode="outlined"
              outlineColor="#54476b"
            />
          </Card.Content>
          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={["#8740CD", "#4b05ad"]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.gradientButton1}
            >
              <Pressable onPress={Logar}>
               
                  <Text style={styles.buttonText}>Login</Text>
               
              </Pressable>
            </LinearGradient>
          </View>

          <Text style={styles.signUpText}>
            Não tem conta?{" "}
            <Text onPress={handleSignUp} style={styles.signUpLink}>
              Criar
            </Text>
          </Text>
        </ScrollView>
        <Snackbar
          visible={!!error}
          onDismiss={() => setError("")}
          duration={3000}
          style={styles.snackbar}
        >
          {error}
        </Snackbar>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
