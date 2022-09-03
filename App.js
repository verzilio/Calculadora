 import  React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState("20");
  const [valor2, setValor2] = useState("3");
  const [resultado, setResultado] = useState();
  function somar(){
	  
	  let r = parseFloat(valor1) + parseFloat(valor2);
	  setResultado(r);
  }
	function subtrair(){
	  
	  let r = parseFloat(valor1) - parseFloat(valor2);
	  setResultado(r);
  }
	function multiplicar(){
	  
	  let r = parseFloat(valor1) * parseFloat(valor2);
	  setResultado(r);
  }
	function dividir (){
	  
	  let r = parseFloat(valor1) / parseFloat(valor2);
	  setResultado(r);
  }
	function exponenciacao (){
	  
	  let r = Math.pow(parseFloat(valor1) , parseFloat(valor2));
	  setResultado(r);
  }
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
		  	<Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Valor 1: </Text>
			 <TextInput 
				 style={styles.input}
				 value={valor1}
				 onChangeText={(valor)=>setValor1(valor)}
				 keyboardType="numeric"//aparece somente o teclado numerico
			/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Valor 2: </Text>
			<TextInput 
				style={styles.input}
				value={valor2}
				onChangeText={(valor)=>setValor2(valor)}
				keyboardType="numeric"//aparece sรณ o teclado numerico

			/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>
			  	 Resultado: {resultado}
			  </Text>
		  </View>
		  <br></br>
		  <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={somar}	
			>
				<Text style={styles.textoBotao}>SOMAR</Text>  
			</TouchableOpacity>
		  </View>
		   <br></br>
		  <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={subtrair}	
			>
				<Text style={styles.textoBotao}>SUBTRAIR</Text>  
			</TouchableOpacity>
		  </View>
		   <br></br>
		  <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={multiplicar}	
			>
				<Text style={styles.textoBotao}>MULTIPLICAR</Text>  
			</TouchableOpacity>
		  </View>
		   <br></br>
		  <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={dividir}	
			>
				<Text style={styles.textoBotao}>DIVIDIR</Text>  
			</TouchableOpacity>
		  </View>
		   <br></br>
		   <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={exponenciacao}	
			>
				<Text style={styles.textoBotao}>EXPONENCIAÇÃO</Text>  
			</TouchableOpacity>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  margin: 20
	  
  },
	bloco: {
		margintop: 20,
	},
	titulo: {
		
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	input: {
		borderWidth:2,
		fontSize: 20,
		borderRadius: 5
	},
	botao: {
		backgroundColor:'#40E7',
		borderRadius:20,
		width: 200,
		marginLeft: 60
	},
	textoBotao: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	}
	
});