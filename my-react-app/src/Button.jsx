


function Button(){

    const btn = document.querySelector('.btn');
    const handClick = () => {
        if(btn.textContent === 'Click me!'){
            btn.textContent = 'Clicked!';
            btn.classList.add('clicked');
            btn.style.backgroundColor = 'Green';
        }else{
            btn.textContent = 'Click me!';
            btn.style.backgroundColor = 'rgb(81, 81, 224)';
        }
    }


    return (
        <>
        <button className="btn" onClick={handClick}>Click me!</button>
        </>
    );
}

export default Button