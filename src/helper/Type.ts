// export interface Main {
//     temp: number;
//     feels_like: number;
//     temp_min: number;
//     temp_max: number;
//     pressure: number;
//     sea_level: number;
//     grnd_level: number;
//     humidity: number;
//     temp_kf: number;
// }

// export interface Weather {
//     id: number;
//     main: string;
//     description: string;
//     icon: string;
// }

// export interface Clouds {
//     all: number;
// }

// export interface Wind {
//     speed: number;
//     deg: number;
//     gust: number;
// }

// export interface Sys {
//     pod: string;
// }

// export interface Rain {
//     '3h': number;
// }

// export interface List {
//     dt: number;
//     main: Main;
//     weather: Weather[];
//     clouds: Clouds;
//     wind: Wind;
//     visibility: number;
//     pop: number;
//     sys: Sys;
//     dt_txt: string;
//     rain: Rain;
// }

// export interface Coord {
//     lat: number;
//     lon: number;
// }

// export interface City {
//     id: number;
//     name: string;
//     coord: Coord;
//     country: string;
//     population: number;
//     timezone: number;
//     sunrise: number;
//     sunset: number;
// }

// export interface RootObject {
//     cod: string;
//     message: number;
//     cnt: number;
//     list: List[];
//     city: City;
// }


export interface Weather {
    icon: string;
    code: number;
    description: string;
}

export interface Datum {
    moonrise_ts: number;
    wind_cdir: string;
    rh: number;
    pres: number;
    high_temp: number;
    sunset_ts: number;
    ozone: number;
    moon_phase: number;
    wind_gust_spd: number;
    snow_depth: number;
    clouds: number;
    ts: number;
    sunrise_ts: number;
    app_min_temp: number;
    wind_spd: number;
    pop: number;
    wind_cdir_full: string;
    slp: number;
    moon_phase_lunation: number;
    valid_date: string;
    app_max_temp: number;
    vis: number;
    dewpt: number;
    snow: number;
    uv: number;
    weather: Weather;
    wind_dir: number;
    max_dhi?: any;
    clouds_hi: number;
    precip: number;
    low_temp: number;
    max_temp: number;
    moonset_ts: number;
    datetime: string;
    temp: number;
    min_temp: number;
    clouds_mid: number;
    clouds_low: number;
}

export interface RootObject {
    data: Datum[];
    city_name: string;
    lon: string;
    timezone: string;
    lat: string;
    country_code: string;
    state_code: string;
}

