import * as React from 'react';
import styles from '@sicredi/styles/_shared.scss';
import cn from 'clsx';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Group: React.FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles['group'], className)} {...props}>
      {children}
    </div>
  );
};

export default Group;
