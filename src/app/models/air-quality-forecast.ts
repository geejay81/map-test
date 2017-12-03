export class AirQualityForecastPeriod {
  forecastType: string;
  forecastBand: string;
  forecastSummary: string;
  forecastText: string;
  nO2Band: string;
  o3Band: string;
  pM10Band: string;
  pM25Band: string;
  sO2Band: string;

  constructor(
    forecastType: string,
    forecastBand: string,
    forecastSummary: string,
    forecastText: string
  ) {
    forecastType = forecastType;
    forecastBand = forecastBand;
    forecastSummary = forecastSummary;
    forecastText = forecastText;
  }
}

export class AirQualityForecast {
  disclaimerText: string;
  currentForecast: AirQualityForecastPeriod[];

  constructor(disclaimerText: string) {
    disclaimerText = disclaimerText;
  }
}
