import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './HomeCss';
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
        <View style={styles.home}>
            <View style={[styles.homeTop, { borderBottom: '4px solid #18a1e0' }]}>
                <View style={styles.homeTopLeft}>
                    <Image source={require('../../assets/logo.jpg')} style={styles.avatar}></Image>
                    <View style={styles.infoAccount}>
                        <Text style={{ fontFamily: "OpenSans_400Regular", color: "#18a1e0", fontSize: 18, fontWeight: 'bold' }}>Welcome!</Text>
                        <Text style={{ fontFamily: "OpenSans_400Regular", color: '#58b7d6', fontWeight: 'bold' }}>Task Management Application</Text>
                    </View>
                </View>
                <View style={styles.homeTopRight}>
                    <Image style={styles.notification} source={require('../../assets/notification.png')}></Image>
                    <Image style={styles.search} source={require('../../assets/search.png')}></Image>
                </View>
            </View>

            <View style={styles.menu}>
                <Text onClick={() => navigation.navigate("AddTask")} style={[styles.menuItem, { backgroundColor: 'lightsalmon', borderBottom: "3px solid #bebdbd" }]}>
                    <Text style={styles.menuItemIcon}>
                        <Image style={styles.addwork} source={require('../../assets/themcongviec.png')}></Image>
                    </Text>
                    <Text style={[styles.menuItemContent, { fontFamily: "OpenSans_400Regular", color: "#21687f" }]}>
                        Thêm công việc
                   </Text>
                </Text>
                <Text onClick={() => navigation.navigate("TodayTask")} style={[styles.menuItem, { backgroundColor: 'lightskyblue', paddingTop: 4, paddingBottom: 2, borderBottom: "3px solid #bebdbd" }]}>
                    <Text style={[styles.menuItemIcon, { paddingLeft: 5, paddingRight: 5 }]}>
                        <Image style={{ width: 60, height: 60 }} source={require('../../assets/congviechomnay.png')}></Image>
                    </Text>
                    <Text style={[styles.menuItemContent, { fontFamily: "OpenSans_400Regular", color: '#21687f' }]}>
                        Công việc hôm nay
                   </Text>
                </Text>
                <Text  onClick={() => navigation.navigate("ListTask")} onClick={() => navigation.navigate("ListTask")} style={[styles.menuItem, { backgroundColor: 'lightgreen', paddingTop: 4, paddingBottom: 2, borderBottom: "3px solid #bebdbd" }]}>
                    <Text style={[styles.menuItemIcon, { paddingLeft: 5, paddingRight: 5 }]}>
                        <Image style={{ width: 60, height: 60 }} source={require('../../assets/danhsachcongviec.png')}></Image>
                    </Text>
                    <Text style={[styles.menuItemContent, { fontFamily: "OpenSans_400Regular", color: '#21687f' }]}>
                        Danh sách công việc
                   </Text>
                </Text>
                <Text  onClick={() => navigation.navigate("ImportantTask")} style={[styles.menuItem, { backgroundColor: 'lightpink', paddingTop: 4, paddingBottom: 2, borderBottom: "3px solid #bebdbd" }]}>
                    <Text style={[styles.menuItemIcon, { paddingLeft: 5, paddingRight: 5 }]}>
                        <Image style={{ width: 60, height: 60 }} source={require('../../assets/congviecquantrong.png')}></Image>
                    </Text>
                    <Text style={[styles.menuItemContent, { fontFamily: "OpenSans_400Regular", color: '#21687f' }]}>
                        Công việc quan trọng
                   </Text>
                </Text>
                <Text  onClick={() => navigation.navigate("StatisticTask")} style={[styles.menuItem, { backgroundColor: 'khaki', paddingTop: 4, paddingBottom: 2, borderBottom: "3px solid #bebdbd" }]}>
                    <Text style={[styles.menuItemIcon, { paddingLeft: 5, paddingRight: 5 }]}>
                        <Image style={{ width: 60, height: 60 }} source={require('../../assets/thongkenangsuat.png')}></Image>
                    </Text>
                    <Text style={[styles.menuItemContent, { fontFamily: "OpenSans_400Regular", color: '#21687f' }]}>
                        Thống kê năng suất
                   </Text>
                </Text>
            </View>


        </View>
    )
}

