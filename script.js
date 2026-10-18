document.addEventListener('DOMContentLoaded',()=>{
  const config=window.RNE_CONFIG||{reviewMode:true,enquiryEndpoint:'/api/enquiry'};
  const video=document.querySelector('.hero-video');
  const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(video){
    if(reduceMotion){
      video.pause();
      video.removeAttribute('autoplay');
    }else if(typeof video.play==='function'){
      video.play().catch(()=>{});
    }
  }

  const form=document.getElementById('enquiry-form');
  const status=document.getElementById('form-status');
  if(!form) return;

  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    if(!form.reportValidity()) return;

    if(config.reviewMode){
      if(status){
        status.textContent='Design review only — this enquiry has not been sent. Production routing will be connected after approval.';
        status.setAttribute('role','status');
      }
      return;
    }

    const submit=form.querySelector('button[type="submit"]');
    const data=new FormData(form);
    const payload={
      name:String(data.get('name')||''),
      email:String(data.get('email')||''),
      interest:String(data.get('interest')||''),
      message:String(data.get('message')||''),
      website:String(data.get('website')||''),
      consent:data.get('consent')==='on',
      page:window.location.href
    };

    if(submit) submit.disabled=true;
    if(status){
      status.textContent='Sending your request…';
      status.setAttribute('role','status');
    }

    try{
      const response=await fetch(config.enquiryEndpoint||'/api/enquiry',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(payload)
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(result.error||'Unable to send enquiry.');

      form.reset();
      if(status) status.textContent='Thank you. Your request has been received and will be handled privately.';
    }catch(err){
      if(status) status.textContent=err&&err.message?err.message:'We could not send your request. Please try again.';
    }finally{
      if(submit) submit.disabled=false;
    }
  });
});