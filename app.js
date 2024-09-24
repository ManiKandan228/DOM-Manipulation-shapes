let selectedShape = '';

function shapeClicked(shape) 
{
    console.log(shape + ' is clicked');
    selectedShape = shape;
    const input2Container = document.getElementById('input2');
    const label2 = document.getElementById('label2');

    input2Container.style.display = 'none';
    label2.style.display = 'none';

    if(shape==='Circle')
    {
        document.getElementById('input1');
    }
    else if(shape==='Square')
    {
        document.getElementById('input1');
    }
    else if(shape==='Triangle')
        {
            input2Container.style.display = 'inline';
            document.getElementById('input1').placeholder="Enter Length ";
            document.getElementById('input2').placeholder="Enter Height ";
        }
}

document.getElementById('calculateBtn').onclick = function() {
    let area;
    const value1 = parseFloat(document.getElementById('input1').value);
    const value2 = parseFloat(document.getElementById('input2').value);

    if (selectedShape === 'Circle') 
    {
        area = Math.PI * value1 * value1;
    } 
    else if (selectedShape === 'Square') 
    {
        area = value1 * value1;
    } 
    else if (selectedShape === 'Triangle') 
    {
        area = 0.5 * value1 * value2;
    }
    console.log(`Area of ${selectedShape}: ${area}`);

    document.getElementById('result').innerText = `Area of ${selectedShape}: ${area.toFixed(2)}`;
}