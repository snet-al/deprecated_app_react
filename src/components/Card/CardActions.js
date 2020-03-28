import React, { memo } from 'react';
import classNames from 'classnames';

function CardActions({ className, children }) {
  const cardActionClasses = classNames({
    'card-actions': true,
    [className]: !!className,
  });

  return <footer className={cardActionClasses}>{children}</footer>;
}

export default memo(CardActions);
