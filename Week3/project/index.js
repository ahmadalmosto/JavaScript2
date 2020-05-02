// Your code goes in here

function tipCalculator() {
  let total = document.getElementById('totalBill').value;
  let index = document.getElementById('serviceQuality').selectedIndex;
  let selected = document.getElementsByTagName('option')[index].value;
  let numberOf = document.getElementById('numOfPeople').value;
  let result = document.getElementById('result');
  let vorbidenInput = /^[a-zA-Z]$/;
  let final = (total * selected) / numberOf;
  final = final.toFixed(2);
  result.innerHTML = ` Tip amount $${final} each`;
  
  if (total.match(vorbidenInput) || numberOf.match(vorbidenInput)) {
    alert('Only Numbers!');
    result.innerHTML='';
  }
  if (total === '' || numberOf === '' || selected === '') {
    alert('"You need to fill in all the fields!"');
    result.innerHTML='';
  }

  if (numberOf <= 1) {
    let final2 = total * selected;
    result.innerHTML = ` Tip Amount $${final2}`;
  }
  result.style.fontSize='22px'
  result.style.marginTop='30px';
  result.style.color='blue'
}
