export default function initTabNav(){
    const activeClass = 'ativo';
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    
    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });

            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add(activeClass, direction);
        }

        tabMenu.forEach((img, index) =>{
            img.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
