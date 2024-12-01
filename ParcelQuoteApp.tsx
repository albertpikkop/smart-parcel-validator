import React, { useState } from 'react';

const DELIVERY_TIMES = {
  standard: { time: '3-5 days', price: 1 },
  express: { time: '1-2 days', price: 1.5 },
  sameDay: { time: '4-6 hours', price: 2 }
};

const ParcelQuoteApp = () => {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState('es');
  
  const [formData, setFormData] = useState({
    originCountry: '',
    originZipCode: '',
    destZipCode: '',
    parcelType: 'box',
    weight: 1,
    dimensions: { length: 30, width: 20, height: 15 },
    insurance: 0,
    deliverySpeed: 'standard'
  });

  const t = (es, en) => language === 'es' ? es : en;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOriginCountryChange = (e) => {
    setFormData(prev => ({
      ...prev,
      originCountry: e.target.value
    }));
  };

  const handleOriginZipChange = (e) => {
    setFormData(prev => ({
      ...prev,
      originZipCode: e.target.value
    }));
  };

  const handleDestZipChange = (e) => {
    setFormData(prev => ({
      ...prev,
      destZipCode: e.target.value
    }));
  };

  const renderOriginZipInfo = () => {
    const originZipData = zipCodeData[formData.originCountry]?.[formData.originZipCode];
    if (!originZipData) return null;

    return (
      <div className="mt-2">
        <p>Colonia: {originZipData.colonia}</p>
        <p>Alcaldía: {originZipData.alcaldia}</p>
        <p>State: {originZipData.state}</p>
      </div>
    );
  };

  const renderDestZipInfo = () => {
    const destZipData = zipCodeData[formData.destCountry]?.[formData.destZipCode];
    if (!destZipData) return null;

    return (
      <div className="mt-2">
        <p>Colonia: {destZipData.colonia}</p>
        <p>Alcaldía: {destZipData.alcaldia}</p>
        <p>State: {destZipData.state}</p>
        {destZipData.colonias.length > 1 && (
          <div>
            <label className="block mb-2">Select Colonia</label>
            <select className="w-full p-2 border rounded">
              {destZipData.colonias.map((colonia) => (
                <option key={colonia}>{colonia}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  };

  const renderResults = () => (
    <div className="p-4 space-y-4">
      {/* Shipping options display */}
    </div>
  );

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">{t('Código Postal Origen', 'Origin Zip Code')}</label>
              <input
                type="text"
                value={formData.originZipCode}
                onChange={handleOriginZipChange}
                className="w-full p-2 border rounded"
                maxLength={5}
              />
              {renderOriginZipInfo()}
            </div>
            <div>
              <label className="block mb-2">{t('Código Postal Destino', 'Destination Zip Code')}</label>
              <input
                type="text"
                value={formData.destZipCode}
                onChange={handleDestZipChange}
                className="w-full p-2 border rounded"
                maxLength={5}
              />
              {renderDestZipInfo()}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            {/* Package type and weight inputs */}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            {/* Delivery speed selection */}
          </div>
        );

      case 4:
        return renderResults();

      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">{t('Cotizar Envío', 'Get Shipping Quote')}</h1>
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="px-3 py-1 bg-gray-100 rounded"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {step < 4 && (
          <div className="flex mb-6">
            {[1, 2, 3].map(s => (
              <div
                key={s}
                className={`flex-1 h-2 mx-1 rounded ${s <= step ? 'bg-blue-500' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        )}

        {renderStepContent()}

        {step < 4 && (
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="px-4 py-2 bg-gray-100 rounded"
              >
                {t('Anterior', 'Previous')}
              </button>
            )}
            <button
              onClick={() => setStep(s => s + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded ml-auto"
            >
              {step === 3 ? t('Ver Cotización', 'Get Quote') : t('Siguiente', 'Next')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const zipCodeData = {
  // Placeholder data structure
  US: {
    '10001': {
      colonia: 'Chelsea',
      alcaldia: 'Manhattan',
      state: 'NY',
      colonias: ['Chelsea', 'Greenwich Village']
    },
    '90001': {
      colonia: 'South Central',
      alcaldia: 'Los Angeles',
      state: 'CA',
      colonias: ['South Central', 'Florence-Graham']
    }
  }
};

export default ParcelQuoteApp;