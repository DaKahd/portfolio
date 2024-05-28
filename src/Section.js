import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Section.css';

function Section({ id, content, delay }) {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true,
  });

  return (
    <div
      id={id}
      ref={ref}
      className={`section ${inView ? 'visible' : 'invisible'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {content}
    </div>
  );
}

export default Section;
