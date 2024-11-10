const link=  document.querySelectorAll("a");
for(let i=0 ; i<link.length ;i++)
    {
      link[i].onclick=fetchdata;
    }
  

async function fetchdata(e)
{
  
  const recipe=e.target.textContent;
  console.log(recipe);

  const response =await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`);
  const result= await response.json();
  const data = result.data.recipes;

  const res=data.map(function(e)
  {
    return `
    
    <div>

    <h2> ${e.title} </h2>
    <img src="${e.image_url}"/>


    </div>
    `
  }

  ).join("---------------");

  document.querySelector(".post").innerHTML=res;

 
}