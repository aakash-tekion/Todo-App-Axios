import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: '15%',
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 16
    },
    form: {
        height: '50%',
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap:20,
        backgroundColor:'#fff'
    },
    button:{
        width:'90%',
        height:'15%',
        backgroundColor:'coral',
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    errorMessage:{
        color:'red',
        fontSize:18
    },
    hideItem:{
        display:'none'
    }
})
