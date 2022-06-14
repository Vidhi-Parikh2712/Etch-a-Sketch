const cont = document.querySelector('.grid-container');
for(let i=0;i<16;i++)
{
  const row = document.createElement('div');
  row.id = "row" + i;
  row.setAttribute('style','display:flex;border-width:thin;width:100%;height:100%;');
  cont.appendChild(row)
  for(let j=0;j<16;j++)
  {
    const col = document.createElement('div');
    col.id = "col" + j;
    col.className = "box-item";
    col.setAttribute('style','border-style:solid;border-width:thin;width:100%;height:100%;');
    function mouseOver()
    {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        col.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    col.addEventListener('mouseover', mouseOver);
    row.appendChild(col);
  }
}
function grid()
{
document.querySelector('.grid-container').innerHTML = '';
let n = prompt('Enter no of grid');
for(let i=0;i<n;i++)
{
  const row = document.createElement('div');
  row.id = "row" + i;
  row.setAttribute('style','display:flex;border-width:thin;width:100%;height:100%;');
  cont.appendChild(row)
  for(let j=0;j<n;j++)
  {
    const col = document.createElement('div');
    col.id = "col" + j;
    col.classList.toggle = ''
    col.setAttribute('style','border-style:solid;border-width:thin;width:100%;height:100%;');
    function mouseOver()
    {
        
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        col.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    col.addEventListener('mouseover', mouseOver);
    row.appendChild(col);
  }
}
}
