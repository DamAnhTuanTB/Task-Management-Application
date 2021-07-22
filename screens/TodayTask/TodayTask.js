import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './TodayTaskCss';
import moment from 'moment';
import Task from '../Task/Task';

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

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingTop: 2, paddingBottom: 2, backgroundColor: "lightskyblue", flex: 2, flexDirection: "row", alignItems: 'center', paddingLeft: 5 }}>
        <Image onClick={() => navigation.navigate("Home")} style={{ width: 30, height: 30 }} source={require('../../assets/arrowLeft.png')}></Image>
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/congviechomnay.png')}></Image>
        <Text style={[{ paddingLeft: 5, fontFamily: "OpenSans_400Regular", color: "#21687f", fontSize: 22, fontWeight: 'bold' }]}>
          Công việc hôm nay
        </Text>
      </View>

      <View style={{ flex: 16, padding: 15 }}>
        {
          tasks.filter((task) => moment().format('DD/MM/YYYY') == task.date).map((task, index) => (
            <Task
              name={task.name}
              description={task.description}
              color={task.color}
              isImportant={task.isImportant}
              date={task.date}
              id={task.id}
              status={task.status}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))
        }
      </View>

    </View>
  )
}

