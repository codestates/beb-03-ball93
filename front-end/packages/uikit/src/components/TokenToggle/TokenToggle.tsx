import React from 'react';
import { TokenStack, TokenInput, TokenLabel } from './StyledTokenToggle';
import { TokenToggleProps, scales } from './types';

const TokenToggle: React.FC<TokenToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <TokenStack scale={scale}>
    <TokenInput id={props.id || 'token-toggle'} scale={scale} type='checkbox' checked={checked} {...props} />
    <TokenLabel scale={scale} checked={checked} htmlFor={props.id || 'token-toggle'}>
      <div className='tokens'>
        <div className='token' />
        <div className='token' />
        <div className='token' />
        <div className='butter' />
      </div>
    </TokenLabel>
  </TokenStack>
);

export default TokenToggle;
