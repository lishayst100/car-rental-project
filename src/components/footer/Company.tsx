import React from 'react'

const Company = () => {
    const cities = ['New York', 'Jerusalem', 'Haifa', 'Rome', 'Tokyo']
  return (
    <div className="col-lg">
      <h3 className="subtitle pb-3">COMPANY</h3>
      {cities.map((city) => (
        <p className="para font-bolder" key={city}>
          {city}
        </p>
      ))}
    </div>
  );
}

export default Company