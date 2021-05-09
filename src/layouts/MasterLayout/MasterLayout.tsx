import cx from 'classnames';
import React from 'react';
import { Button } from 'antd';

import styles from './styles.module.less';

export interface IProps {
  children: React.ReactNode;
  //
  disableHeader?: boolean;
  disableFooter?: boolean;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const MasterLayout: React.FC<IProps> = (props) => (
  <div
    id="g-layout-wrapper--master"
    className={cx(
      styles['layout-wrapper'],
      { [styles['layout-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
      'g-layout-wrapper--master',
    )}
    style={props.style}
  >
    {/* eslint-disable-next-line max-len */}
    {/* <Button block className="test"> if uncommented then refresh it works but not block?</Button> */}
    <div
      className={cx(styles['layout-container'], 'g-layout-container--master')}
    >
      {props.children}
    </div>
  </div>
);
