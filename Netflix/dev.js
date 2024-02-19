
document.addEventListener("DOMContentLoaded", function() {
    var navLeg1 = document.getElementById('content');
    navLeg1.classList.add('active');
    document.addEventListener('.nav-leg1',':after');
    document.addEventListener('.nav-leg1','active:after');
});

const tabs = document.querySelectorAll('#select');
const all_content = document.querySelectorAll('#content');
tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    })

})

