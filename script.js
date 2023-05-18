let logo = document.querySelector('.header__logo');
let block = document.querySelector('.main__left');
logo.addEventListener('click', function()
{
    if(block.className === 'main__left')
    {
block.classList.add('visible')
    }
    else
    {
        block.classList.remove('visible')
    }
});

/*  classList - метод, который добавляет классы
    className - приравнивает имена классов
 */


