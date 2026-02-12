import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../Styles/CountryComparison.css';

const countryData = {
  Canada: {
    flag: '🇨🇦',
    prCost: 'CAD 4,500',
    prTime: '6-8 months',
    language: 'English/French',
    minPoints: '67/100',
    jobMarket: 'Excellent',
    healthcare: 'Free',
    education: 'Affordable',
    climate: 'Cold winters',
    pathToPR: 'Express Entry, PNP'
  },
  Australia: {
    flag: '🇦🇺',
    prCost: 'AUD 4,700',
    prTime: '6-8 months',
    language: 'English',
    minPoints: '65/100',
    jobMarket: 'Very Good',
    healthcare: 'Medicare',
    education: 'High quality',
    climate: 'Warm/Hot',
    pathToPR: 'Skilled Migration, State Nomination'
  },
  UK: {
    flag: '🇬🇧',
    prCost: 'GBP 3,200',
    prTime: '5 years',
    language: 'English',
    minPoints: '70/100',
    jobMarket: 'Good',
    healthcare: 'NHS (Free)',
    education: 'World-class',
    climate: 'Mild/Rainy',
    pathToPR: 'Skilled Worker, ILR'
  },
  USA: {
    flag: '🇺🇸',
    prCost: 'USD 5,000+',
    prTime: '2-5 years',
    language: 'English',
    minPoints: 'N/A',
    jobMarket: 'Excellent',
    healthcare: 'Private (Expensive)',
    education: 'Top universities',
    climate: 'Varies',
    pathToPR: 'EB-5, H1B to Green Card'
  },
  Germany: {
    flag: '🇩🇪',
    prCost: 'EUR 2,800',
    prTime: '2-4 months',
    language: 'German',
    minPoints: 'N/A',
    jobMarket: 'Very Good',
    healthcare: 'Public',
    education: 'Free/Low cost',
    climate: 'Moderate',
    pathToPR: 'Blue Card, Work Permit'
  }
};

export default function CountryComparison() {
  const [selectedCountries, setSelectedCountries] = useState(['Canada', 'Australia']);

  const handleCountryChange = (index, country) => {
    const newSelection = [...selectedCountries];
    newSelection[index] = country;
    setSelectedCountries(newSelection);
  };

  return (
    <div className="country-comparison">
      <h2 className="text-center mb-4">Compare Migration Destinations</h2>
      
      <div className="country-selectors">
        {[0, 1].map((index) => (
          <select
            key={index}
            value={selectedCountries[index]}
            onChange={(e) => handleCountryChange(index, e.target.value)}
            className="form-select country-select"
          >
            {Object.keys(countryData).map((country) => (
              <option key={country} value={country}>
                {countryData[country].flag} {country}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="comparison-table">
        <table className="table">
          <thead>
            <tr>
              <th>Feature</th>
              {selectedCountries.map((country, idx) => (
                <th key={`header-${idx}`} className="text-center">
                  <div className="country-header">
                    <span className="country-flag">{countryData[country].flag}</span>
                    <span>{country}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PR Cost</td>
              {selectedCountries.map((country, idx) => (
                <td key={`cost-${idx}`} className="text-center">{countryData[country].prCost}</td>
              ))}
            </tr>
            <tr>
              <td>Processing Time</td>
              {selectedCountries.map((country, idx) => (
                <td key={`time-${idx}`} className="text-center">{countryData[country].prTime}</td>
              ))}
            </tr>
            <tr>
              <td>Language Required</td>
              {selectedCountries.map((country, idx) => (
                <td key={`lang-${idx}`} className="text-center">{countryData[country].language}</td>
              ))}
            </tr>
            <tr>
              <td>Minimum Points</td>
              {selectedCountries.map((country, idx) => (
                <td key={`points-${idx}`} className="text-center">{countryData[country].minPoints}</td>
              ))}
            </tr>
            <tr>
              <td>Job Market</td>
              {selectedCountries.map((country, idx) => (
                <td key={`job-${idx}`} className="text-center">{countryData[country].jobMarket}</td>
              ))}
            </tr>
            <tr>
              <td>Healthcare</td>
              {selectedCountries.map((country, idx) => (
                <td key={`health-${idx}`} className="text-center">{countryData[country].healthcare}</td>
              ))}
            </tr>
            <tr>
              <td>Education Cost</td>
              {selectedCountries.map((country, idx) => (
                <td key={`edu-${idx}`} className="text-center">{countryData[country].education}</td>
              ))}
            </tr>
            <tr>
              <td>Climate</td>
              {selectedCountries.map((country, idx) => (
                <td key={`climate-${idx}`} className="text-center">{countryData[country].climate}</td>
              ))}
            </tr>
            <tr>
              <td>Path to PR</td>
              {selectedCountries.map((country, idx) => (
                <td key={`path-${idx}`} className="text-center">{countryData[country].pathToPR}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
