import React, { Component } from 'react';
import { View, StatusBar, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from '../../styles/main/DetailStyle'
import Color from '../../constant/Color'

class DetailPage extends React.Component {

    _renderHeader = () => {
        return (
            <View style={Styles.header_container}>
                <View style={Styles.top_header}>
                    <View style={Styles.avatar} />
                    <Text style={Styles.title_header}>7 APRIL 2021</Text>
                    <View style={Styles.avatar} />
                </View>
            </View>
        )
    }

    _renderStore = () => {
        return (
            <View style={Styles.body_container}>
                <Text style={Styles.type_text}>
                    STORE
                </Text>
                <View>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                        </View>
                        <View style={Styles.right_list}>
                            <Text style={Styles.title_text}>Mediterania Garden Residance</Text>
                            <Text style={Styles.description_text}>Main Lobby, Apartment Mediterania Garden Residance 1</Text>
                            <View style={Styles.maps_container}>
                                <Text style={Styles.maps_text}>View Maps</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    _renderBody = () => {
        return (
            <View>
                <View style={Styles.body_container}>
                    <Text style={Styles.type_text_bot}>
                        TIME SCHEDULE
                    </Text>
                    <View>
                        <View style={Styles.list_container_bot}>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>08:00 - 17:00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={Styles.body_container}>
                    <Text style={Styles.type_text_bot}>
                        CLOCK IN
                    </Text>
                    <View>
                        <View style={Styles.list_container_bot}>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>-- : --</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={Styles.body_container}>
                    <Text style={Styles.type_text_bot}>
                        CLOCK OUT
                    </Text>
                    <View>
                        <View style={Styles.list_container_bot}>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>-- : --</Text>
                            </View>
                        </View>
                    </View>
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
                    {this._renderStore()}
                    {this._renderBody()}
                </ScrollView>
            </View>
        )
    }
}
export default DetailPage