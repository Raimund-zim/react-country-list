import { CountryList } from "./components/CountryList";
import countries from "./data/country-data.json";
import { transformCountries } from "./mappers/countryMapper";

function App() {
  const transformedCountries = transformCountries(countries);

  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
}

export default App;
