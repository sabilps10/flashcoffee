import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from '../../constant/Color'

export default {
    container: {
        flex: 1,
        backgroundColor: Color.primary_white,
    },
    header_container: {
        width: wp(100),
        height: hp(34),
        alignItems: 'center',
        backgroundColor: Color.primary_yellow,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    top_header: {
        width: wp(88),
        flexDirection: 'row',
        marginTop: hp(7),
        justifyContent: 'space-between'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 80,
        borderWidth: 2,
        backgroundColor: Color.primary_yellow,
    },
    title_header: {
        marginTop: hp(1),
        fontSize: hp(1.8),
        fontWeight: '700',
    },
    time_header: {
        marginTop: hp(7),
        fontSize: hp(7.5),
        fontWeight: '700',
        letterSpacing: wp(1)
    },
    calender_header: {
        fontSize: hp(1.7),
        fontWeight: '600',
    },
    today_container: {
        marginTop: hp(3.5),
        alignItems: 'center',
    },
    todaytitle_container: {
        width: wp(92),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todaytitle_text: {
        fontSize: hp(2),
        fontWeight: '800',
    },
    refreshtitle_text: {
        fontSize: hp(1.7),
        fontWeight: '500',
        color: Color.primary_pink
    },
    todayinfo_container: {
        width: wp(93),
        height: hp(20),
        marginTop: hp(1.5),
        backgroundColor: Color.primary_grey,
        borderRadius: 8,
        padding: 15,
    },
    infotitle_text: {
        fontSize: hp(1.9),
        fontWeight: '600',
    },
    time_container: {
        marginTop: hp(1),
        flexDirection: 'row',
    },
    time: {
        width: 15,
        height: 15,
        borderRadius: 80,
        borderWidth: 1.5,
        backgroundColor: Color.primary_grey,
    },
    time_text: {
        fontSize: hp(1.55),
        marginLeft: wp(2.3)
    },
    clock_container: {
        marginTop: hp(3.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clockin_container: {
        width: wp(27),
        height: hp(3.7),
        backgroundColor: Color.primary_blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clockout_container: {
        width: wp(27),
        height: hp(3.7),
        backgroundColor: Color.primary_pink,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clock_text: {
        fontSize: hp(1.8),
        fontWeight: '800',
        color: Color.primary_white
    },
    clock_empty_container: {
        marginTop: hp(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clock_empty_text: {
        fontSize: hp(2.5),
        fontWeight: '500',
        marginLeft: wp(5),
        marginRight: wp(5)
    },
    dot_line: {
        letterSpacing: 3,
        color: Color.secondary_grey,
        fontWeight: 'bold',
    },
    next_container: {
        marginTop: hp(4),
        alignItems: 'center',
    },
    scrollview: {
        marginLeft: wp(2.5),
        marginRight: wp(2.5)
    },
    nextinfo_container: {
        width: wp(70),
        height: hp(17.5),
        marginTop: hp(1.5),
        backgroundColor: Color.primary_grey,
        borderRadius: 8,
        padding: 15,
        marginHorizontal: wp(1.3),
    },
    day_text: {
        fontSize: hp(1.3),
        fontWeight: '700',
        color: Color.third_grey,
        letterSpacing: 0.5
    },
    date_text: {
        fontSize: hp(3.3),
        fontWeight: '600',
        marginTop:hp(0.3)
    },
    nexttitle_text: {
        fontSize: hp(1.9),
        fontWeight: '600',
        marginTop: hp(3.2)
    },
    timenext_container: {
        width: wp(86),
        marginTop: hp(0.5),
        flexDirection: 'row',
    },
    bottom_clock_container: {
        marginTop: hp(5),
        marginBottom: hp(3),
        height: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: wp(3.5),
        marginRight: wp(3.5),
    },
    bottom_clockin_container: {
        width: wp(43.5),
        height: hp(7),
        backgroundColor: Color.primary_blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_clockout_container: {
        width: wp(43.5),
        height: hp(7),
        backgroundColor: Color.third_grey,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_clock_text: {
        fontSize: hp(2.1),
        fontWeight: '600',
        color: Color.primary_white
    },
}