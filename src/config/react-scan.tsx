'use client';
import { useEffect } from 'react';
import { scan } from 'react-scan';

const ReactScan = () => {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
};

export default ReactScan;
