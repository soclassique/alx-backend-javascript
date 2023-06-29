class Building {
  constructor(name, floors, address) {
    this.name = name;
    this.floors = floors;
    this.address = address;
  }

  getBuildingInfo() {
    console.log(`Building Name: ${this.name}`);
    console.log(`Number of Floors: ${this.floors}`);
    console.log(`Address: ${this.address}`);
  }
}

// Example usage
const myBuilding = new Building('Office Tower', 10, '123 Main Street');
myBuilding.getBuildingInfo();
