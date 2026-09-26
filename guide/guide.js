const search = document.querySelector('#guideSearch');
const status = document.querySelector('#searchStatus');
const blocks = [...document.querySelectorAll('.guide-heading,.guide-paragraph')];
const tocLinks = [...document.querySelectorAll('.toc-link')];
const sidebar = document.querySelector('#sidebar');
document.querySelector('#menuButton').addEventListener('click',()=>sidebar.classList.toggle('open'));
tocLinks.forEach(link=>link.addEventListener('click',()=>sidebar.classList.remove('open')));
search.addEventListener('input',()=>{
  const query=search.value.trim().toLocaleLowerCase('ko');
  let hits=0;
  blocks.forEach(block=>{
    const match=!query||block.textContent.toLocaleLowerCase('ko').includes(query);
    block.classList.toggle('is-hidden',!match);
    block.classList.toggle('search-hit',Boolean(query&&match));
    if(query&&match) hits++;
  });
  status.textContent=query?`${hits}개 문단을 찾았습니다.`:'Ctrl+F도 사용할 수 있습니다.';
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  tocLinks.forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));
}),{rootMargin:'-15% 0px -75% 0px'});
document.querySelectorAll('.guide-heading[id]').forEach(heading=>observer.observe(heading));
const toTop=document.querySelector('#toTop');
addEventListener('scroll',()=>toTop.classList.toggle('show',scrollY>900),{passive:true});
toTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
