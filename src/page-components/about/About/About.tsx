import { IPageProps } from '@/interfaces';
import { Button } from 'antd';
import React from 'react';


interface IProps extends IPageProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const About: React.FC<IProps> = (props) => (
  <Button block className="test" >
    should be red background and block button
  </Button>
);
