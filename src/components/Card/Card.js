import React, { memo } from 'react';
import classNames from 'classnames';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardActions from './CardActions';

const hasCardSemantics = el =>
  (el.props &&
    el.props.className &&
    (el.props.className.includes('card-title') ||
      el.props.className.includes('card-actions') ||
      el.props.className.includes('card-body'))) ||
  el.type === CardTitle ||
  el.type === CardActions ||
  el.type === CardBody;

function Card({ className, children }) {
  let childrenHaveCardSemantics = false;

  if (children instanceof Array) {
    childrenHaveCardSemantics = children.some(hasCardSemantics);
  } else {
    childrenHaveCardSemantics = hasCardSemantics(children);
  }

  const body = childrenHaveCardSemantics ? (
    children
  ) : (
    <CardBody>{children}</CardBody>
  );

  const cardClasses = classNames({
    card: true,
    [className]: !!className,
  });

  return <section className={cardClasses}>{body}</section>;
}

export default memo(Card);
