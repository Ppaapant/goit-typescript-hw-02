import styles from './LoadMoreBtn.module.css';
import { LoadMoreButton } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreButton> = ({ onClick }) => (
  <button className={styles.button} onClick={onClick}>Load more</button>
);

export default LoadMoreBtn;
