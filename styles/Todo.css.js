import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    todoContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: '10%',
        gap: 20,
        position: 'relative'

    },
    todoList: {
        flex: 1,
        width: '90%',
    },
    threeDotsIcon: {
        height: 18,
        width: 18
    },
    circularButton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#171717',
        zIndex: 1,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor:'#fff'

    },
    image: {
        width: '70%',
        height: '70%'
    },
    optionsIcon: {
        width: '15%'
    },
    optionsBar: {
        justifyContent: 'space-around'
    },
    checkBox: {
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionsTag: {
        borderColor: 'coral',
        borderWidth: 1.5,
        borderRadius: 20,
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'coral'
    },
    optionsText: {
        width: '35%',
        fontSize: 16,
        height:'70%',
        paddingLeft: 5,
        color:'#fff'

    },
    
    todoItem: {
        width: '100%',
        height: 60,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    todoText: {
        fontSize: 16,
        width: '70%'
    },
    todoForm: {
        height: '20%',
        width: '90%',
        borderWidth: 0
    },

    input: {
        height: '40%',
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 20,
        fontSize: 16
    },
    button: {
        height: '30%',
        backgroundColor: 'coral',
        width: '100%'
    },
    strikedText: {
        textDecorationLine: 'line-through',
    },
    todoStatusContainer: {
        height: '30%',
        borderWidth: 1,
        width: '90%',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        backgroundColor: '#fff'
    },
    itemShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    welcomeMessage: {
        fontSize: 26,
        fontWeight: '500',
        marginTop: 20,
        paddingLeft: 15
    },
    todoStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    todoStatusText: {
        marginLeft: 10,
        fontSize: 18
    }

})
