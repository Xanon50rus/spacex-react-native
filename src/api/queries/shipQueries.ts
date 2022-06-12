import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
	query shipsQuery {
		ships {
			id
			image
			type
			name
		}
	}
`;

export const GET_SHIP = gql`
	query shipQuery($id: ID!) {
		ship(id: $id) {
			type
			weight_kg
			year_built
			class
			missions {
				flight
				name
			}
			home_port
		}
	}
`;

export interface IShipItem {
	id: string;
	name: string;
	type: string;
	image: string;
}

interface IMission {
	flight: string;
	name: string;
}

export interface IShipDetails {
	type: string;
	home_port: string;
	weight_kg: number;
	missions: IMission[];
	year_built: string;
	class: string;
}
