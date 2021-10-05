// import * as React from 'react';
// import {useState, useEffect} from 'react'
// import { Text, View, Image, Dimensions, Animated, ImageBackground, PanResponder} from 'react-native';
// import styles from './styles.js'
// import { render } from 'react-dom';

// const SCREEN_HEIGHT = Dimensions.get('window').height
// const SCREEN_WIDTH = Dimensions.get('window').width



// export default class Cards extends React.Component{
    
 
//     constructor(){
//         super()
//     //     this.firestoreRef = database.collection('Users').doc('UserData');
//          this.position = new Animated.ValueXY()
//          this.state ={
//              currentIndex: 0,
//              userArr: [],
//          }
//          this.rotate = this.position.x.interpolate({
//              inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
//              outputRange:['-15deg', '0deg', '15deg'],
//              extrapolate: 'clamp'
//          })
//          this.rotateAndTranslate = {
//              transform:[{
//                  rotate: this.rotate
//              },
//              ...this.position.getTranslateTransform()
//             ]
//          }
//          this.likeOpacity = this.position.x.interpolate({
//             inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
//             outputRange:[0, 0, 100],
//             extrapolate: 'clamp'
//          })
//          this.dislikeOpacity = this.position.x.interpolate({
//             inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
//             outputRange:[100, 0, 0],
//             extrapolate: 'clamp'
//          })

//          this.nextCardOpacity = this.position.x.interpolate({
//             inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
//             outputRange:[1, 0, 1],
//             extrapolate: 'clamp'
//          })
//          this.nextCardScale = this.position.x.interpolate({
//             inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
//             outputRange:[1, 0.8, 1],
//             extrapolate: 'clamp'
//          })
//      }
  
//      componentDidMount() {
//         this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
//       }

     

//     //   getCollection = (querySnapshot) => {
//     //     const userArr = [];
//     //     querySnapshot.forEach((res) => {
//     //         console.log(res.data())
//     //       const { firstName, lastName, age, img} = res.data();
//     //       userArr.push({
//     //         key: res.key,
//     //         res,
//     //         firstName,
//     //         lastName,
//     //         age,
//     //         img,
//     //       });
//     //     });
//     //     this.setState({
//     //       userArr,
//     //      });
//     //   }
//     // UNSAFE_componentWillMount = () =>{
        
//     //     this.PanResponder = PanResponder.create({
        
//     //         onStartShouldSetPanResponder:(evt,gestureState) => true,
//     //         onPanResponderMove:(evt,gestureState)=>{
//     //                 this.position.setValue({x: gestureState.dx, y: gestureState.dy})
//     //         },
//     //         onPanResponderRelease:(evt,gestureState)=>{
               
//     //             if (gestureState.dx > 120) {
//     //                 Animated.spring(this.position, {
//     //                     useNativeDriver:true,
//     //                   toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
//     //                 }).start(() => {
//     //                   this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
//     //                     this.position.setValue({ x: 0, y: 0 })
//     //                   })
//     //                 })
//     //               }else if (gestureState.dx < -120) {
//     //                 Animated.spring(this.position, {
//     //                     useNativeDriver:true,
//     //                   toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
//     //                 }).start(() => {
//     //                   this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
//     //                     this.position.setValue({ x: 0, y: 0 })
//     //                   })
//     //                 })
//     //             }
//     //             else {
//     //                 Animated.spring(this.position, {
//     //                    useNativeDriver:true,
//     //                    toValue: { x: 0, y: 0 },
//     //                    friction: 4
//     //                    }).start()
//     //                 } 
//     //         }
//     //     })
//     //     }


//     renderUsers = () => {
        
//     //     return this.state.userArr.map((person, i) => {
//     //         console.log(person)
//     //         if(i < this.state.currentIndex)
//     //         {
//     //             return null
//     //         }
//     //         else if(i == this.state.currentIndex){
//     //             return(
//     //                 <Animated.View
//     //                 {...this.PanResponder.panHandlers}
//     //                  style = {[this.rotateAndTranslate,{borderRadius: 30, marginTop: 100, marginLeft: -195, height: SCREEN_HEIGHT-200, width: SCREEN_WIDTH, padding:20, position:'absolute', justifyContent:'center'}]}>
//     //                 <Animated.View    style = {{opacity:this.likeOpacity, transform:[{rotate:'-30deg'}],position:'absolute', top:1, left:10, zIndex:1000}}>
//     //                     <Text style={{borderWidth:1, borderColor:'green', color:'green', fontSize:32, fontWeight:'800',padding:10 }}>LIKE</Text>
//     //                 </Animated.View>
//     //                 <Animated.View    style = {{opacity:this.dislikeOpacity, transform:[{rotate:'30deg'}],position:'absolute', top:1, right:10, zIndex:1000}}>
//     //                     <Text    key = "7"  style={{borderWidth:1, borderColor:'red', color:'red', fontSize:32, fontWeight:'800',padding:10 }}>DISLIKE</Text>
//     //                 </Animated.View>
                    
//     //                 <ImageBackground
//     //                 key = {person.img}
//     //                 style ={{flex:1, height: null, width: null, borderRadius:30}}
//     //                 source = {person.img}
//     //                 >
//     //                 <Text
//     //                     key =  {`${person.firstName} ${person.lastName}, ${person.age}`}
//     //                     style = {{
//     //                    fontSize:25,
//     //                    color:'white',
//     //                    marginTop:560,
//     //                    marginLeft:15
//     //                 }}>
//     //                     {`${person.firstName} ${person.lastName}, ${person.age}`}
//     //                 </Text>
    
//     //                 </ImageBackground>
//     //                 </Animated.View>
//     //             )
//     //         }
//     //         else{
//     //             return(
//     //                 <Animated.View
//     //                  style = {[{opacity:this.nextCardOpacity, transform:[{scale:this.nextCardScale}]},{borderRadius: 30, marginTop: 100, marginLeft: -195, height: SCREEN_HEIGHT-200, width: SCREEN_WIDTH, padding:20, position:'absolute', justifyContent:'center'}]}>
//     //                 <ImageBackground 
//     //                  key = {person.img}
//     //                 style ={{flex:1, height: null, width: null, borderRadius:30}}
//     //                 source = {person.img}
//     //                 >
//     //                 <Text 
                    
//     //                   key = {`${person.firstName} ${person.lastName}, ${person.age}`}
//     //                 style = {{
//     //                    fontSize:25,
//     //                    color:'white',
//     //                    marginTop:560,
//     //                    marginLeft:15
//     //                 }}>
//     //                      {`${person.firstName} ${person.lastName}, ${person.age}`}
//     //                 </Text>
//     //                 </ImageBackground>
                    
//     //                 </Animated.View>
//     //             )

//     //         }
        
           
//     //         }).reverse()
//     // }
  




// render(){
//    return (
//         <View style = {{flex:1}}>
//           <View style={{height:60}}>
//               <View style = {{borderRadius: 30}}>
//          {this.renderUsers()}
//           </View>
//          </View>
//          </View>
//     );
//   }
// }
