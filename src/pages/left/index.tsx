import RhEvent from '@/shared/event';
import { useEffect, useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const subId = RhEvent.crossEvent.on('customEvent', (value: any) => {
      console.log(value);
      setValue(value);
    });

    return () => {
      RhEvent.crossEvent.off(subId);
    };
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Left Page index {value}</h1>
    </div>
  );
}
