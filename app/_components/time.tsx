'use client';

import { useEffect, useState } from 'react';

export default function Time() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date().toLocaleTimeString(navigator.language, {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      });
      if (now !== timeString) {
        setTimeString(now);
      }
    }, 1000);

    return () => clearInterval(clock);
  }, [timeString]);

  return <p className="time">{timeString}</p>;
}
