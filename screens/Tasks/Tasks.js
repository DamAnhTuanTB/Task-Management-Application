import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../AddTask/AddTaskCss';
import { Icon } from 'react-native-elements';
import Task from '../Task/Task';
import moment from 'moment';

import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

export default ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular
  });

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));

  console.log(tasks.map(task => moment(task.date)));
  console.log(tasks.map(task => moment(task.date).toISOString()));

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingTop: 2, paddingBottom: 2, backgroundColor: "lightgreen", flex: 2, flexDirection: "row", alignItems: 'center', paddingLeft: 5 }}>
        <Image onClick={() => navigation.goBack()} style={{ width: 30, height: 30 }} source={require('../../assets/arrowLeft.png')}></Image>
        <Image style={{ width: 50, height: 50 }} source={require('../../assets/danhsachcongviec.png')}></Image>
        <Text style={[{ paddingLeft: 5, fontFamily: "OpenSans_400Regular", color: "#21687f", fontSize: 22, fontWeight: 'bold' }]}>
          {route.params.title}
        </Text>
      </View>
      <View style={{ flex: 16, padding: 15 }}>
        {
          route.params.title == "Ngày hôm nay" && tasks.filter((task) => moment().format('DD/MM/YYYY') == task.date).map((task, index) => (
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
        {
          route.params.title == "Ngày mai" && tasks.filter((task) => moment().add(1, 'days').format('DD/MM/YYYY') == task.date).map((task, index) => (
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
        {
          route.params.title == "Ngày hôm qua" && tasks.filter((task) => moment().subtract(1, 'days').format('DD/MM/YYYY') == task.date).map((task, index) => (
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
        {
          route.params.title == "Tương lai" && tasks.filter((task) => moment() > moment(task.date)).map((task, index) => (
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
        {
          route.params.title == "Quá khứ" && tasks.filter((task) => moment() < moment(task.date)).map((task, index) => (
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
        {
          route.params.title == "Tất cả công việc" && tasks.map((task, index) => (
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
        {
          route.params.title == "Công việc đã hoàn thành" && tasks.filter(task => task.status).map((task, index) => (
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
        {
          route.params.title == "Công việc chưa hoàn thành" && tasks.filter(task => !task.status).map((task, index) => (
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

