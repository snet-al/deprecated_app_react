/* eslint-disable react/forbid-foreign-prop-types */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as icons from 'react-feather';

const calculateSize = (xs, sm, lg, xl) =>
  xl ? 32 : lg ? 28 : sm ? 20 : xs ? 16 : 24;

function GeneralButton({
  className,
  btnType,
  outline,
  icon,
  xs,
  sm,
  lg,
  xl,
  actionBtn,
  onClick,
  children,
}) {
  const btnClasses = classNames({
    btn: true,
    [className]: !!className,
    'btn-xs': xs,
    'btn-sm': sm,
    'btn-lg': lg,
    'btn-xl': xl,
    'btn-action': actionBtn,
    [`btn-${btnType}`]: !outline,
    [`btn-outline-${btnType}`]: outline,
  });

  const iconSize = calculateSize(xs, sm, lg, xl);
  const iconClassNames = classNames({ 'mr-1': children });
  const Icon = !icon ? null : icons[icon];
  const iconJSX = !icon ? null : (
    <Icon className={iconClassNames} size={iconSize} />
  );

  return (
    <button className={btnClasses} type="button" onClick={onClick}>
      {iconJSX} {children}
    </button>
  );
}

GeneralButton.propTypes = {
  className: PropTypes.string,
  btnType: PropTypes.oneOf(['primary', 'danger', 'succes', 'danger', 'gray']),
  outline: PropTypes.bool,
  icon: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  actionBtn: PropTypes.bool,
  onClick: PropTypes.func,
};

GeneralButton.defaultProps = {
  className: '',
  btnType: 'primary',
  outline: false,
  icon: null,
  xs: false,
  sm: false,
  lg: false,
  xl: false,
  actionBtn: false,
  onClick: null,
};

export const { propTypes, defaultProps } = GeneralButton;
export default memo(GeneralButton);
