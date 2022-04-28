import React from 'react';
import { Text } from 'react-native';

const ChatRoom = () => {
    return <Text>Chat room to be updated here</Text>
}


export default ChatRoom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginBottom: 50
      },  
    chat: {
        backgroundColor: '#fff',
    },
    chatMine: {
        width: 150,
        backgroundColor: '#00ddaa',
        color: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    chatOther: {
        width: 150,
        backgroundColor: '#0099ff',
        color: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
    },
    chatText: {
        color: '#ffffff',
        fontSize: 14,
    },
    heading: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaaaaa',
        padding: 10,
        marginBottom: 10,
        width: 250,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#0000ff',
        color: '#ffffff',
        marginBottom: 20,
    },
  });


