// используя рекурсию необходимо заставить блок двигаться по странице. Создайте один
// большой блок и один маленький внутри него. Задайте большому блоку position:
// relative, а малому absolute. И изменяйте параметр позиции малого блока
// (.style.left=${переменная}px). Большому блоку задайте высоту и ширину в 500px,
// А маленькому 50px на 50px. Нужно чтобы маленький блок подвинулся слева на право
// внутри большого блока и остановился.

let position = 0;

function recursionAnimation (){
    position = position + 10;
    if (position > 450) return;
    document.querySelector('.box').style.left = position + 'px';
    animation();
}

function animation (){
    setTimeout(recursionAnimation, 50)
}
animation();