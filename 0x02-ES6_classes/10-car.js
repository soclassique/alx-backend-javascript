class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineStatus = 'off';
    this.speed = 0;
  }

  startEngine() {
    if (this.engineStatus === 'off') {
      this.engineStatus = 'on';
      console.log('Engine started.');
    } else {
      console.log('Engine is already running.');
    }
  }

  stopEngine() {
    if (this.engineStatus === 'on') {
      this.engineStatus = 'off';
      this.speed = 0;
      console.log('Engine stopped.');
    } else {
      console.log('Engine is already off.');
    }
  }

  accelerate() {
    if (this.engineStatus === 'on') {
      this.speed += 10;
      console.log(`Accelerated. Current speed: ${this.speed} km/h.`);
    } else {
      console.log('Cannot accelerate. Engine is off.');
    }
  }

  brake() {
    if (this.engineStatus === 'on' && this.speed > 0) {
      this.speed -= 10;
      console.log(`Brake applied. Current speed: ${this.speed} km/h.`);
    } else if (this.speed === 0) {
      console.log('Car is already stationary.');
    } else {
      console.log('Cannot brake. Engine is off.');
    }
  }
}

// Example usage
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.startEngine();
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.stopEngine();
