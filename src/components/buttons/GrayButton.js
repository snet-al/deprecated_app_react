import React, { memo } from 'react';
import GeneralButton, { propTypes, defaultProps } from './GeneralButton';

function GrayButton(props) {
  const { outline, ...propsNoOutline } = props;
  propsNoOutline.btnType = 'gray';

  return <GeneralButton {...propsNoOutline} />;
}

const { outlinePT, ...propTypesNoOutline } = propTypes;
const { outlineDF, ...defaultPropsNoOutline } = defaultProps;

GrayButton.propTypes = propTypesNoOutline;
GrayButton.defaultProps = defaultPropsNoOutline;

export default memo(GrayButton);
