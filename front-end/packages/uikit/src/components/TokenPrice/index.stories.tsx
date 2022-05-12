import React from 'react';
import { TokenPrice, TokenPriceProps } from '.';
import { Flex } from '../Box';

export default {
  title: 'Components/TokenPrice',
  component: TokenPrice,
};

const Template: React.FC<TokenPriceProps> = ({ ...args }) => {
  return (
    <Flex p='10px'>
      <TokenPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  tokenPriceUsd: 20.0,
};
