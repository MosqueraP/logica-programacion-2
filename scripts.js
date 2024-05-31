function solicitarTemperatura() {
    let celsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");

    // Validamos que el input sea un número
    while (isNaN(celsius) || celsius === null || celsius.trim() === "") {
        alert("Entrada inválida. Por favor, ingresa un número válido.");
        celsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");
    }

    // Convertmos el input a un número
    celsius = parseFloat(celsius);

    // Convertimos de Celsius a Fahrenheit y Kelvin
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Mostramos los resultados en el DOM
    document.getElementById('resultados').innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
}

// Ejecutamos la función después de que el DOM esté completamente cargado para que muestre en pantalla
document.addEventListener('DOMContentLoaded', (event) => {
    solicitarTemperatura();
});
