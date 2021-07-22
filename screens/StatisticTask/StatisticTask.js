import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../AddTask/AddTaskCss';
import { Icon } from 'react-native-elements';
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";
import Tasks from '../Tasks/Tasks';

export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular
  });

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingTop: 2, paddingBottom: 2, backgroundColor: "khaki", flex: 2, flexDirection: "row", alignItems: 'center', paddingLeft: 5 }}>
        <Image onClick={() => navigation.navigate("Home")} style={{ width: 30, height: 30 }} source={require('../../assets/arrowLeft.png')}></Image>
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/thongkenangsuat.png')}></Image>
        <Text style={[{ paddingLeft: 5, fontFamily: "OpenSans_400Regular", color: "#21687f", fontSize: 22, fontWeight: 'bold' }]}>
          Thống kê năng suất
        </Text>
      </View>
      <View style={{ flex: 16, padding: 15 }}>
        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Công việc đã hoàn thành"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#FA8072", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid lightpink' }}>
          Công việc đã hoàn thành <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>

        <Text
          onClick={() => navigation.navigate({
            name: "Tasks",
            params: {
              title: "Công việc chưa hoàn thành"
            }
          })}
          style={{ margin: 5, padding: 10, borderRadius: 3, fontFamily: "OpenSans_400Regular", color: "#4169E1", fontWeight: 'bold', display: 'flex', fontSize: 25, alignItems: "center", justifyContent: "space-between", borderBottom: '4px solid lightskyblue' }}>
          Công việc chưa hoàn thành <Image style={{ width: 30, height: 30 }} source={require('../../assets/arrowRight.png')}></Image>
        </Text>

        <Text
          style={[{
            fontSize: 20,
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 10,
            marginTop: 20
          }]}
        >
          Tổng công việc: {tasks.length}
        </Text>
        <Text
          style={[{
            fontSize: 20,
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 10,
            marginTop: 15
          }]}
        >
          Công việc đã hoàn thành: {tasks.filter(task => task.status).length}
        </Text>
        <Text
          style={[{
            fontSize: 20,
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 10,
            marginTop: 15
          }]}
        >
          Công việc chưa hoàn thành: {tasks.filter(task => !task.status).length}
        </Text>
      </View>



    </View>
  )
}

