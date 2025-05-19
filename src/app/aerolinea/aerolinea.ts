import { Flights } from "./flights/flights";

export class Aerolinea {
    id: string;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    indentityColor: string;
    slogan: string;
    flights: Flights[]= [];

    constructor(id: string, airlineName: string, country: string, city: string, address: string, indentityColor: string, slogan: string, flights: string[]) {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.indentityColor = indentityColor;
        this.slogan = slogan;
        this.flights = [];
    }
}
