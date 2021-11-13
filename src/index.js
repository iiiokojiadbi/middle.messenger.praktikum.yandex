import styles from './styles.css';

const root = document.querySelector('#root');

console.log(styles.test, styles);

const div = document.createElement('div');
div.textContent = 'test';
div.classList.add(styles.test);

root.appendChild(div);
