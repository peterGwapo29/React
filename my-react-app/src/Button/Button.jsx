import styles from './Button.module.css'

function Button() {
    const btn = document.querySelector('button');
    const message = document.querySelector('render');

    function click() {
        if(btn.textContent == 'Click me!'){
            btn.textContent = 'Clicked!';
            message.textContent = 'You click me!'
        }else{
            btn.textContent = 'Click me!';
        }
    }

    return (
        <>
            <button onClick={click} id='button' className={styles.button}>Click me!</button>
        </>
    );
}

export default Button