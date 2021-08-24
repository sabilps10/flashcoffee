import React, { Component } from 'react';
import { View, StatusBar, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from '../../styles/main/HomeStyle'
import Color from '../../constant/Color'

class HomePage extends React.Component {

_renderHeader = () => {
    return (
        <View style={Styles.header_container}>
            <View style={Styles.top_header}>
                <View style={Styles.avatar} />
                <Text style={Styles.title_header}>LIVE ATTEDANCE</Text>
                <View style={Styles.avatar} />
            </View>
            <Text style={Styles.time_header}>07:30</Text>
            <Text style={Styles.calender_header}>Monday, 5 Apr 2021</Text>
        </View>
    )
}

_renderTodaySchedule = () => {
    return (
        <View style={Styles.today_container}>
            <View style={Styles.todaytitle_container}>
                <Text style={Styles.todaytitle_text}>TODAY'S SCHEDULE</Text>
                <Text style={Styles.refreshtitle_text}>Refresh</Text>
            </View>
            <View style={Styles.todayinfo_container}>
                <Text style={Styles.infotitle_text}>Mediterania Garden Residance</Text>
                <View style={Styles.time_container}>
                    <View style={Styles.time} />
                    <Text style={Styles.time_text}>08:00 - 17:00</Text>
                </View>
                <View style={Styles.clock_container}>
                    <View style={Styles.clockin_container}>
                        <Text style={Styles.clock_text}>CLOCK IN</Text>
                    </View>
                    <View style={Styles.clockout_container}>
                        <Text style={Styles.clock_text}>CLOCK OUT</Text>
                    </View>
                </View>
                <View style={Styles.clock_empty_container}>
                    <Text style={Styles.clock_empty_text}>-- : --</Text>
                    <Text style={Styles.dot_line}>-------------</Text>
                    <Text style={Styles.clock_empty_text}>-- : --</Text>
                </View>
            </View>
        </View>
    )
}

_renderNextSchedule = () => {
    return (
        <View style={Styles.next_container}>
            <View style={Styles.todaytitle_container}>
                <Text style={Styles.todaytitle_text}>NEXT SCHEDULE</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Upcoming')}>
                    <Text style={Styles.refreshtitle_text}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} indicatorStyle={'white'} style={Styles.scrollview}>
                <View style={Styles.nextinfo_container}>
                    <Text style={Styles.day_text}>WEDNESDAY</Text>
                    <Text style={Styles.date_text}>7 Apr</Text>
                    <Text style={Styles.nexttitle_text}>Mediterania Garden Residance</Text>
                    <View style={Styles.timenext_container}>
                        <View style={Styles.time} />
                        <Text style={Styles.time_text}>08:00 - 17:00</Text>
                    </View>
                </View>
                <View style={Styles.nextinfo_container}>
                    <Text style={Styles.day_text}>THURSDAY</Text>
                    <Text style={Styles.date_text}>8 Apr</Text>
                    <Text style={Styles.nexttitle_text}>Mediterania Garden Residance</Text>
                    <View style={Styles.timenext_container}>
                        <View style={Styles.time} />
                        <Text style={Styles.time_text}>08:00 - 17:00</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

_renderBottomButton = () => {
    return (
        <View style={Styles.bottom_clock_container}>
            <View style={Styles.bottom_clockin_container}>
                <Text style={Styles.bottom_clock_text}>Clock In</Text>
            </View>
            <View style={Styles.bottom_clockout_container}>
                <Text style={Styles.bottom_clock_text}>Clock Out</Text>
            </View>
        </View>
    )
}

render() {
    return (
        <View style={Styles.container}>
            <ScrollView indicatorStyle={'white'}>
                <StatusBar barStyle="dark-content" backgroundColor={Color.primary_yellow} />
                {this._renderHeader()}
                {this._renderTodaySchedule()}
                {this._renderNextSchedule()}
                {this._renderBottomButton()}
            </ScrollView>
        </View>
    )
}
}
export default HomePage