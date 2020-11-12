
import React, { useState } from 'react';
import classNames from 'classnames';



const FrameComponent = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'FrameComponent',
    className
  );

  const iFrame = function () {
    return {
      __html: props.iframe
    }
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={iFrame()} />
    </div>
  );
}

export default FrameComponent;
