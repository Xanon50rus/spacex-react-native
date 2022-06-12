import { StyleSheet } from 'react-native';

import { BLACK, BLUE_1, WHITE, BLUE_2, BLUE_3 } from './colors';
import { fontFamilyProfileMedium, fontFamilyProfileBold, fontFamilyPlayful } from './fontFamily';

export const shipStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BLUE_1,
	},
	topContent: {
		alignItems: 'center',
		paddingHorizontal: 20,
		position: 'relative',
		backgroundColor: WHITE,
	},
	topContent__shadow: {
		width: '112%',
		height: '100%',
		position: 'absolute',
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderColor: BLUE_2,
		borderEndWidth: 1,
		borderStartWidth: 1,
		borderBottomWidth: 5,
	},
	title: {
		fontSize: 40,
		marginTop: 48,
		fontFamily: fontFamilyProfileBold,
		color: BLACK,
	},
	type: {
		fontSize: 18,
		marginTop: 5,
		marginBottom: 30,
		fontFamily: fontFamilyProfileMedium,
		color: BLUE_3,
		opacity: 0.5,
	},
	content: {
		flex: 1,
		paddingHorizontal: 23,
		marginVertical: 33,
	},
	subTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	subTitle__text: {
		fontSize: 18,
		fontFamily: fontFamilyPlayful,
		color: BLUE_3,
		marginRight: 10,
	},
	subTitle__arrow: {
		transform: [{ translateY: 8 }],
	},
	card: {
		width: '100%',
		paddingVertical: 26,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 14,
	},
	card__background: {
		flex: 1,
		zIndex: 1,
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	card__title: {
		zIndex: 2,
		fontSize: 18,
		fontFamily: fontFamilyPlayful,
		color: BLUE_3,
		opacity: 0.5,
	},
	card__stat: {
		zIndex: 2,
		fontSize: 18,
		fontFamily: fontFamilyProfileMedium,
		color: BLACK,
	},
	mission: {
		width: '100%',
		marginBottom: 16,
	},
	flight__name: {
		fontSize: 18,
		fontFamily: fontFamilyProfileBold,
		color: BLACK,
	},
	flight__count: {
		fontSize: 14,
		fontFamily: fontFamilyProfileMedium,
		color: BLACK,
	},
	back__btn: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: BLUE_1,
		shadowColor: BLUE_2,
		shadowOffset: { width: 0, height: 1 },
		elevation: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	back__text: {
		fontSize: 18,
		fontFamily: fontFamilyPlayful,
		color: BLUE_3,
		marginLeft: 10,
	},
});
