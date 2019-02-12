  let knight = document.getElementById("knight");
  let mage = document.getElementById("mage");
  let archer = document.getElementById("archer");
  
  knight.addEventListener("click", rollCheckKnight);
  mage.addEventListener("click", rollCheckMage);
  archer.addEventListener("click", rollCheckArcher);
  
  

  function rollKnight () {
    let aiSelect = Math.floor(Math.random() * 3);
    if (aiSelect === 0) {
      let wins = document.getElementById("wins");
      let response = document.getElementById("response");
      response.innerHTML = "Your knight cut my archer down!";
      wins.innerHTML = parseInt(wins.innerHTML) + 1;
      } 
    if (aiSelect === 1) {
      let losses = document.getElementById("losses");
      let response = document.getElementById("response");
      response.innerHTML = "Your knight was defeated by my mage's magic";
      losses.innerHTML = parseInt(losses.innerHTML) + 1;
      }
    if (aiSelect === 2) {
      let draws = document.getElementById("draws");
      let response = document.getElementById("response");
      response.innerHTML = "Our knight's fought to a stalemate, WEEEAAAKK!";
      draws.innerHTML = parseInt(draws.innerHTML) + 1;
      }
    };

  function rollMage () {
    let aiSelect = Math.floor(Math.random() *3);
    if (aiSelect === 0) {
      let losses = document.getElementById("losses");
      let response = document.getElementById("response");
      response.innerHTML = "My archer shot your mage before he could blink";
      losses.innerHTML = parseInt(losses.innerHTML) + 1;
    }
    if (aiSelect === 1) {
      let draws = document.getElementById("draws");
      let response = document.getElementById("response");
      response.innerHTML = "Our mages fight to a standstill. Lame.";
      draws.innerHTML = parseInt(draws.innerHTML) + 1;
    } 
    if (aiSelect === 2) {
      let wins = document.getElementById("wins");
      let response = document.getElementById("response");
      response.innerHTML = "My knight was too slow to avoid your mage's fire.";
      wins.innerHTML = parseInt(wins.innerHTML) + 1;
    }
    };
    
  function rollArcher () {
    let aiSelect = Math.floor(Math.random() *3);
    if (aiSelect === 0) {
      let draws = document.getElementById("draws");
      let response = document.getElementById("response");
      response.innerHTML = "Our archers shoot each other. draw.";
      draws.innerHTML = parseInt(draws.innerHTML) + 1;
    }
    if (aiSelect === 1) {
      let wins = document.getElementById("wins");
      let response = document.getElementById("response");
      response.innerHTML = "Your archer got my mage with a cheap arrow.";
      wins.innerHTML = parseInt(wins.innerHTML) + 1;
    } 
    if (aiSelect === 2) {
      let losses = document.getElementById("losses");
      let response = document.getElementById("response");
      response.innerHTML = "Your archer's tiny arrows couldn't peirce my knight's armor.";
      losses.innerHTML = parseInt(losses.innerHTML) + 1;
    }
    };
     
    function rollCheckKnight () {
      let x = parseInt(document.getElementById("wins").innerHTML);
      let y = parseInt(document.getElementById("losses").innerHTML);
      let z = parseInt(document.getElementById("draws").innerHTML);
      if (x >= 10) {
      document.getElementById("response").innerHTML = "ARGHH, YOU HAVE DEFEATED ME! **I MELT**";
      } else if (y >= 10) {
      document.getElementById("response").innerHTML = "AHAHA, I WIN! COMPUTERS ARE SUPERIOR!";
      } else if (z >= 10) {
      document.getElementById("response").innerHTML = "DRAW... lame... "
      } else {
      rollKnight();
      }
      };
      
      function rollCheckMage () {
      let x = parseInt(document.getElementById("wins").innerHTML);
      let y = parseInt(document.getElementById("losses").innerHTML);
      let z = parseInt(document.getElementById("draws").innerHTML);
      if (x >= 10) {
      document.getElementById("response").innerHTML = "ARGHH, YOU HAVE DEFEATED ME! **I MELT**";
      } else if (y >= 10) {
      document.getElementById("response").innerHTML = "AHAHA, I WIN! COMPUTERS ARE SUPERIOR!";
      } else if (z >= 10) {
      document.getElementById("response").innerHTML = "DRAW... lame... "
      } else {
      rollMage();
      }
      };
      
      function rollCheckArcher () {
      let x = parseInt(document.getElementById("wins").innerHTML);
      let y = parseInt(document.getElementById("losses").innerHTML);
      let z = parseInt(document.getElementById("draws").innerHTML);
      if (x >= 10) {
      document.getElementById("response").innerHTML = "ARGHH, YOU HAVE DEFEATED ME! **I MELT**";
      } else if (y >= 10) {
      document.getElementById("response").innerHTML = "AHAHA, I WIN! COMPUTERS ARE SUPERIOR!";
      } else if (z >= 10) {
      document.getElementById("response").innerHTML = "DRAW... lame... "
      } else {
      rollArcher();
      }
    };
      