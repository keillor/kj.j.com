import styles from './styles.module.css';
import {clsx} from 'clsx';
export default function KJLogo({height, animated}: {height:number, animated: boolean}) {
    return (<svg
        height={height}
        className={styles.kj}
        id="bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 537.74 356.45"
      >
        <path className={clsx({[styles.k]: animated === true, [styles.kNA]: animated === false})} d="M40.11,3v350.45" />
        <path
          className={clsx({[styles.k2]: animated === true, [styles.k2NA]: animated === false})}
          d="M222.63,353.45c-8.91-43.34-24.81-75.24-36.51-94.91-13.7-23.04-43.34-65.84-94.91-94.91-42.64-24.04-61.19-16.67-65.71-14.6-13.11,6-25.39,21.07-21.9,29.2,9.13,21.3,136.07,17.88,211.73-58.41,41.56-41.91,54.08-92.13,58.41-116.82"
        />
        <path
          className={clsx({[styles.j]: animated === true, [styles.jNA]: animated === false})}
          d="M417.74,56.45c-8.54,74.45-9.77,130.85-9,171,.42,21.87,1.7,52.97-18,81-5.49,7.82-25.22,33.32-54,36-35.45,3.3-75.11-28.9-90-81"
        />
        <path
          className={clsx({[styles.j2]: animated === true, [styles.j2NA]: animated === false})}
          d="M327.74,20.45c34.05,29.97,61.89,36.01,81,36,43.26-.03,70.68-31.12,99-18,15.59,7.22,23.14,23.98,27,36"
        />
      </svg>);
}