const ITEMS = [
  ["Logo treatment","Can you live with the current R&E logo / monogram treatment?"],
  ["Overall design language","Dark navy, gold, white and a restrained luxury editorial style."],
  ["Hero treatment","Large cinematic media with restrained copy and premium spacing."],
  ["Main headline","“Exceptional assets deserve a different kind of relationship.”"],
  ["What Rare & Exclusive is","The current public explanation of the R&E proposition."],
  ["Principles / conduct","Curated, private, relationship-led and quality-focused."],
  ["How We Work","Understand → Curate → Engage → Progress → Remain."],
  ["Asset classes","Property first, with rare vehicles, marine/lifestyle and collectibles."],
  ["Private-access approach","The enquiry/private-contact approach shown on the preview."],
  ["Featured opportunity treatment","The way the first approved R&E project will be introduced."],
  ["Overall direction","Proceed on this design language as the working baseline."]
];

const holder=document.getElementById("approval-items");
ITEMS.forEach((it,i)=>{
  const n=i+1;
  const el=document.createElement("section");
  el.className="approval-item";
  el.innerHTML=`
    <div class="approval-number">${String(n).padStart(2,"0")}</div>
    <div class="approval-question"><h2>${it[0]}</h2><p>${it[1]}</p></div>
    <div class="approval-choice">
      <label><input type="radio" name="item_${n}" value="YES" required> YES</label>
      <label><input type="radio" name="item_${n}" value="CHANGE"> CHANGE</label>
    </div>
    <label class="approval-notes">Change / comment<textarea name="note_${n}" rows="2" placeholder="Only needed if you selected CHANGE"></textarea></label>
  `;
  holder.appendChild(el);
});

document.querySelector('input[name="date"]').value=new Date().toISOString().slice(0,10);

function buildResponse(){
  const form=document.getElementById("approval-form");
  const fd=new FormData(form);
  const lines=[
    "Rare & Exclusive — Design Language Approval Response",
    "",
    "Reviewer: "+(fd.get("reviewer")||""),
    "Date: "+(fd.get("date")||""),
    ""
  ];
  ITEMS.forEach((it,i)=>{
    const n=i+1;
    const decision=fd.get("item_"+n)||"NOT ANSWERED";
    const note=(fd.get("note_"+n)||"").trim();
    lines.push(n+". "+it[0]+": "+decision+(note ? " — "+note : ""));
  });
  const general=(fd.get("general")||"").trim();
  if(general) lines.push("","General comments: "+general);
  lines.push("","I understand that items marked YES become the agreed working baseline, and later reopening of an approved item will be recorded as a change.");
  return lines.join("\n");
}

document.getElementById("copy-response").addEventListener("click",async()=>{
  const text=buildResponse();
  try{await navigator.clipboard.writeText(text); alert("Approval response copied.");}
  catch{window.prompt("Copy this response:",text);}
});

document.getElementById("prepare-email").addEventListener("click",()=>{
  const form=document.getElementById("approval-form");
  if(!form.reportValidity()) return;
  const subject=encodeURIComponent("Rare & Exclusive — Design Language Approval Response");
  const body=encodeURIComponent(buildResponse());
  window.location.href=`mailto:antonvdberg@corpflowai.com?subject=${subject}&body=${body}`;
});