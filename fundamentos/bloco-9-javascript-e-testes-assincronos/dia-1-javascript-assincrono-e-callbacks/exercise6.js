const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, handleError) => {
    const marsTemp = getMarsTemperature();
    const tempF = toFahrenheit(marsTemp);
    setTimeout (() => {
        if (callback === temperatureInFahrenheit) {
            try {
                return callback(tempF.toFixed(2));
            } catch (error) {
                return handleError('robot is busy')
            }
        }
        if (callback === greet) {
            try {
                return callback(marsTemp.toFixed(2));
            } catch (erro) {
                return handleError('robot is busy')
            }
        }
    },messageDelay());
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);