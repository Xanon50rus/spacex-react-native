import React from 'react';
import {
	SafeAreaView,
	ActivityIndicator,
	View,
	Text,
	StatusBar,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { SvgXml } from 'react-native-svg';

// Icons
import arrowDownSVG from '../../assets/icons/arrow-down.svg';
import cardBackgroundSVG from '../../assets/icons/card-background.svg';
import arrowRightSVG from '../../assets/icons/arrow-right-longer.svg';

// Api
import { GET_SHIP, IShipItem, IShipDetails } from '../api/queries/shipQueries';

// Styles
import { shipStyle } from '../styles/shipStyle';

const ShipScreen = ({ route, navigation }: any) => {
	const { ship }: { ship: IShipItem } = route.params;
	const { loading, data }: { loading: boolean; data: { ship: IShipDetails } | undefined } = useQuery(GET_SHIP, {
		variables: { id: ship.id },
	});

	return (
		<SafeAreaView style={shipStyle.container}>
			<StatusBar translucent backgroundColor="transparent" />
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
					<TouchableOpacity
						style={{ position: 'absolute', top: 39, left: 29, zIndex: 99, width: 50, height: 50 }}
						onPress={() => navigation.navigate('Home')}
					>
						<View style={shipStyle.back__btn}>
							<SvgXml width="20" height="20" xml={arrowRightSVG} rotation={180} />
						</View>
					</TouchableOpacity>
					<ScrollView style={{ position: 'relative' }}>
						{ship.image && <Image source={{ uri: ship.image }} style={{ flex: 1, height: 300 }} />}
						<View style={shipStyle.topContent}>
							<Text style={{ ...shipStyle.title, ...{ marginTop: ship.image ? 48 : 88 } }}>
								{ship.name}
							</Text>
							<Text style={shipStyle.type}>{ship.type}</Text>
							<View style={shipStyle.topContent__shadow}></View>
						</View>
						<View style={shipStyle.content}>
							<View style={shipStyle.subTitle}>
								<Text style={shipStyle.subTitle__text}>Basic info</Text>
								<SvgXml width="30" height="31" xml={arrowDownSVG} style={shipStyle.subTitle__arrow} />
							</View>
							{Object.keys(data?.ship || {}).map((key: string) => {
								if (key === 'missions') return null;

								const stat =
									data?.ship[key as 'class' | 'year_built' | 'weight_kg' | 'home_port' | 'type'];
								if (!stat) return null;

								return (
									<View style={shipStyle.card} key={key}>
										<SvgXml xml={cardBackgroundSVG} style={shipStyle.card__background} />
										<Text style={shipStyle.card__title}>{key}</Text>
										<Text style={shipStyle.card__stat}>{stat}</Text>
									</View>
								);
							})}
							<View style={{ ...shipStyle.subTitle, ...{ marginTop: 21, marginBottom: 25 } }}>
								<Text style={shipStyle.subTitle__text}>Misstions</Text>
								<SvgXml width="30" height="31" xml={arrowDownSVG} style={shipStyle.subTitle__arrow} />
							</View>
							{data?.ship.missions.map((mission, index) => (
								<View style={shipStyle.mission} key={index}>
									<Text style={shipStyle.flight__name}>{mission.name}</Text>
									<Text style={shipStyle.flight__count}>{`Flight: ${mission.flight}`}</Text>
								</View>
							))}
							<TouchableOpacity
								style={{ flexDirection: 'row', marginTop: 30 }}
								onPress={() => navigation.navigate('Home')}
							>
								<View style={shipStyle.back__btn}>
									<SvgXml width="20" height="20" xml={arrowRightSVG} rotation={180} />
								</View>
								<Text style={shipStyle.back__text}>Back to the list</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</>
			)}
		</SafeAreaView>
	);
};

export default ShipScreen;
