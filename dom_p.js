let btn=document.querySelector('#new_quote');
let quote=document.querySelector('.quote');
let person=document.querySelector(".person");

const quotes=[{
  quote:"necessity is the mother of invention.",
  person:"unknown"
},{
  quote:"the female protagonists in my movies are all inspired by femlae staff in my office",
  person:"hayao miyazaki"
},{
  quote:"stay hungry  stay  foolish",
  person:" Stevejobs"
},{
  quote:"Tell me  and i forget .Teach me and I remember.Involve me and i learn",
  person:"benjamin franklin"},{
    quote:"wake up arise ,don't stop till u reach the goal",
    person:"Sawmi vivekananda"
  },

];
btn.addEventListener('click',function(){
  let random=Math.floor(Math.random()*quotes.length);

  quote.innerText=quotes[random].quote;
  person.innerText=quotes[random].person;
})