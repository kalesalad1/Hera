import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({

    // Homescreen Styles
    toolBarIcons: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white' 
    },
    

    
    // Welcomescreen Styles
    background: {
        backgroundColor: '#FFFFFF',
        position: 'relative'
    },
    title: {
        position: 'absolute',
        width: 322,
        height: 116,
        left: 23,
        top: 275,
        // fontFamily: 'Shrikhand', //Shrikhand
        fontWeight: 'normal',
        fontSize: 89,
        lineHeight: 130,
        textAlign: 'center',
        color: "#05AFF2",
        zIndex: 999
    },
    loginContainer: {
        backgroundColor: "#05AFF2",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        top: 500,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
       
    },
    emailContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 30,
        left: 16,
        right: 16,
        top: 400,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
     
    },
    passwordContainer: {   
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 30,
        left: 16,
        right: 16,
        top: 450,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
       
    },
    signupContainter: {
        backgroundColor: "#05AFF2",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        top: 620,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 100,
    },
    signupText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
    },
    loginText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
    },
    ellipseOne:{
        position: 'absolute',
        width: 409.56,
        height: 308.85,
        left: 188.5,
        top: 295.34
    },
    vectorOne: {
        position: 'absolute',
        width: 481.45,
        height: 355.29,
        left: -104,
        top: 20,
    }
});

export default LoginStyles;