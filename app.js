// https://calculator.swiftutors.com/thermal-diffusivity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const thermalDiffusivityRadio = document.getElementById('thermalDiffusivityRadio');
const thermalConductivityRadio = document.getElementById('thermalConductivityRadio');
const densityRadio = document.getElementById('densityRadio');
const specificHeatCapacityRadio = document.getElementById('specificHeatCapacityRadio');

let thermalDiffusivity;
let thermalConductivity = v1;
let density = v2;
let specificHeatCapacity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

thermalDiffusivityRadio.addEventListener('click', function() {
  variable1.textContent = '(k) Thermal Conductivity (W/m-K)';
  variable2.textContent = '(ρ) Density (kg/m³)';
  variable3.textContent = '(Cp) Specific Heat Capacity (J/kg-K)';
  thermalConductivity = v1;
  density = v2;
  specificHeatCapacity = v3;
  result.textContent = '';
});

thermalConductivityRadio.addEventListener('click', function() {
  variable1.textContent = '(α) Thermal Diffusivity (m²/s)';
  variable2.textContent = '(ρ) Density (kg/m³)';
  variable3.textContent = '(Cp) Specific Heat Capacity (J/kg-K)';
  thermalDiffusivity = v1;
  density = v2;
  specificHeatCapacity = v3;
  result.textContent = '';
});

densityRadio.addEventListener('click', function() {
  variable1.textContent = '(α) Thermal Diffusivity (m²/s)';
  variable2.textContent = '(k) Thermal Conductivity (W/m-K)';
  variable3.textContent = '(Cp) Specific Heat Capacity (J/kg-K)';
  thermalDiffusivity = v1;
  thermalConductivity = v2;
  specificHeatCapacity = v3;
  result.textContent = '';
});

specificHeatCapacityRadio.addEventListener('click', function() {
  variable1.textContent = '(α) Thermal Diffusivity (m²/s)';
  variable2.textContent = '(k) Thermal Conductivity (W/m-K)';
  variable3.textContent = '(ρ) Density (kg/m³)';
  thermalDiffusivity = v1;
  thermalConductivity = v2;
  density = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(thermalDiffusivityRadio.checked)
    result.textContent = `Thermal Diffusivity = ${computeThermalDiffusivity().toFixed(2)} m²/s`;

  else if(thermalConductivityRadio.checked)
    result.textContent = `Thermal Conductivity = ${computeThermalConductivity().toFixed(2)} W/m-K`;

  else if(densityRadio.checked)
    result.textContent = `Density = ${computeDensity().toFixed(2)} kg/m³`;

  else if(specificHeatCapacityRadio.checked)
    result.textContent = `Specific Heat Capacity = ${computeSpecificHeatCapacity().toFixed(2)} J/kg-K`;
})

// calculation

function computeThermalDiffusivity() {
  return Number(thermalConductivity.value) / (Number(density.value) * Number(specificHeatCapacity.value));
}

function computeThermalConductivity() {
  return Number(thermalDiffusivity.value) * Number(density.value) * Number(specificHeatCapacity.value);
}

function computeDensity() {
  return Number(thermalConductivity.value) / (Number(thermalDiffusivity.value) * Number(specificHeatCapacity.value));
}

function computeSpecificHeatCapacity() {
  return Number(thermalConductivity.value) / (Number(density.value) * Number(thermalDiffusivity.value));
}