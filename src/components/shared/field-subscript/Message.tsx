import * as React from 'react';
import styles from '@sicredi/styles/_shared.scss';
import cn from 'clsx';

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  show?: boolean;
  invalid?: boolean;
}

const Message: React.FunctionComponent<Props> = ({
  show,
  invalid,
  children,
  className,
  ...props
}) => {
  return (
    <p
      aria-hidden={show ? 'false' : 'true'}
      className={cn(styles['message'], className, {
        [styles['-invalid']]: invalid,
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Message;
