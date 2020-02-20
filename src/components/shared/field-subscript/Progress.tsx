import * as React from 'react';
import styles from '@sicredi/styles/_shared.scss';
import cn from 'clsx';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  max: number;
  value: number;
  invalid?: boolean;
}

const Progress: React.FunctionComponent<Props> = ({
  max,
  value,
  invalid,
  className,
  ...props
}) => {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={value}
      aria-valuemax={max}
      className={cn(className, {
        [styles['-invalid']]: invalid || value > max,
      })}
      {...props}
    />
  );
};

export default Progress;
