import React, { memo } from 'react';
import classNames from 'classnames';

function CardBody({ className, children }) {
  const cardBodyClasses = classNames({
    'card-body': true,
    [className]: !!className,
  });

  return <section className={cardBodyClasses}>{children}</section>;
}

export default memo(CardBody);
