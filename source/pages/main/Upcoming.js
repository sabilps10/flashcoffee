import React, { Component } from 'react';
import { View, StatusBar, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from '../../styles/main/UpcomingStyle'
import Color from '../../constant/Color'

class UpcomingPage extends React.Component {

    _renderHeader = () => {
        return (
            <View style={Styles.header_container}>
                <View style={Styles.top_header}>
                    <View style={Styles.avatar} />
                    <Text style={Styles.title_header}>UPCOMING SCHEDULE</Text>
                    <View style={Styles.avatar} />
                </View>
            </View>
        )
    }

    _renderBody = () => {
        return (
            <View style={Styles.body_container}>
                <Text style={Styles.month_text}>
                    APRIL 2021
                </Text>
                <View>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>MON</Text>
                            <Text style={Styles.date_text}>5</Text>
                        </View>
                        <View style={Styles.right_list}>
                            <Text style={Styles.title_text}>Mediterania Garden Residance</Text>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>08:00 - 17:00</Text>
                                <View style={Styles.today_container}>
                                    <Text style={Styles.today_text}>TODAY</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>TUE</Text>
                            <Text style={Styles.date_text}>6</Text>
                        </View>
                        <View style={Styles.right_list_empty}>
                            <Text style={Styles.text_empty}>NO SCHEDULE</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail')} style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>WED</Text>
                            <Text style={Styles.date_text}>7</Text>
                        </View>
                        <View style={Styles.right_list}>
                            <Text style={Styles.title_text}>Mediterania Garden Residance</Text>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>08:00 - 17:00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>THU</Text>
                            <Text style={Styles.date_text}>8</Text>
                        </View>
                        <View style={Styles.right_list}>
                            <Text style={Styles.title_text}>Mediterania Garden Residance</Text>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>08:00 - 17:00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>FRI</Text>
                            <Text style={Styles.date_text}>9</Text>
                        </View>
                        <View style={Styles.right_list_empty}>
                            <Text style={Styles.text_empty}>NO SCHEDULE</Text>
                        </View>
                    </View>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>SAT</Text>
                            <Text style={Styles.date_text}>10</Text>
                        </View>
                        <View style={Styles.right_list}>
                            <Text style={Styles.title_text}>Mediterania Garden Residance</Text>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>08:00 - 17:00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.list_container}>
                        <View style={Styles.left_list}>
                            <Text style={Styles.day_text}>SUN</Text>
                            <Text style={{ ...Styles.date_text, color: 'red' }}>11</Text>
                        </View>
                        <View style={Styles.right_list}>
                            <Text style={Styles.title_text}>Mediterania Garden Residance</Text>
                            <View style={Styles.time_container}>
                                <View style={Styles.time} />
                                <Text style={Styles.time_text}>08:00 - 17:00</Text>
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
                    {this._renderBody()}
                </ScrollView>
            </View>
        )
    }
}
export default UpcomingPage