import React, { useState } from "react";
import { ScrollView, Text, View, Button, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ResultadoPerfilScreen } from "../../@types";
import { Image } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig"; 

export default function TestePerson() {
  const [comunicacao, setComunicacao] = useState("1");
  const [avaliacaoProduto, setAvaliacaoProduto] = useState("1");
  const [empatia, setEmpatia] = useState("1");
  const [produtosComplexos, setProdutosComplexos] = useState("Sim");
  const [trabalhoEquipe, setTrabalhoEquipe] = useState("1");
  const [perfil, setPerfil] = useState<string | null>(null);
  const [error, setError] = useState("");
  const navigationResultado = useNavigation<ResultadoPerfilScreen>();
const [user, setUser] = useState<any>(null);
  const calcularPerfil = async () => {
    let perfil = "Expressivo";

    if (comunicacao === "5" && empatia === "5") {
      perfil = "Diplomático";
    } else if (comunicacao === "1" && empatia === "1") {
      perfil = "Pragmático";
    }

    if (user) {
      try {
        const userRef = doc(database, "usuarios", user.uid);
        await updateDoc(userRef, { perfil });
        console.log("Perfil atualizado no Firestore:", perfil);

        navigationResultado.navigate("ResultadoPerfil", { perfil });
      } catch (error) {
        setError("Erro ao atualizar o perfil, tente novamente.");
      }
    } else {
      setError("Usuário não autenticado.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 10 }}>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text style={{ color: "#595085", fontSize: 20 }}>
          Teste de Personalidade
        </Text>
      </View>

      <ScrollView
        style={{
          borderWidth: 1,
          borderColor: "#6A2B75",
          margin: 10,
          borderRadius: 10,
          height: 900,
          marginTop: 30,
        }}
      >
        <View style={{ padding: 10 }}>
          {/* Pergunta 1 */}
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                flex: 1,
              }}
            >
              <Text style={{ color: "#850F98", fontSize: 45 }}>1</Text>
              <Text style={{ color: "#595085", fontSize: 20, marginLeft: 25 }}>
                Como você avaliaria suas habilidades de comunicação em uma
                escala de 1 a 5?
              </Text>
            </View>
            <RadioButton.Group
              onValueChange={(value) => setComunicacao(value)}
              value={comunicacao}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <View
                  key={num}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <RadioButton value={String(num)} />
                  <Text style={{ color: "#595085" }}>{num}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          {/* Pergunta 2 */}
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                flex: 1,
              }}
            >
              <Text style={{ color: "#850F98", fontSize: 45 }}>2</Text>
              <Text style={{ color: "#595085", fontSize: 20, marginLeft: 25 }}>
                Como você classificaria sua capacidade de avaliar o conhecimento
                do produto que o cliente possui?
              </Text>
            </View>
            <RadioButton.Group
              onValueChange={(value) => setAvaliacaoProduto(value)}
              value={avaliacaoProduto}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <View
                  key={num}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <RadioButton value={String(num)} />
                  <Text style={{ color: "#595085" }}>{num}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          {/* Pergunta 3 */}
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                flex: 1,
              }}
            >
              <Text style={{ color: "#850F98", fontSize: 45 }}>3</Text>
              <Text style={{ color: "#595085", fontSize: 20, marginLeft: 25 }}>
                Como você avaliaria seu nível de empatia ao lidar com clientes
                em uma escala de 1 a 5?
              </Text>
            </View>
            <RadioButton.Group
              onValueChange={(value) => setEmpatia(value)}
              value={empatia}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <View
                  key={num}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <RadioButton value={String(num)} />
                  <Text style={{ color: "#595085" }}>{num}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          {/* Pergunta 4 */}
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                flex: 1,
              }}
            >
              <Text style={{ color: "#850F98", fontSize: 45 }}>4</Text>
              <Text style={{ color: "#595085", fontSize: 20, marginLeft: 25 }}>
                Você se sente confortável lidando com produtos complexos?
              </Text>
            </View>
            <RadioButton.Group
              onValueChange={(value) => setProdutosComplexos(value)}
              value={produtosComplexos}
            >
              {["Sim", "Não"].map((opcao) => (
                <View
                  key={opcao}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <RadioButton value={opcao} />
                  <Text style={{ color: "#595085" }}>{opcao}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          {/* Pergunta 5 */}
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                flex: 1,
              }}
            >
              <Text style={{ color: "#850F98", fontSize: 45 }}>5</Text>
              <Text style={{ color: "#595085", fontSize: 20, marginLeft: 25 }}>
                Como você classificaria suas habilidades de trabalho em equipe
                em uma escala de 1 a 5?
              </Text>
            </View>
            <RadioButton.Group
              onValueChange={(value) => setTrabalhoEquipe(value)}
              value={trabalhoEquipe}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <View
                  key={num}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <RadioButton value={String(num)} />
                  <Text style={{ color: "#595085" }}>{num}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          <Pressable
            onPress={calcularPerfil}
            style={{ backgroundColor: "#850F98", padding: 10, borderRadius: 5,width:200,alignSelf:'center',marginTop:20,alignItems:'center',justifyContent:'center'}}
          >
            <Text style={{ color: "white" }}>Enviar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
