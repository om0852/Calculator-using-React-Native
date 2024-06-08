import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,FlatList } from 'react-native';
import Button from './Button';
import { useState } from 'react';
const buttonData = [
  {
    name: "C",
    color: "red",
    background: "#595957",
    value: "C"
  },
  {
    name: "()",
    color: "green",
    background: "#595957",
    value: "()"
  },
  {
    name: "%",
    color: "green",
    background: "#595957",
    value: "%"
  },
  {
    name: "/",
    color: "green",
    background: "#595957",
    value: "/"
  },
  {
    name: "7",
    color: "white",
    background: "#595957",
    value: "7"
  },
  {
    name: "8",
    color: "white",
    background: "#595957",
    value: "8"
  },
  {
    name: "9",
    color: "white",
    background: "#595957",
    value: "9"
  },
  {
    name: "X",
    color: "green",
    background: "#595957",
    value: "*"
  },
  {
    name: "4",
    color: "white",
    background: "#595957",
    value: "4"
  },
  {
    name: "5",
    color: "white",
    background: "#595957",
    value: "5"
  },
  {
    name: "6",
    color: "white",
    background: "#595957",
    value: "6"
  },
  {
    name: "-",
    color: "green",
    background: "#595957",
    value: "-"
  },
  {
    name: "1",
    color: "white",
    background: "#595957",
    value: "1"
  },
  {
    name: "2",
    color: "white",
    background: "#595957",
    value: "2"
  },
  {
    name: "3",
    color: "white",
    background: "#595957",
    value: "3"
  },
  {
    name: "+",
    color: "green",
    background: "#595957",
    value: "+"
  },
  {
    name: "+/-",
    color: "white",
    background: "#595957",
    value: "+/-"
  },
  {
    name: "0",
    color: "white",
    background: "#595957",
    value: "0"
  },
  {
    name: ".",
    color: "white",
    background: "#595957",
    value: "."
  },
  {
    name: "=",
    color: "white",
    background: "green",
    value: "="
  }
];


export default function App() {
  const [expression,setExpression]=useState<string>("")
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputSection}>
<Text style={{color:"white",backgroundColor:"black",marginTop:130,height:70,textAlign:"right",paddingRight:30,paddingTop:10,fontSize:35}}>{expression}</Text>
      </View>
<View style={{width:300,height:60}}>
  <Text onPress={(e)=>{
  const result = expression.slice(0, -1);
  setExpression(result)
  }} style={{textAlign:"right",color:"white",fontSize:30}}>X</Text>
</View>
      
    <FlatList
      data={buttonData}
      numColumns={4}
      renderItem={({ item }) => (
        <Button name={item.name} bgColor={item.background} color1={item.color} value={item.value} expression={expression} setExpression={setExpression}/>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSection:{
    width:400,
    height:300
  }
});
