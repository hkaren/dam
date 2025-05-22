import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sectionLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#888',
    marginTop: 10,
  },
  dropdownField: {
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 16,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 18,
  },
  dropdownArrow: {
    fontSize: 18,
    color: '#888',
  },
  inputLabel: {
    color: '#bbb',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  inputField: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
  },
  inputText: {
    fontSize: 18,
  },
  placeholderText: {
    color: '#bbb',
  },
  buttonGroup: {
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#eaf6fa',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryButton: {
    backgroundColor: '#eaf6fa',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
});
export default styles;