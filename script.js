const reveals=document.querySelectorAll(".reveal");
const io=new IntersectionObserver(entries=>entries.
    forEach(e=>{if(e.isIntersecting)e.
        target.classList.
        add("show")}),{threshold:.1});reveals.
    forEach(x=>io.observe(x));
document.querySelectorAll(".filters button").forEach(btn=>btn.
    addEventListener("click",()=>{document.querySelectorAll(".filters button").forEach(b=>b.
        classList.
        remove("active"));
btn.classList.add("active");
const f=btn.dataset.filter;
document.querySelectorAll(".archive-card").forEach(c=>c.style.display=f==="all"||c.dataset.cat.includes(f)?"":"none")}));