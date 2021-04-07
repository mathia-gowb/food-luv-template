const elements=document.querySelectorAll('article');
const observer = new IntersectionObserver(itemVisible);


elements.forEach(el=>observer.observe(el));
function itemVisible(entries){
    let targetItems=entries;
    targetItems.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target)
        }
    })

} 
