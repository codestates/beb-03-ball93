import React, { useState } from 'react';
import Box from '../Box/Box';
import BalanceInput from './BalanceInput';
import TextFieldComp from './TextField';

export default {
  title: 'Components/BalanceInput',
  component: BalanceInput,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [decimalValue, setDecimalValue] = useState(1.43333);
  const [numericValue, setNumericValue] = useState(5);

  const currencyValue = (input: number) => {
    return `~${(input * 1.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleDecimalChange = (input) => {
    setDecimalValue(input);
  };

  const handleNumericChange = (input) => {
    setNumericValue(input);
  };

  return (
    <Box width='300px'>
      <BalanceInput
        onUserInput={handleDecimalChange}
        value={decimalValue}
        currencyValue={currencyValue(decimalValue)}
        placeholder='0.0'
        mb='32px'
      />
      <BalanceInput
        value={decimalValue * 1.5}
        onUserInput={handleDecimalChange}
        currencyValue={currencyValue(decimalValue * 1.5)}
        placeholder='1.5'
        isWarning
        mb='32px'
      />
      <BalanceInput
        value={numericValue}
        onUserInput={handleNumericChange}
        inputProps={{ inputMode: 'numeric' }}
        currencyValue={currencyValue(numericValue)}
        placeholder='0'
        mb='32px'
      />
    </Box>
  );
};

export const UnitDisplay: React.FC = () => {
  const TOKEN_PRICE = 69;
  const [tokenValue, setTokenValue] = useState('1006.086956');

  const tokenToUSD = (input: string) => {
    const convertedToUSD = parseFloat(input) * TOKEN_PRICE;
    return `~${convertedToUSD.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleTokenChange = (input: string) => {
    setTokenValue(input);
  };

  return (
    <>
      <Box width='300px' mb='24px'>
        <BalanceInput
          onUserInput={handleTokenChange}
          value={tokenValue}
          currencyValue={tokenToUSD(tokenValue)}
          placeholder='0.0'
          unit='TOKEN'
        />
      </Box>
      {/* Long token names with spaces */}
      <Box width='300px'>
        <BalanceInput
          onUserInput={handleTokenChange}
          value={tokenValue}
          currencyValue='2854.66 BADGER-HOTCROSS LP'
          placeholder='0.0'
          unit='TOKEN-BNB LP'
        />
      </Box>
    </>
  );
};

export const SiwtchUnits: React.FC = () => {
  const TOKEN_PRICE = 69;
  const [editingUnit, setEditingUnit] = useState<'TOKEN' | 'USD'>('TOKEN');
  const conversionUnit = editingUnit === 'TOKEN' ? 'USD' : 'TOKEN';
  const [values, setValues] = useState({
    TOKEN: '1006.086957',
    USD: `${1006.086957 * TOKEN_PRICE}`,
  });

  const currencyValue = !Number.isNaN(parseFloat(values[conversionUnit]))
    ? parseFloat(values[conversionUnit]).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : '0.00';

  const switchEditingUnits = () => {
    const editingUnitAfterChange = editingUnit === 'TOKEN' ? 'USD' : 'TOKEN';
    // This is needed to persist same value as shown for currencyValue after switching
    // otherwise user will see lots of decimals
    const valuesAfterChange = { ...values };
    valuesAfterChange[editingUnitAfterChange] = !Number.isNaN(parseFloat(values[conversionUnit]))
      ? parseFloat(values[conversionUnit]).toFixed(2)
      : '0.00';
    setValues(valuesAfterChange);
    setEditingUnit(editingUnitAfterChange);
  };

  const handleTokenChange = (input: string) => {
    const inputAsFloat = parseFloat(input);
    if (editingUnit === 'TOKEN') {
      setValues({
        TOKEN: input,
        USD: Number.isNaN(inputAsFloat) ? '' : `${inputAsFloat * TOKEN_PRICE}`,
      });
    } else {
      setValues({
        TOKEN: Number.isNaN(inputAsFloat) ? '' : `${inputAsFloat / TOKEN_PRICE}`,
        USD: input,
      });
    }
  };

  return (
    <Box width='300px'>
      <BalanceInput
        onUserInput={handleTokenChange}
        value={values[editingUnit]}
        currencyValue={`~${currencyValue} ${conversionUnit}`}
        placeholder='0.0'
        unit={editingUnit}
        isWarning={!values[editingUnit] || parseFloat(values[editingUnit]) <= 0}
        switchEditingUnits={switchEditingUnits}
      />
    </Box>
  );
};

export const Textfield: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Box width='300px'>
      <TextFieldComp label='Label' value={value} placeholder='Placeholder' onUserInput={setValue} />
    </Box>
  );
};
