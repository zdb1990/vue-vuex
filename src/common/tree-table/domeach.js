const domEach = function(name) {
    let _name = (name + 'W');
    _name = document.getElementById(name).clientWidth;
    if (name === 't2') {
        let oDom = document.getElementsByClassName('td-title');
        let titleWidth = document.getElementById('t2').clientWidth;
        for (let i = 0; i < oDom.length; i++) {
            oDom[i].style.width = titleWidth + 'px';
        }
    }
    const namelist = document.getElementsByClassName(name);
    for (let i = 0; i < namelist.length; i++) {
        namelist[i].style.width = _name + 'px'
    }
}

export default domEach;