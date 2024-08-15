'use client';

import { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './titles.scss';

export default function Titles() {
  const titles = ['Frontend Developer', 'UX Engineer', 'Hobby Astronomer', 'Husband', 'Cat Dad'];
  const [index, setIndex] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      if (index + 1 >= titles.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);

    return () => clearInterval(titleInterval);
  }, [index, titles.length]);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={index} nodeRef={titleRef} classNames="titles" timeout={500}>
        <p ref={titleRef} className="titles">
          {titles[index]}
        </p>
      </CSSTransition>
    </SwitchTransition>
  );
}
