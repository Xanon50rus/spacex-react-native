/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import ShipScreen from './src/screens/ShipScreen';

// Initialize Apollo Client
const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql/',
	cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="Ship" component={ShipScreen} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApolloProvider>
	);
};

export default App;
