import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './screens/Home/Home';
import AddTask from './screens/AddTask/AddTask';
import ListTask from './screens/ListTask/ListTask';
import TodayTask from './screens/TodayTask/TodayTask';
import ImportantTask from './screens/ImportantTask/ImportantTask';
import StatisticTask from './screens/StatisticTask/StatisticTask';
import Tasks from './screens/Tasks/Tasks';
import Welcome from './screens/Welcome/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="AddTask" component={AddTask} />
        <Stack.Screen options={{ headerShown: false }} name="ListTask" component={ListTask} />
        <Stack.Screen options={{ headerShown: false }} name="TodayTask" component={TodayTask} />
        <Stack.Screen options={{ headerShown: false }} name="ImportantTask" component={ImportantTask} />
        <Stack.Screen options={{ headerShown: false }} name="StatisticTask" component={StatisticTask} />
        <Stack.Screen options={{ headerShown: false }} name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

