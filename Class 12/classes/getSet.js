class Temperature{
    constructor(celsius)
    {
        this._celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }
    set celsius(value) {
        if (value < 273.15) {
            throw new Error("Temperature below 0 Kelvin is imposible!!")
        }
    }

    get farenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set farenheit(value) {
        this._celsius = ((value - 32) * 2) / 9; 
    }
}

const temp = new Temperature(0);
console.log(temp.celsius);
console.log(temp.farenheit);    