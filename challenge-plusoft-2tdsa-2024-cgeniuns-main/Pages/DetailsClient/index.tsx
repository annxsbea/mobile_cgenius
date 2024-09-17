import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  DetailsClientRouteProp,
  ListClientsResponse,
  ListEspecificacaoResponse,
  ListScriptsResponse,
  RootStackParamList,
} from '../../@types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import Logo from '../../Componentes/imagens/Logo';
import { styles } from './styles';
import { scriptService } from '../../services/scriptServices';
import { clientService } from '../../services/clienteServices';

type Props = {
  route: DetailsClientRouteProp;
};

export default function DetailsClient({ route }) {
  const { client } = route.params as { client: ListClientsResponse }; // Garantir que o tipo está correto
  const navigation = useNavigation();
  const [script, setScript] = useState<ListScriptsResponse | null>(null);
  const [especificacoes, setEspecificacoes] = useState<ListEspecificacaoResponse[]>([]);

  const getScript = async () => {
      try {
          const response = await scriptService.getScriptById(client.id);
          setScript(response);
      } catch (error) {
        
      }
  };

  const getEspecificacoes = async () => {
      try {
          const response = await clientService.getEspecificacaoById(client.id);
          setEspecificacoes(response);
      } catch (error) {
         
      }
  };

  useEffect(() => {
      getScript();
      getEspecificacoes();
  }, [client.id]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft color="#fff" size={35} />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>

      <View style={styles.clientInfoContainer}>
        <Text style={styles.clientName}>{client.nome_cliente}</Text>
        <Text style={styles.clientProfile}>Perfil do cliente</Text>

        <View style={styles.profileBadge}>
          <Text style={styles.profileText}>{client.perfil_cliente}</Text>
        </View>

        <View style={styles.clientDetailCard}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.clientDetailText}>CPF</Text>
            <Text style={styles.clientDetailValue}>{client.cpf_cliente}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={styles.clientDetailText}>Telefone</Text>
            <Text style={styles.clientDetailValue}>{client.telefone}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={styles.clientDetailText}>E-mail</Text>
            <Text style={styles.clientDetailValue}>{client.email}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={styles.clientDetailText}>DT Nascimento</Text>
            <Text style={styles.clientDetailValue}>{client.dt_nascimento}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={styles.clientDetailText}>Localização</Text>
            <Text style={styles.clientDetailValue}>{client.cep}</Text>
          </View>
        </View>

        <View style={styles.especificacoesCard}>
        {especificacoes.length > 0 ? (
                        especificacoes.map((espec) => (
                            <View key={espec.id} style={{ borderColor: '#B668D1', borderWidth: 1, marginTop: 20, marginLeft: 10, borderRadius: 10, padding: 20 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Tipo de Cartão de Crédito</Text>
                                <Text>{espec.tipoCartaoCredito}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Gasto Mensal</Text>
                                <Text>{espec.gastoMensal}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Renda Mensal</Text>
                                <Text>{espec.rendaMensal}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Viaja Frequentemente</Text>
                                <Text>{espec.viajaFrequentemente !== null ? espec.viajaFrequentemente.toString() : 'Não informado'}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Interesses</Text>
                                <Text>{espec.interesses}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Profissão</Text>
                                <Text>{espec.profissao}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#723990' }}>Dependentes</Text>
                                <Text>{espec.dependentes !== null ? espec.dependentes.toString() : 'Não informado'}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>Carregando especificações...</Text>
                    )}
        </View>
      </View>

      <Text style={styles.scriptTitle}>Script Gerado</Text>
      <View style={styles.scriptContainer}>
      {script ?(
        
            <View  style={{ marginTop: 10 }}>
              <Text style={styles.scriptDescription}>Descrição:</Text>
              <Text style={styles.noDataText}>{script.descricao_script ?? 'Não disponível'}</Text>
            </View>
       ): (
        <Text>Carregando scripts...</Text>
    )} 
      </View>
    </ScrollView>
  );
}
