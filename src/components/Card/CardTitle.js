import React, { memo } from 'react';
import classNames from 'classnames';

function CardTitle({ className, children }) {
  const cardTitleClasses = classNames({
    'card-title': true,
    [className]: !!className,
  });

  return <header className={cardTitleClasses}>{children}</header>;
}

export default memo(CardTitle);
