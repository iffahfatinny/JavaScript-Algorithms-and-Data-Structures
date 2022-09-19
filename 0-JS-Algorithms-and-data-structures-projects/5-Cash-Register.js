/*
  Cash Register
  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  The checkCashRegister() function should always return an object with a status key and a change key.

  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

  Currency Unit	Amount
  Penny	$0.01 (PENNY)
  Nickel	$0.05 (NICKEL)
  Dime	$0.1 (DIME)
  Quarter	$0.25 (QUARTER)
  Dollar	$1 (ONE)
  Five Dollars	$5 (FIVE)
  Ten Dollars	$10 (TEN)
  Twenty Dollars	$20 (TWENTY)
  One-hundred Dollars	$100 (ONE HUNDRED)
  See below for an example of a cash-in-drawer array:

  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
*/

function checkCashRegister(price, cash, cid) {
  var change = [];
  var newNum;
  var arr;
  const unit = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
  let newStatus;
  var savePrice = 0;
  var balance = cash - price;
  let i;
  var totalCid=0
  let j=0;
  var a,b;
  while(j<cid.length){
    totalCid+=cid[j][1]
    j++
  }
  totalCid = parseFloat(totalCid).toFixed(2)
  if(totalCid<balance)
  {
    newStatus = {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if(totalCid==balance)
  {
    while(balance!==0){
     for(i=unit.length-1;i>=0;i--){
       if(unit[i][1]<=balance){
         a = unit[i]
         break
       }
      }
      balance-=a[1]
      savePrice+=a[1]
      }
    newStatus = {status: "CLOSED", change: cid};
  }
  else if(totalCid>balance)
  {
    var total = 0;
    for(let i=0; i<4; i++){
      total+=cid[i][1]
    }
    if(balance<1){
      if(balance>total){
        newStatus = {status: "INSUFFICIENT_FUNDS", change: []};
      }else{
        while(balance!==0){
          for(i=3;i>0;i--){
            if(unit[i][1]<=balance){
              a = unit[i]
              break
            }
          }
          balance-=a[1];
          savePrice+=a[1];
        }
        cid[i].splice(1,1,savePrice)
        change.push(cid[i])
        newStatus = {status: "OPEN", change: change}
      }
    }else{
      while(balance>0){
        for(let i=unit.length-1;i>=0;i--){
          if(cid[i][1]===0){
            i--
          }
          if(cid[i][1]!==0 && unit[i][1]<=balance){
            a = unit[i]
            b = cid[i]
            break
          }

        }
        balance-=a[1];
        b[1]-=a[1]
        savePrice+=a[1];
        balance = balance.toFixed(2)
        if(b[1]===0){
          newNum = savePrice
          arr = a
          arr.splice(1,1,newNum)
          change.push(arr)
          savePrice = 0
        }else
        if(balance<a[1]){
          newNum = savePrice
          arr = a
          arr.splice(1,1,newNum)
          change.push(arr)
          savePrice = 0
        }
      }
      newStatus = {status: "OPEN", change: change}
    }
  }
  console.log(newStatus)
  return newStatus
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);