import React, { useState, useEffect } from "react";
import { Transition } from "semantic-ui-react";

export const Title = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  return (
    <div class="center-text">
      <Transition visible={isVisible} animation="fade up" duration={2200}>
        <h2>{title}</h2>
      </Transition>
    </div>
  );
};
