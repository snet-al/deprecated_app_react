import React, { memo } from 'react';
import GeneralButton, { propTypes, defaultProps } from './GeneralButton';

function DangerButton(props) {
  const propsToPass = { ...props, btnType: 'danger' };

  return <GeneralButton {...propsToPass} />;
}

DangerButton.propTypes = propTypes;
DangerButton.defaultProps = defaultProps;

export default memo(DangerButton);
