import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, Platform, SafeAreaView, CheckBox, Alert } from 'react-native';
import styles from './AddTaskCss';
import moment from 'moment';

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

  const handleAddTask = () => {
    if (!name || !description || !date || !color) {
      setMessage("Vui lòng điền đầy đủ thông tin!")
    } else {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.push({
        name, description, date, isImportant, color, status: false, id: Math.floor(Math.random() * 10000000000)
      })
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setMessage("Thêm công việc thành công!");
      setTimeout(() => {
        navigation.navigate("ListTask")
      }, 500)
    }
  };

  const handleChooseDate = (date, dateNumber) => {
    setDate(date);
    setDateNumber(dateNumber);
    setMessage();
  }

  const handleChooseColor = (color, colorNumber) => {
    setColor(color);
    setColorNumber(colorNumber);
    setMessage();
  }

  const [name, onChangeName] = React.useState(undefined);
  const [description, onChangeDescription] = React.useState(undefined);
  const [date, setDate] = useState(null);
  const [dateNumber, setDateNumber] = useState(null);
  const [isImportant, setIsImportant] = useState(false);
  const [color, setColor] = useState(null);
  const [colorNumber, setColorNumber] = useState(null);

  const [message, setMessage] = useState(null);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingTop: 2, paddingBottom: 2, backgroundColor: "lightsalmon", flex: 2, flexDirection: "row", alignItems: 'center', paddingLeft: 5 }}>
        <Image onClick={() => navigation.navigate("Home")} style={{ width: 30, height: 30 }} source={require('../../assets/arrowLeft.png')}></Image>
        <Image style={{ width: 80, height: 80 }} source={require('../../assets/themcongviec.png')}></Image>
        <Text style={[{ fontFamily: "OpenSans_400Regular", color: "#21687f", fontSize: 22, fontWeight: 'bold' }]}>
          Thêm công việc
        </Text>
      </View>
      <View style={{ flex: 16, padding: 15 }}>
        <SafeAreaView>
          <Text style={[{ fontFamily: "OpenSans_400Regular", color: "#676768", fontSize: 18, fontWeight: 'bold', marginBottom: -5, marginTop: 10 }]}>
            Tên công việc
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Nhập tên công việc"
            onClick={() => setMessage()}
          />

          <Text style={[{ fontFamily: "OpenSans_400Regular", color: "#676768", fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: -5 }]}>
            Miêu tả công việc
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDescription}
            value={description}
            placeholder="Nhập miêu tả"
            onClick={() => setMessage()}
          />

          <Text style={[{ fontFamily: "OpenSans_400Regular", color: "#676768", fontSize: 18, fontWeight: 'bold', marginTop: 10 }]}>
            Chọn ngày
          </Text>
          {
            Array.from(Array(3).keys()).map((parent, indexParent) => (
              <View style={styles.parentDateTime} key={indexParent}>
                {
                  Array.from(Array(3).keys()).map((child, indexChild) => (
                    <Text key={indexChild} style={dateNumber == parent * 3 + child ? styles.dateItemSelect : styles.dateItem} onPress={() => handleChooseDate(moment().add(parent * 3 + child, 'days').format('DD/MM/YYYY'), parent * 3 + child)}>
                      {
                        moment().add(parent * 3 + child, 'days').format('DD/MM/YYYY')
                      }
                    </Text>
                  ))
                }
              </View>
            ))
          }
          <Text
            style={[{
              display: 'flex',
              alignItems: 'center',
              fontFamily: "OpenSans_400Regular",
              color: "#676768",
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10
            }]}
          >
            Có quan trọng hay không
            <Text>
              <CheckBox
                value={isImportant}
                onValueChange={setIsImportant}
                style={[{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], marginLeft: 15 }]}
                onClick={() => setMessage()}
              />
            </Text>

          </Text>

          <View>
            <Text
              style={[{
                display: 'flex',
                alignItems: 'center',
                fontFamily: "OpenSans_400Regular",
                color: "#676768",
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20
              }]}
            >
              Gắn màu công việc
            </Text>
            <View style={[{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }]}>
              {
                ['pink', '#5F9EA0', '#8FBC8F', '#ADD8E6', '#00BFFF', '#CD5C5C', '#F0E68C'].map((value, index) => (
                  <Text
                    style={[{
                      width: 44,
                      height: 44,
                      borderRadius: 44 / 2,
                      backgroundColor: value,
                      borderWidth: colorNumber == index ? 3 : 0,
                      borderColor: '#494949'
                    }]}
                    onPress={() => handleChooseColor(value, index)}
                    key={index}
                  >
                  </Text>
                ))
              }
            </View>
          </View>

          <View style={[{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 12,
          }]}>
            <View style={[{
              width: 150,
            }]}>
              <Button
                style={[{
                }]}
                title={"THÊM CÔNG VIỆC"} onPress={handleAddTask} />
            </View>
          </View>
          <Text
            style={[{
              fontSize: 16,
              textAlign: 'center',
              marginTop: 12,
              color: 'orange',
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontFamily: "OpenSans_400Regular"
            }]}
          >
            {message}
          </Text>
        </SafeAreaView>
      </View>
    </View>
  )
}
