function getMove(a, b) {
    let c = setInterval(() => {
      console.log(a++);
      if (a > b) clearInterval(c);
    }, 1000)
  }
  
  getMove(8, 11) 