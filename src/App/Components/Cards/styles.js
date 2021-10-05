

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    stretch: {
        width: 50,
        height: 200,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"

      },

    card:{
       borderRadius:0.45,
       shadowRadius:25,
       shadowColor:'#000',
        shadowOpacity:0.08,
        shadowOffset:{width:0, height:0},
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff'
        
        

    },

    cardImage:{
      width: 400,
      flex:1,
      resizeMode: 'contain'
    },

    container:{
       flex:1,
       backgroundColor: '#fff',
       alignItems:'center',
       justifyContent:'center'
    },

    swipe:{
      
    }
});

export default styles;