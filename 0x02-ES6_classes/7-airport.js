class Airport {
  constructor(name, code, city) {
    this.name = name;
    this.code = code;
    this.city = city;
    this.flights = [];
  }

  addFlight(flight) {
    this.flights.push(flight);
    console.log(`Flight ${flight} has been added to ${this.name}.`);
  }

  getFlightCount() {
    return this.flights.length;
  }

  listFlights() {
    console.log(`Flights at ${this.name}:`);
    this.flights.forEach((flight, index) => {
      console.log(`${index + 1}. ${flight}`);
    });
  }
}

// Example usage
const airport = new Airport('International Airport', 'IA', 'New York');
airport.addFlight('AA123');
airport.addFlight('UA456');
airport.listFlights();
