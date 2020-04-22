function Node( data , children ) {
    this.data = data;
    this.children = children;
    // Only use the functions to get and set functions!!!!

    this.getChildren = function() {
      return this.children;
    };

    this.getChildrenData = function() {
      arr = [];
      for (var i = 0 ; i < this.getChildren().length ; i++) {
        arr.push(this.getChildren()[i].data);
      }
      return arr;
    };

    this.getData = function() {
      return this.data;
    };

    this.addChild = function( newChild ) {
      this.children.push( newChild );
    };
    this.setData = function( newData ) {
      this.data = newData;
    };

    return this;
}

function DFS( startingNode ) {
    nodesVisited = [];
    divOut = document.getElementById("out");
    line = "Expanded Nodes: " + nodesVisited.toString();
    divOut.appendChild(document.createTextNode(line));
    divOut.appendChild(document.createElement("br"));

    DFSRecrv( startingNode , nodesVisited );
}

function DFSRecrv( startingNode, nodesVisited ) {
    nodesVisited.push( startingNode.data );
    console.log( startingNode.data );
    divOut = document.getElementById("out");
    line = "Expanded Nodes: " + nodesVisited.toString();
    divOut.appendChild(document.createTextNode(line));
    divOut.appendChild(document.createElement("br"));
    for( var i = 0 ; i < startingNode.getChildren().length ; i++ ) {
        nextNode = startingNode.getChildren()[i];
        if ( nodesVisited.indexOf( nextNode.data ) == -1 ) {
            DFSRecrv( nextNode , nodesVisited );
        }
    }
}

function isInteger( value ) {
  return parseInt( value ).toString() === value;
}

function generateGraphConstruct() {
  el = document.getElementById("inVal");
  userInput = el.value;
  if ( !isInteger( userInput ) ) {
    alert("cannot process string please enter a valid number");
  }
  else if ( parseInt( userInput ).toString() < 0
            || parseInt( userInput ).toString() > 26 ) {
    alert("please enter a number between 0 and 26");
  }

  formattedUserInput = parseInt( userInput ).toString();
  tab = document.getElementById("tab");
  row = document.createElement("div");
  var line = "\u00A0\u00A0\u00A0";

  row.appendChild(document.createTextNode(line));

  for (var i = 0 ; i < formattedUserInput ; i++) {
      newEl = document.createElement("span");
      newEl.setAttribute("class", "test");
      line = String.fromCharCode(65 + i);
      textNode = document.createTextNode(line);
      newEl.appendChild(textNode);
      row.appendChild(newEl);
  }

  oldEl = document.getElementById("xlabel");
  oldEl.remove();
  row.setAttribute("id", "xlabel");
  tab.appendChild(row);

  for (var j = 0; j < formattedUserInput ; j++ ){
    div2 = document.createElement("div");
    line = String.fromCharCode(65 + j);
    span = document.createElement("span");
    bufferText = document.createTextNode(line);
    span.appendChild(bufferText);
    div2.appendChild(span);
    for (var i = 0 ; i < formattedUserInput ; i++ ) {
      bufferText = document.createTextNode("");
      input = document.createElement("input");
      span = document.createElement("span");
      input.setAttribute("type", "checkbox");
      span.setAttribute("class", "test box x" + i + " y" + j);
      span.appendChild(input);
      div2.appendChild(bufferText);
      div2.appendChild(span);
    }
    tab.appendChild(div2);
  }

  DepthFirstDiv = document.createElement("div");
  DepthFirstButton = document.createElement("button");
  DepthFirstButton.setAttribute("onClick", "getGraph('tab'," + formattedUserInput + ")");
  DepthFirstButton.innerHTML = "DFS!";

  DepthFirstDiv.appendChild(DepthFirstButton);
  tab.appendChild(DepthFirstDiv);

}

function getGraph(tabID, graphSize) {
  tab = document.getElementById(tabID);
  divOut = document.getElementById("out");
  arr2d = [];
  for (var i = 0; i < graphSize; i++) {
    arr2d[i] = [];
  }
  for (var i = 0; i < graphSize; i++) {
    inArr = document.getElementsByClassName("x" + i);
    for (var j = 0 ; j < graphSize; j++) {
      el = inArr[j];
      arr2d[i][j] = el.children[0].checked;
    }
  }

  nodeArr = [];

  for (var i = 0; i < graphSize; i++) {
    nodeArr.push(new Node( String.fromCharCode(65+i) , [] ));
  }

  for (var i = 0; i < nodeArr.length ; i++ ) {
    for (var j = 0; j < nodeArr.length ; j++) {
      if (arr2d[i][j]) {
        nodeArr[i].addChild(nodeArr[j]);
        divOut.appendChild(document.createTextNode(String.fromCharCode(65+i) + " -> " + String.fromCharCode(65+j)));
        divOut.appendChild(document.createElement("br"));
      }
    }
  }

  DFS(nodeArr[0]);

}
