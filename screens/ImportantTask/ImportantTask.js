import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../AddTask/AddTaskCss';
import { Icon } from 'react-native-elements';
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
      <View style={{ paddingTop: 2, paddingBottom: 2, backgroundColor: "lightpink", flex: 2, flexDirection: "row", alignItems: 'center', paddingLeft: 5 }}>
        <Image onClick={() => navigation.navigate("Home")} style={{ width: 30, height: 30 }} source={require('../../assets/arrowLeft.png')}></Image>
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/congviecquantrong.png')}></Image>
        <Text style={[{ paddingLeft: 5, fontFamily: "OpenSans_400Regular", color: "#21687f", fontSize: 22, fontWeight: 'bold' }]}>
          Công việc quan trọng
        </Text>
      </View>
      <View style={{ flex: 16, padding: 15 }}>
        {
          tasks.filter((task) => task.isImportant).map((task, index) => (
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

