import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './ListTaskCss';
import { Icon } from 'react-native-elements';
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular
  });

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flex: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: "lightgreen", flex: 2, flexDirection: "row", alignItems: 'center', paddingLeft: 5 }}>
        <Image onClick={() => navigation.goBack()} style={{ width: 30, height: 30 }} source={require('../../assets/arrowLeft.png')}></Image>
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/danhsachcongviec.png')}></Image>
        <Text style={[{ paddingLeft: 5, fontFamily: "OpenSans_400Regular", color: "#21687f", fontSize: 22, fontWeight: 'bold' }]}>
          Danh sách công việc
        </Text>
      </View>
      <View style={{ flex: 16, padding: 15 }}>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Ngày hôm nay"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#58b943", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid lightpink' }}>
          Ngày hôm nay <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Ngày mai"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#58b943", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid lightskyblue' }}>
          Ngày mai <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Ngày hôm qua"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#58b943", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid #DDA0DD' }}>
          Ngày hôm qua <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Tương lai"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#58b943", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid khaki' }}>
          Tương lai <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Quá khứ"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#58b943", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid #F5DEB3' }}>
          Quá khứ <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Tất cả công việc"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#58b943", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid lightgreen' }}>
          Tất cả công việc <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>
      </View>
    </View>
  )
}

