import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from 'react'

 
 export const Button = ({Press,Title})=>{
    return(
      <View style={Styles.StyleView}>
        <TouchableOpacity
        style={Styles.StyleButton}
         onPress={Press}>
            <Text style={Styles.StyleButtonText} >
            {Title}
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
 export const  H1 = (props)=>{
    return(
      <View >
        <Text style={Styles.h1} {...props}> {props.children}</Text>
      </View>
    )
  }
 export const  H2 = (props)=>{
    return(
      <View >
        <Text style={Styles.h2} {...props}> {props.children}</Text>
      </View>
    )
  }
 export const  Body = (props)=>{
    return(
      <View style={Styles.Body} {...props}> 
       
      </View>
    )
  }
 export const  StylesTextInput = ({label,placeholder,placeholderTextColor,onChangeText,value,keyboardType})=>{
    return(
      <View  style={Styles.StyleView}> 
    
       <TextInput 
       style={Styles.StyleInput}
       placeholder={placeholder}
       placeholderTextColor={placeholderTextColor}
       onChangeText={onChangeText}
       value={value}
       keyboardType={keyboardType}
        />
        <Text style={Styles.StyleText}>{label}</Text>
      </View>
    )
  }
  
  const Styles = StyleSheet.create({
    Body:{
        paddingHorizontal:20,paddingVertical:10,backgroundColor:"#fff",flex:1
    },

    h1:{
      fontSize:18,color:"green",padding:5,backgroundColor:"#fff",borderColor:"green",borderWidth:1,margin:5
    },
    h2:{
      fontSize:20,color:"red",
      padding:5,backgroundColor:"#fff",borderColor:"green",borderWidth:1,margin:5
    },
    StyleView:{
marginVertical:10
    },
StyleInput:{
       height:60,
        paddingHorizontal:10,
        borderRadius:10,
        fontSize:16,
        backgroundColor:"pink",
        marginTop:20,
        color:"white"
    },
    StyleText:{
        position:"absolute",left:10,fontSize:20,fontWeight:"bold",top:-5
    },
    StyleButton:{
        borderRadius:10,
        backgroundColor:"pink",
    },
    StyleButtonText:{
        color:"blue",
      padding:20,
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold"
    }
  })