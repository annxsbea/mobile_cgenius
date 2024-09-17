import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { Card, TextInput, Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenProp } from "../../@types";
import { cpfMask } from "../../lib";
import Logo from "../../Componentes/imagens/Logo";
import { LinearGradient } from "expo-linear-gradient";
import Fundo from "../../Componentes/imagens/Fundo";
import styles from "./styles";
import { SignUpResponse } from "../../@types/apis/auth";
import { authService } from "../../services/authService";

export default function SignUpScreen({ setUserLogged }) {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [setor, setSetor] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const navigationSingin = useNavigation<SignInScreenProp>();
  const [loading, setLoading] = useState(false); 

  const cadastrarUsuario = async () => {
    // Verifica se todos os campos foram preenchidos
    if (!cpf || !nome || !setor || !senha) {
        setError("Por favor, preencha todos os campos.");
        return;
    }

    // Inicia o estado de carregamento
    setLoading(true);
    setError("");

    try {
        // Tenta fazer o cadastro chamando o serviço de autenticação
        const response: SignUpResponse = await authService.register({
            cpf,
            senha,
            nome,
            setor,
            perfil: "teste",
        });

        // Limpa os campos e o estado de erro após o cadastro
        setCpf("");
        setNome("");
        setSetor("");
        setSenha("");
        setError("");

        // Navega para a tela de login
        navigationSingin.navigate("SignIn");
    } catch (error) {
        if (error.response && error.response.data) {
            setError(error.response.data.message || "Erro ao cadastrar usuário. Tente novamente mais tarde.");
        } else {
            setError("Erro ao cadastrar usuário. Tente novamente mais tarde.");
        }
    } finally {
        setLoading(false);
    }
};


  const Logar = () => {
    navigationSingin.navigate("SignIn");
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
          <Text style={styles.cardTitle}>Criar Conta</Text>
          <Text style={styles.welcomeText}>Seja Bem-vindo!</Text>
          <ScrollView style={styles.scrollView}>
            <Card.Content>
              <TextInput
                label={"Email"}
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
                textColor="#fff"
                mode="outlined"
                outlineColor="#54476b"
              />
              <TextInput
                label="CPF"
                value={cpf}
                onChangeText={(text) => setCpf(cpfMask(text))}
                keyboardType="numeric"
                style={styles.textInput}
                textColor="#fff"
                mode="outlined"
                outlineColor="#54476b"
              />
              <TextInput
                label="Nome"
                value={nome}
                onChangeText={(text) => setNome(text)}
                style={styles.textInput}
                textColor="#fff"
                mode="outlined"
                outlineColor="#54476b"
              />
              <TextInput
                label="Setor"
                value={setor}
                onChangeText={(text) => setSetor(text)}
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
                <Pressable style={styles.pressable} onPress={cadastrarUsuario}>
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
              </LinearGradient>
            </View>
            <Text style={styles.signInText}>
              Já tem conta?{" "}
              <Text onPress={Logar} style={styles.signInLink}>
                Entrar
              </Text>
            </Text>
          </ScrollView>
        </ScrollView>
        <Snackbar
          visible={!!error}
          onDismiss={() => setError("")}
          duration={3000}
          style={styles.snackbar}
        >
          {error}
        </Snackbar>
        
      </SafeAreaView>
    </View>
  );
}
