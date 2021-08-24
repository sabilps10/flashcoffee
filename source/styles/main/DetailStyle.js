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
        marginRight: wp(2.5),
    },
    type_text: {
        fontSize: hp(1.9),
        fontWeight: '800',
        marginBottom: hp(2)
    },
    list_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.primary_grey,
        borderRadius: 10,
        padding: 15,
    },
    left_list: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary_grey,
        borderWidth: 1,
        borderRadius: 10
    },
    right_list: {
        width: wp(65),
        marginLeft: wp(4),
        marginRight: wp(4)
    },
    title_text: {
        fontSize: hp(2),
        fontWeight: '600',
    },
    description_text: {
        marginTop: hp(1),
        fontSize: hp(1.5),
        fontWeight: '600',
        lineHeight:hp(2),
        color: Color.third_grey
    },
    type_text_bot: {
        fontSize: hp(1.9),
        fontWeight: '800',
        marginTop: hp(2),
        marginBottom: hp(2)

    },
    list_container_bot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.primary_grey,
        borderRadius: 10,
        padding: 15,
        height: hp(7)
    },
    time_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        width: 25,
        height: 25,
        borderRadius: 80,
        borderWidth: 1.5,
        backgroundColor: Color.primary_grey,
    },
    time_text: {
        fontSize: hp(1.8),
        fontWeight: '600',
        marginLeft: wp(3.5)
    },
    maps_container: {
        marginTop: hp(2),
        width: wp(27),
        height: hp(3.5),
        borderWidth:1,
        borderColor: Color.primary_pink,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    maps_text: {
        color: Color.primary_pink,
        fontWeight: '500'
    }
}