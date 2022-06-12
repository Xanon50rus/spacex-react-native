import React from 'react';
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	Text,
	FlatList,
	ActivityIndicator,
	Image,
	StatusBar,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { SvgXml } from 'react-native-svg';

// Icons
import arrowRightSVG from '../../assets/icons/arrow-right-longer.svg';

// Api
import { GET_SHIPS, IShipItem } from '../api/queries/shipQueries';

// Styles
import { homeStyle } from '../styles/homeStyle';

const HomeScreen = ({ navigation }: any) => {
	const { loading, data }: { loading: boolean; data: { ships: IShipItem[] } | undefined } = useQuery(GET_SHIPS);

	const renderItem = ({ item }: { item: IShipItem }) => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('Ship', {
					ship: item,
				})
			}
			style={homeStyle.shipCard}
		>
			{item.image && <Image source={{ uri: item.image }} style={homeStyle.shipCard__image} />}
			<View style={homeStyle.shipCard__content}>
				<View style={{ flex: 1 }}>
					<Text style={homeStyle.shipCard__title}>{item.name}</Text>
					<Text style={homeStyle.shipCard__type}>{item.type}</Text>
				</View>
				<View style={homeStyle.shipCard__btn}>
					<SvgXml width="20" height="20" xml={arrowRightSVG} />
				</View>
			</View>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={homeStyle.container}>
			<StatusBar translucent backgroundColor="#F7F8FB" barStyle="dark-content" />
			{loading ? (
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ActivityIndicator size="large" />
				</View>
			) : (
				<>
					<Text style={homeStyle.title}>Collections</Text>
					<FlatList data={data?.ships} renderItem={renderItem} keyExtractor={(item) => item.id} />
				</>
			)}
		</SafeAreaView>
	);
};

export default HomeScreen;
