import React, { HTMLAttributes } from 'react';
import Button from '../Button';
import ErrorIcon from '../../assets/icons/close-circle-outline.svg';
import Container from './index.styles';

export interface IActionsProps {
  isButton: boolean,
  text: string,
  name: string,
  styles: any,
  disabled: boolean,
  onClick: () => {}
}

export interface IErrorBoxProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  border?: string;
  message?: string;
  imgContainerStyles?: any;
  messageStyles?: any;
  hasActions?: boolean;
  actions?: [IActionsProps];
}

const ErrorBox = (props: IErrorBoxProps) => {
  return <Container {...props}>
    <div style={props.imgContainerStyles} className='errorBox_img_container'>
      <img src={ErrorIcon} />
    </div>
    <p style={props.messageStyles}>
      {props.message || 'Something wrong happened. Please try again later.'}
    </p>
    {
      props.hasActions &&
      <div className='errorBox_action_container'>
        {
          props.actions.map(action =>
            action.isButton ? <Button
              onClick={action.onClick}
              style={action.styles}
              label={action.text}
              disabled={action.disabled}
            /> : <p>{action.text}</p>
          )
        }
      </div>
    }
  </Container>;
};

export default ErrorBox;

ErrorBox.defaultProps = {
  width: '600px',
  height: '300px'
};