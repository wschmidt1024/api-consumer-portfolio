// https://openweathermap.org/api/one-call-api#data

export class OneCallResponse {
    current: CurrentWeatherDetails = new CurrentWeatherDetails();
    daily: DailyWeatherDetails[] = [];
    hourly: HourlyWeatherDetails[] = [];
    lat: number = 0;
    lon: number = 0;
    minutely: MinutelyWeather[] = [];
    timezone: string = '';
    timezone_offset: number = 0;
}

export class CurrentWeatherDetails {
    clouds: number = 0;
    dew_point: number = 0;
    dt: number = 0;
    feels_like: number = 0;
    humidity: number = 0;
    pressure: number = 0;
    sunrise: number = 0;
    sunset: number = 0;
    temp: number = 0;
    uvi: number = 0;
    visibility: number = 0;
    // TODO: get rest
}

export class DailyWeatherDetails {
    clouds: number = 0;
    dt: number = 0;
    pop: number = 0;
    rain: number = 0;
    temp: DailyTemperatureDetails = new DailyTemperatureDetails();
    weather: WeatherDescription[] = [];
    wind_deg: number = 0;
    wind_gust: number = 0;
    wind_speed: number = 0;
    // TODO: get rest
}

export class DailyTemperatureDetails {
    day: number = 0;
    eve: number = 0;
    max: number = 0;
    min: number = 0;
    morn: number = 0;
    night: number = 0;
}

export class HourlyWeatherDetails {
    clouds: number = 0;
    dew_point: number = 0;
    dt: number = 0;
    feels_like: number = 0;
    humidity: number = 0;
    rain: HourlyRain = new HourlyRain();
    pop: number = 0;
    pressure: number = 0;
    temp: number = 0;
    uvi: number = 0;
    visibility: number = 0;
    weather: WeatherDescription[] = [];
    wind_deg: number = 0;
    wind_gust: number = 0;
    wind_speed: number = 0;
}

export class HourlyRain {
    '1h': number = 0;
}

export class WeatherDescription {
    description: string = '';
    icon: string = '';
    id: number = 0;
    main: string = '';
}

export class MinutelyWeather {
    dt: number = 0;
    precipitation: number = 0;
}
