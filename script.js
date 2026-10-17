document.addEventListener('DOMContentLoaded',()=>{
  const v=document.querySelector('.hero-video');
  if(v && typeof v.play==='function'){v.play().catch(()=>{});}

  const form=document.getElementById('enquiry-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      if(!form.reportValidity()) return;
      const status=document.getElementById('form-status');
      if(status){
        status.textContent='Design review only — this enquiry has not been sent. Production routing will be connected after approval.';
        status.setAttribute('role','status');
      }
    });
  }
});