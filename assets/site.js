
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);});}

document.querySelectorAll('.accordion-button').forEach(btn=>{btn.addEventListener('click',()=>{const panel=document.getElementById(btn.getAttribute('aria-controls'));const expanded=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!expanded));if(panel)panel.hidden=expanded;});});

const conditionSearch=document.querySelector('[data-condition-search]');
const conditionFilter=document.querySelector('[data-condition-filter]');
function filterConditions(){if(!conditionSearch&&!conditionFilter)return;const q=(conditionSearch?.value||'').toLowerCase().trim();const group=conditionFilter?.value||'all';document.querySelectorAll('[data-condition]').forEach(card=>{const text=card.textContent.toLowerCase();const cardGroup=card.dataset.group;card.hidden=!(text.includes(q)&&(group==='all'||group===cardGroup));});document.querySelectorAll('[data-condition-group]').forEach(section=>{section.hidden=[...section.querySelectorAll('[data-condition]')].every(x=>x.hidden);});}
conditionSearch?.addEventListener('input',filterConditions);conditionFilter?.addEventListener('change',filterConditions);

document.querySelectorAll('form[data-demo-form]').forEach(form=>{form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const ok=form.querySelector('.form-success');if(ok){ok.style.display='block';ok.focus();}form.reset();});});


// Prototype 3.0: personal review checklist persistence (browser-local only).
document.querySelectorAll('[data-review-check]').forEach((box, index) => {
  const key = `neuro-prototype-review-${box.dataset.reviewCheck || index}`;
  box.checked = localStorage.getItem(key) === '1';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked ? '1' : '0'));
});

document.querySelectorAll('[data-demo-download]').forEach(button => {
  button.addEventListener('click', () => alert('Prototype only: the approved production document would download here.'));
});


// Prototype 3.0: switch between annotated review mode and clean visitor preview.
const reviewToggleButtons = document.querySelectorAll('[data-review-toggle]');
function applyReviewMode(hidden) {
  document.body.classList.toggle('review-notes-hidden', hidden);
  reviewToggleButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(!hidden));
    button.textContent = hidden ? 'Show review notes' : 'Hide review notes';
  });
  localStorage.setItem('neuro-prototype-hide-review-notes', hidden ? '1' : '0');
}
if (reviewToggleButtons.length) {
  applyReviewMode(localStorage.getItem('neuro-prototype-hide-review-notes') === '1');
  reviewToggleButtons.forEach((button) => button.addEventListener('click', () => {
    applyReviewMode(!document.body.classList.contains('review-notes-hidden'));
  }));
}
