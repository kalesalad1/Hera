import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // Homescreen Styles
    toolBarIcons: {
     height:'100%',
     width:'100%',
    marginTop:'20%'
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
        fontWeight: 'normal',
        fontSize: 89,
        lineHeight: 130,
        textAlign: 'center',
        color: "#05AFF2",
        zIndex: 999
    },
    loginContainter: {
        backgroundColor: "#05AFF2",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        top: 550,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 100,
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
    },

      //New Reminder Styles
     newReminderTitle: {
        fontWeight: 'normal',
        fontSize: 50,
        lineHeight: 130,
        textAlign: 'center',
        color: "#05AFF2",
        zIndex: 999

    },
    
    modalToggle: {
        marginTop: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },

    modalClose:{
        marginTop: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },

    modalForm: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25%'
    },

    inputStyle: {
        backgroundColor: '#eeeeee',
        alignContent: 'flex-start',
        width: '75%',
        height: '20%',
        borderRadius: 10
    }
});

export default styles;