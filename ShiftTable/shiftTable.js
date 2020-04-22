stringToSearch = "AABDFFESFGHHSAFHH";
subString = "ESF";

function letterTable( subStr, searchString ) {
  fnalTable = [];
  for ( var i = 0 ; i < subStr.length ; i++ )
      fnalTable.push(subStr[i]);

  for ( var i = 0 ; i < searchString.length ; i++ )
  {
      if (fnalTable.indexOf(searchString[i]) == -1)
          fnalTable.push(searchString[i]);
  }


  return fnalTable;
}

function shiftTable( subSt, searchString ) {
    finalTable = [];

    letterTab = letterTable (subSt, stringToSearch);

    for ( var i = 0 ; i < subSt.length - 1 ; i++ )
        finalTable.push(subSt.length - 1 - i);

    for ( var i = subSt.length - 1 ; i < letterTab.length ; i++ )
    {
        finalTable.push(subSt.length);
    }


    return finalTable;
}



function createShiftTable() {

    pattren =      document.getElementById("pattern").value;
    outterString = document.getElementById("string").value;

    console.log(pattren + " " + outterString);

    letters = letterTable( pattren, outterString );
    shTable = shiftTable ( pattren, outterString );

    lettersDiv = document.createElement("div");
    shiftVaDiv = document.createElement("div");

    if (letters.length != shTable.length) {
      console.log("shiftTable function or letterTable function is broken! " + letters.length + " " + shTable.length);
      return "Ouch!";
    }

    for ( var i = 0; i < letters.length; i++ ) {
      span4Letters = document.createElement("span");
      span4ShiftVal= document.createElement("span");

      span4Letters.setAttribute("class", "shiftTableValues letters");
      span4ShiftVal.setAttribute("class", "shiftTableValues numbers");

      span4Letters.appendChild(document.createTextNode(letterTab[i]));
      span4ShiftVal.appendChild(document.createTextNode(shTable[i]));

      lettersDiv.appendChild(span4Letters);
      shiftVaDiv.appendChild(span4ShiftVal);
    }

    document.getElementById("endValues").appendChild(lettersDiv);
    document.getElementById("endValues").appendChild(shiftVaDiv);
}

table = shiftTable( subString, stringToSearch );

console.log(table);

table = letterTable( subString, stringToSearch );

console.log(table);
