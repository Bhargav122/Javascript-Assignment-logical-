// currency coversion
function ToInr() {
  var dollars = document.getElementById("amount").value;
  var inr = dollars * 70;
  document.write(dollars + " dollars = " + inr + " INR");
}

function ToYen() {
  var dollars = document.getElementById("amount").value;
  var yen = dollars * 128;
  document.write(dollars + " dollars = " + yen + " Yen");
}

function ToEuro() {
  var dollars = document.getElementById("amount").value;
  var euro = dollars * 20;
  document.write(dollars + " dollars = " + euro + " Euros");
}

function ToPound() {
  var dollars = document.getElementById("amount").value;
  var pound = dollars * 0.82;
  document.write(dollars + " dollars = " + pound + " Pounds");
}

//cocatination
function Concat() {
  const arr1 = ["a", "b", "c"];
  const arr2 = ["1", "2", "3", "4"];
  const children = arr1.concat(arr2);
  console.log("concatinated");
  document.write("Concatinated array is: " + children);
}

// alternating two arrays
function AlterMerge() {
  let ar1 = ["a", "b", "c"];
  let n1 = ar1.length;

  let ar2 = [1, 2, 3];
  let n2 = ar2.length;

  let ar3 = new Array(n1 + n2);

  let i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2) {
    ar3[k++] = ar1[i++];
    ar3[k++] = ar2[j++];
  }

  while (i < n1) {
    ar3[k++] = ar1[i++];
  }

  while (j < n2) {
    arr3[k++] = arr2[j++];
  }

  document.write(" merging" + "<br>");
  for (let i = 0; i < n1 + n2; i++) {
    document.write(ar3[i] + " ");
  }
}

//Fibnocci
function fibonacci() {
  var n1 = 1;
  var n2 = 1;
  var count = 0;
  while (count < 100) {
    var n3 = n1 + n2;
    console.log("number is " + n3);
    document.write(n3 + ", ");
    n1 = n2;
    n2 = n3;
    count++;
  }
}

//Reverse array
function ReverseArray() {
  var a = [3, 5, 7, 8];
  const len = a.length;
  var RevArray = new Array();
  var k = 0;
  for (var i = len - 1; i >= 0; i--) {
    RevArray.push(a[i]);

    document.write(RevArray[k] + " ");
    k++;
  }
}

function usingWhile() {
  var arr = [12, 22, 1, 6, 18, 9];
  const len = arr.length;
  var i = 0;
  var sum = 0;
  while (i < len) {
    sum += arr[i];
    i++;
  }
  document.write("The sum of array using While is :" + sum);
}

function usingDoWhile() {
  var arr = [12, 22, 1, 6, 18, 9];
  const len = arr.length;
  var i = 0;
  var sum = 0;
  do {
    sum += arr[i];
    i++;
  } while (i < len);
  document.write("The sum of array using do While is :" + sum);
}

function usingFor() {
  var arr = [12, 22, 1, 6, 18, 9];
  const len = arr.length;
  var i = 0;
  var sum = 0;
  for (i = 0; i < len; i++) {
    sum += arr[i];
  }
  document.write("The sum of array using For is :" + sum);
}

//largest and smallest
function LargeandSmall() {
  var Myarray = new Array();
  var k = 0;
  for (i = 0; i < 100; i++) {
    //generates random numbers
    var randNum = Math.floor(Math.random() * 10000 + 1);
    Myarray[k] = randNum;
    k++;
  }
  const max = Math.max(...Myarray);

  document.write("max num is : " + max);
}

function HighestCount() {
  var Myarray = new Array();
  var k = 0;
  for (i = 0; i < 100; i++) {
    //generate random numbers
    var randNum = Math.floor(Math.random() * 10000 + 1);
    Myarray[k] = randNum;
    k++;
  }
  var evenCount = 0;
  var oddCount = 0;
  var n = 0,
    m = 1;
  while (n < 100) {
    oddCount += Myarray[n];
    n = n + 2;
  }
  while (m < 100) {
    evenCount += Myarray[m];
    m = m + 2;
  }
  if (evenCount > oddCount) {
    document.write("Even count is higher and it is : " + evenCount);
  } else {
    cument.write("Odd count is higher and it is : " + oddCount);
  }
}

function BubbleSort() {
  const inputArr = [20, 50, 44, 10, 15, 17];

  let len = 5;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }

  document.write(inputArr);
}

function CreatingTable() {
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of columns", 1);

  for (var r = 0; r < parseInt(rn, 10); r++) {
    var x = document.getElementById("myTable").insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var y = x.insertCell(c);
      y.innerHTML = "(" + r + "," + c + ")";
    }
  }
}
