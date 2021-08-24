import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from '../../constant/Color'

export default {
    container: {
        flex: 1,
        backgroundColor: Color.primary_white,
    },
    header_container: {
        width: wp(100),
        height: hp(12),
        alignItems: 'center',
        backgroundColor: Color.primary_yellow,
    },
    top_header: {
        width: wp(88),
        flexDirection: 'row',
        marginTop: hp(7),
        justifyContent: 'space-between'
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 80,
        borderWidth: 2,
        backgroundColor: Color.primary_yellow,
    },
    title_header: {
        fontSize: hp(1.8),
        fontWeight: '700',
    },
    body_container: {
        marginTop: hp(2),
        marginLeft: wp(2.5),
        marginRight: wp(2.5)
    },
    month_text: {
        fontSize: hp(2),
        fontWeight: '800',
        marginBottom: hp(3)

    },
    list_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(0.8)
    },
    left_list: {
        width: wp(10),
        alignItems: 'center'
    },
    day_text: {
        fontSize: hp(1.7),
        color: Color.third_grey,
        fontWeight: '600',
    },
    date_text: {
        marginTop: hp(0.5),
        fontSize: hp(2.5),
        fontWeight: '600',
    },
    right_list: {
        width: wp(80),
        height: hp(9),
        justifyContent: 'center',
        backgroundColor: Color.primary_grey,
        padding: 15,
        borderRadius: 10
    },
    right_list_empty: {
        width: wp(80),
        height: hp(9),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: Color.primary_grey,
        borderRadius: 10,
        borderStyle: 'dashed'
    },
    text_empty: {
        fontWeight: '600'
    },
    title_text: {
        fontSize: hp(2),
        fontWeight: '600',
    },
    time_container: {
        marginTop: hp(1.5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        width: 15,
        height: 15,
        borderRadius: 80,
        borderWidth: 1.5,
        backgroundColor: Color.primary_grey,
    },
    time_text: {
        fontSize: hp(1.6),
        marginLeft: wp(2.3)
    },
    today_container: {
        marginLeft: wp(3),
        width: wp(15),
        height: hp(3),
        backgroundColor: Color.primary_pink,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    today_text: {
        fontWeight: '600',
        color: Color.primary_white
    }
}