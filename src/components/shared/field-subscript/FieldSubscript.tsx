import * as React from 'react';
import styles from '@sicredi/styles/_shared.scss';
import cn from 'clsx';

import Group, { Props as GroupProps } from './Group';
import Message, { Props as MessageProps } from './Message';
import Progress, { Props as ProgressProps } from './Progress';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export interface CompoundedFieldSubscript
  extends React.FunctionComponent<Props> {
  Group: React.FunctionComponent<GroupProps>;
  Message: React.FunctionComponent<MessageProps>;
  Progress: React.FunctionComponent<ProgressProps>;
}

const FieldSubscript: CompoundedFieldSubscript = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles['sicredi-field-subscript'], className)}
      {...props}
    >
      {children}
    </div>
  );
};

FieldSubscript.Group = Group;
FieldSubscript.Message = Message;
FieldSubscript.Progress = Progress;

export default FieldSubscript;
