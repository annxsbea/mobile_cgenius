// src/screens/DetailsClient.styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'black',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 60,
  },
  backButton: {
    marginLeft: 50,
  },
  logoContainer: {
    backgroundColor: '#0000',
    marginLeft: 50,
  },
  clientInfoContainer: {
    padding: 20,
  },
  clientName: {
    color: '#fff',
    textAlign: 'left',
    marginTop: 30,
    fontSize: 25,
    marginRight: 20,
  },
  clientProfile: {
    color: '#8175BF',
    textAlign: 'left',
    marginTop: 30,
    fontSize: 15,
    marginRight: 20,
  },
  profileBadge: {
    backgroundColor: '#ACABBA',
    borderRadius: 10,
    marginTop: 10,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: '#0F3A3A',
    fontWeight: 'bold',
    fontSize: 15,
  },
  clientDetailCard: {
    padding: 20,
    backgroundColor: '#232230',
    borderRadius: 10,
    marginTop: 20,
  },
  clientDetailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9987A3',
  },
  clientDetailValue: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  especificacoesCard: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#181724',
    borderRadius: 10,
  },
  especificacoesTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scriptTitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  scriptContainer: {
    marginTop: 20,
    backgroundColor: '#201F36',
    borderRadius: 42,
    padding: 30,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.8,
  },
  scriptDescription: {
    color: '#fff',
    fontSize: 18,
  },
  noDataText: {
    color: '#fff',
    fontSize: 16,
  },
});
