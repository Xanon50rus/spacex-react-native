import { StyleSheet } from 'react-native';

import { BLACK, BLUE_1, WHITE, BLUE_2, BLUE_3 } from './colors';
import { fontFamilyProfileMedium, fontFamilyProfileBold } from './fontFamily';

export const homeStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BLUE_1,
		paddingVertical: 25,
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		marginVertical: 13,
		fontFamily: fontFamilyProfileMedium,
		color: BLACK,
		textAlign: 'left',
		width: 325,
	},
	shipCard: {
		width: 325,
		borderRadius: 10,
		backgroundColor: WHITE,
		overflow: 'hidden',
		marginBottom: 15,
	},
	shipCard__image: {
		width: 325,
		height: 160,
	},
	shipCard__content: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		padding: 20,
	},
	shipCard__title: {
		fontFamily: fontFamilyProfileBold,
		fontSize: 18,
		color: BLACK,
		minHeight: 24,
		maxWidth: '95%',
	},
	shipCard__type: {
		fontFamily: fontFamilyProfileMedium,
		fontSize: 14,
		color: BLUE_3,
		opacity: 0.5,
		minHeight: 19,
		maxWidth: '95%',
	},
	shipCard__btn: {
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
});
