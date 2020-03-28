import React, { memo } from 'react';
import GeneralButton, { propTypes, defaultProps } from './GeneralButton';

function SuccessButton(props) {
  const propsToPass = { ...props, btnType: 'success' };

  return <GeneralButton {...propsToPass} />;
}

SuccessButton.propTypes = propTypes;
SuccessButton.defaultProps = defaultProps;

export default memo(SuccessButton);
