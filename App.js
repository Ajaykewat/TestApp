import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { Children, useState } from 'react'
import { Body, Button, H1, H2,StylesTextInput } from './src/Tags'

const App = () => {
  const[firstname,setfirstname] = useState('');
  const[lastname,setlastname] = useState('');
  const[number,setnumber] = useState('');

  const HandleClick = ()=>{
Alert.alert("","hello")
  }
  return (
   <Body>
    <H1>hello</H1>
<H2>hello</H2>
<StylesTextInput
label="first name"
placeholder="first name"
placeholderTextColor= "green"
onChangeText = {setfirstname}
value = {firstname}
keyboardType = "default"
/>
<StylesTextInput
label="last name"
placeholder="last name"
placeholderTextColor= "green"
onChangeText = {setlastname}
value = {lastname}
keyboardType = "default"
/>
<StylesTextInput
label="phone number"
placeholder="phone number"
placeholderTextColor= "green"
onChangeText = {setnumber}
value = {number}
keyboardType = "numeric"
/>
<Text>{firstname +" "+lastname + " "+ number}</Text>

<Button Press = { HandleClick} Title =" Click me"/>
</Body>

  )
}



export default App