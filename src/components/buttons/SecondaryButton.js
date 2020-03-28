import React, { memo } from 'react';
import GeneralButton, { propTypes, defaultProps } from './GeneralButton';

function SecondaryButton(props) {
  const propsToPass = { ...props, btnType: 'secondary' };

  return <GeneralButton {...propsToPass} />;
}

SecondaryButton.propTypes = propTypes;
SecondaryButton.defaultProps = defaultProps;

export default memo(SecondaryButton);
