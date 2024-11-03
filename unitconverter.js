  const inputValue = document.getElementById('inputValue103');
    const outputValue = document.getElementById('outputValue103');
    const unitFrom = document.getElementById('unitFrom103');
    const unitTo = document.getElementById('unitTo103');
    const convertedValue = document.getElementById('convertedValue103');

    inputValue.addEventListener('input', updateResult);
    unitFrom.addEventListener('change', updateResult);
    unitTo.addEventListener('change', updateResult);
    outputValue.addEventListener('input', updateResultOutput);

    function updateResult() {
        const value = parseFloat(inputValue.value);
        const fromUnit = unitFrom.value;
        const toUnit = unitTo.value;

        let converted = 0.00; // Default value

        // Check if the input value is valid
        if (!isNaN(value) && fromUnit !== "" && toUnit !== "") {
            // Length conversion
            if (['m', 'km', 'ft', 'in'].includes(fromUnit) && ['m', 'km', 'ft', 'in'].includes(toUnit)) {
                converted = convertLength(value, fromUnit, toUnit);
            }

            // Weight conversion
            if (['g', 'kg', 'lb'].includes(fromUnit) && ['g', 'kg', 'lb'].includes(toUnit)) {
                converted = convertWeight(value, fromUnit, toUnit);
            }

            // Temperature conversion
            if (['c', 'f'].includes(fromUnit) && ['c', 'f'].includes(toUnit)) {
                converted = convertTemperature(value, fromUnit, toUnit);
            }
        }

        outputValue.value = `${converted.toFixed(2)}`;
        convertedValue.textContent = `${converted.toFixed(2)}`;
    }

    function updateResultOutput() {
        const value = parseFloat(outputValue.value);
        const fromUnit = unitTo.value;
        const toUnit = unitFrom.value;

        let converted = 0.00; // Default value

        // Check if the input value is valid
        if (!isNaN(value) && fromUnit !== "" && toUnit !== "") {
            // Length conversion
            if (['m', 'km', 'ft', 'in'].includes(fromUnit) && ['m', 'km', 'ft', 'in'].includes(toUnit)) {
                converted = convertLength(value, fromUnit, toUnit);
            }

            // Weight conversion
            if (['g', 'kg', 'lb'].includes(fromUnit) && ['g', 'kg', 'lb'].includes(toUnit)) {
                converted = convertWeight(value, fromUnit, toUnit);
            }

            // Temperature conversion
            if (['c', 'f'].includes(fromUnit) && ['c', 'f'].includes(toUnit)) {
                converted = convertTemperature(value, fromUnit, toUnit);
            }
        }

        inputValue.value = `${converted.toFixed(2)}`;
        convertedValue.textContent = `${converted.toFixed(2)}`;
    }

    function convertLength(value, fromUnit, toUnit) {
        const meterConversions = {
            'm': 1,
            'km': 1000,
            'ft': 0.3048,
            'in': 0.0254
        };
        const valueInMeters = value * meterConversions[fromUnit];
        return valueInMeters / meterConversions[toUnit];
    }

    function convertWeight(value, fromUnit, toUnit) {
        const weightConversions = {
            'g': 1,
            'kg': 1000,
            'lb': 453.592
        };
        const valueInGrams = value * weightConversions[fromUnit];
        return valueInGrams / weightConversions[toUnit];
    }

    function convertTemperature(value, fromUnit, toUnit) {
        if (fromUnit === 'c' && toUnit === 'f') {
            return (value * 9/5) + 32; // Celsius to Fahrenheit
        } else if (fromUnit === 'f' && toUnit === 'c') {
            return (value - 32) * 5/9; // Fahrenheit to Celsius
        }
        return value; // No conversion needed
    }
