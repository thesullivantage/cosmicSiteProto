import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import '../../../assets/override.css'

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className,
    'float-container'
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0 float-child">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/gsu.png')}
            alt="Open"
            width={32}
            height={32} />
        </Link>
        
      </h1>
      <div className="university float-child">Georgia State University</div>
    </div>
  );
}

export default Logo;