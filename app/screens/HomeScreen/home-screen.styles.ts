import { StyleSheet } from "react-native";
import { colors, fonts } from "@theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
        paddingHorizontal:15,
        paddingVertical:15
    },
    title: {
        fontSize: 24,
        color: colors.black,
        fontFamily: fonts.semiBold
    },
    subTitle: {
        fontSize: 16,
        color: colors.black
    },
    notSureContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10
    },
    notSureTitle: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.semiBold,
    },
    notSureSubTitle: {
        fontSize: 12,
        color: colors.black,
        marginVertical: 2
    },
    expertsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expertItem: {
        padding: 10,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        width: '47%',
        marginRight: 18,
        marginVertical: 10
    },
    expertName: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.bold,
        paddingTop: 10
    },
    connectButton: {
       padding: 10,
       paddingHorizontal: '25%',
       backgroundColor: colors.primaryButton,
       borderRadius: 20,
       marginTop: 5
    },
    connectButtonText: {
        fontSize: 12,
        fontFamily: fonts.bold,
        color: colors.white
    }
});