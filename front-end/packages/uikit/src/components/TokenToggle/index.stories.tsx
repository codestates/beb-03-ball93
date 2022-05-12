import React, { useState } from 'react';
import TokenToggle from './TokenToggle';

export default {
  title: 'Components/TokenToggle',
  component: TokenToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: '32px' }}>
        <TokenToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: '32px' }}>
        <TokenToggle checked={isChecked} onChange={toggle} scale='md' />
      </div>
      <div>
        <TokenToggle checked={isChecked} onChange={toggle} scale='sm' />
      </div>
    </>
  );
};
