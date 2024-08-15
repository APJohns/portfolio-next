'use client';

import { useCallback, useEffect, useState } from 'react';

export default function Time() {
  const [timeString, setTimeString] = useState('');

  const setTime = useCallback(() => {
    const now = new Date().toLocaleTimeString(navigator.language, {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    });
    if (now !== timeString) {
      setTimeString(now);
    }
  }, [timeString]);

  useEffect(() => {
    setTime();
    const clock = setInterval(setTime, 1000);
    return () => clearInterval(clock);
  }, [setTime, timeString]);

  return <p className="time">{timeString}</p>;
}
