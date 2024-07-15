import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  texto:{
    color:'red'
  },
  container:{
    flex:1,
    backgroundColor:'#222',
    borderRadius:15
  },
  area:{
    borderRadius:15,
    flex:1,
    backgroundColor:'white',
    alignItems:'center'
  },
  control:{
    flexDirection:'row',
    gap:20,
    alignItems:'center',
    margin:20
  },
  controlText:{
    color:'white'
  },
  controlButton:{
    flex:1,
    height:100,
    backgroundColor:'white',
    justifyContent:'center',
    borderRadius:10,
    alignItems:'center'
  },
  ControlBollText:{
    fontSize:32
  }
})