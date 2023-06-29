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

class SkyHighBuilding extends Building {
  constructor(name, floors, address, height) {
    super(name, floors, address);
    this.height = height;
  }

  getBuildingInfo() {
    super.getBuildingInfo();
    console.log(`Height: ${this.height} meters`);
  }
}

// Example usage
const skyScraper = new SkyHighBuilding('SkyScraper', 50, '456 High Street', 300);
skyScraper.getBuildingInfo();
