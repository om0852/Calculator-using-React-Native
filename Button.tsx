import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  name: string;
  bgColor: string;
  value:string;
  color1:string;
  setExpression:any
  expression:any
}
const Button: React.FC<ButtonProps> = ({ name, bgColor ,color1,value,setExpression,expression}) => {
    const [stateCounter,setStateCounter]=useState<boolean>(false);
const handleExpression=(e:any,value:string)=>{
if(value=="C"){
    setExpression("");
}
else if(value=="="){
    const result=eval(expression);
    setExpression(result);
}
else if(value=="()"){
    if(stateCounter==false){
        setExpression(prev=>prev+"(");
    }
    else{
        setExpression(prev=>prev+")");

    }
    setStateCounter(prev=>!prev);

}
else{
    setExpression(prev=>prev+value)
}
}


  return (
    <TouchableOpacity onPress={(e)=>handleExpression(e,value)} style={[styles.button, { backgroundColor: bgColor }]}>
      <Text style={{color:color1,fontSize:24}}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
margin:10,
    height: 70, // Adjust height according to your requirement
    borderRadius: 35, // Half of the height to make it a circle
    alignItems: "center",
    justifyContent: "center",
    // You can add more styles like padding, margin, etc. here
  },
});

export default Button;
