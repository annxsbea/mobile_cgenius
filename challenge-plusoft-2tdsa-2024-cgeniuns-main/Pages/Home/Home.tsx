import React from "react";
import { View, Text, ScrollView } from "react-native";
import Carrossel from "../../Componentes/Carrossel";
import Logo from "../../Componentes/imagens/Logo";
import Grafic1 from "../../Componentes/imagens/grafic1";
import Grafic2 from "../../Componentes/imagens/Grafic2";
import { styles } from './styles';
import { AtendenteResponse } from "../../@types";

export default function Home() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo, Usuário! 👋🏼</Text>
      </View>

      <Carrossel />

      <View style={styles.graficContainer}>
        <Grafic1 />
      </View>

      <View style={styles.graficPadding}>
        <Grafic2 />
      </View>
    </ScrollView>
  );
}
