function sideMenuClicked(sideClicked) {
    console.log('f', sideClicked)
    let sideList = ['left', 'right'];

    let sideIndex = sideList.indexOf(sideClicked);





    sideList.forEach((side, index) => {

        let element = document.querySelector(`.${side}-menu`);
        let center = document.querySelector('.right-content');
        let menuActiveClass = 'menu-arrow-opened';
        let centerActiveClass = `center-arrow-opened-${side}`;
        let appearanceClass = 'display-none';

        let sideBarText = document.querySelectorAll(`.${side}-menu .undertaker`);



        if (!element.className.includes(menuActiveClass) && (index == sideIndex)) { // abrindo

            center.classList.add(centerActiveClass)
            element.classList.add(menuActiveClass);

            sideBarText.forEach(text => {
                text.classList.remove('display-none')
            });


        } else { // fechando
            center.classList.remove(centerActiveClass)
            element.classList.remove(menuActiveClass);


            sideBarText.forEach(text => {
                text.classList.add(appearanceClass)
            });



        }

    });
}

function handleDeviceChange(e) {
    if (!sidebarManualAction) {
        if (e.matches) {
            smallVision = true;
            sideMenuClicked();
        } else {
            smallVision = false;
            sideMenuClicked('left');
        }
    }
}


$(document).on('click', '.menu-button-action', function () {
    let side = this.dataset.side;
    sidebarManualAction = true;
    sideMenuClicked(side);
})


smallVision = false;
sidebarManualAction = false;

$(document).ready(function () {

    const smallDevice = window.matchMedia("(max-width: 1440px)");

    smallDevice.addListener(handleDeviceChange);

    document.querySelector('.left-menu').classList.remove('notransition');

})

