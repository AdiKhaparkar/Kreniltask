import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View,TouchableOpacity,Text, Modal, Button,TextInput, FlatList } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { modalopen, editmodalopen,userage,username,userpincode,userdata,updateuserdata,index } from '../../Redux/action/action';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.adi.count);
  const editmodal = useSelector(state=>state.adi.editmodal);
  const name = useSelector(state=>state.adi.name);
  const age = useSelector(state=>state.adi.age);
  const Data = useSelector(state=>state.adi.Data);
  const pincode = useSelector(state=>state.adi.pincode);
  const index = useSelector(state=>state.adi.index);
  
  
  const renderitem = ({ item,index }) => {
    return (
      <View>
        <View>
          <Text style={styles.buttonTextStyle}>{item.name}</Text>
        <Text style={styles.buttonTextStyle}>{item.age}</Text>
        <Text style={styles.buttonTextStyle}>{item.pincode}</Text>
        <Button title='EDIT' onPress={() => {
          dispatch(editmodalopen(true))
          dispatch(index(index))
        }} />
        
        <Button title='DELETE'  />
        </View>
        
        <Modal visible={editmodal} animationType='slide'>
            <TextInput style={styles.buttonTextStyle}  onChangeText={(val)=>{dispatch(username(val))}} >{item.name}</TextInput>
            <TextInput style={styles.buttonTextStyle}  onChangeText={(val)=>{dispatch(userage(val))}} >{item.age}</TextInput>
            <TextInput style={styles.buttonTextStyle}  onChangeText={(val)=>{dispatch(userpincode(val))}} >{item.pincode}</TextInput>
            <Button title='update' onPress={() =>{
            dispatch(updateuserdata(name,age,pincode))
            dispatch(editmodalopen(false))
            dispatch(username(""))
            dispatch(userage(""))
            dispatch(userpincode(""))
            
          }}
           />
            <Button title='close'  onPress={() =>{ 
            dispatch(editmodalopen(false))
            dispatch(username(""))
            dispatch(userage(""))
            dispatch(userpincode(""))}}       />
        </Modal>

      </View>
    )
  }

return (
    <SafeAreaView>
      <Button title='Add' onPress={() => dispatch(modalopen(true))}/>
      <Modal visible={count} animationType='slide'>
        <TextInput placeholder='Username' onChangeText={(val)=>{dispatch(username(val))}}    />
        <TextInput placeholder='Age'      onChangeText={(val)=>{dispatch(userage(val))}}     />
        <TextInput placeholder='Pincode'  onChangeText={(val)=>{dispatch(userpincode(val))}} />
        <Button  title='Submit' onPress={() => {
          dispatch(userdata(name,age,pincode))
          dispatch(modalopen(false))}}/>

      </Modal>
      <FlatList 
      renderItem={renderitem}
      data={Data}
      
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 20,
    color:"black"
},
buttonStyle: {
  backgroundColor: 'white',
  marginHorizontal: 20,
 // width: 40,
 //height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 40
},
})