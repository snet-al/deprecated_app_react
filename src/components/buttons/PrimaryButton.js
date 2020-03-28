import React, { memo } from 'react';
import GeneralButton, { propTypes, defaultProps } from './GeneralButton';

function PrimaryButton(props) {
  return <GeneralButton {...props} />;
}

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

export default memo(PrimaryButton);
