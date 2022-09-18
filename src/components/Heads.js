import React from 'react';
import { Text, View} from 'react-native';

export default props => (
  <View
      style={{
       // flexDirection: "row",
        height: 65,
        backgroundColor: "#FFD100", 
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 5,
      }}
    >
      <Text style={{
        color: '#202020',
        fontFamily: 'arial', 
        fontSize: 32,
        fontWeight: 'bold',
      }}>
        Kartenspiel
      </Text>
    </View>
)

