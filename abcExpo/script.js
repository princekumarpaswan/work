// card visibility on click

const data = () => {
    const about = document.getElementById("about")
    about.classList.add("hidden")
    const table =  document.getElementById("table")
    table.classList.remove("hidden")
    const chart = document.getElementById("container")
    chart.classList.add("hidden")
    
}

const about = () => {
    const table =  document.getElementById("table")
    table.classList.add("hidden")
    const about = document.getElementById("about")
    about.classList.remove("hidden")
    const chart = document.getElementById("container")
    chart.classList.add("hidden")
}


const chart = () => {
    const table =  document.getElementById("table")
    table.classList.add("hidden")
    const about = document.getElementById("about")
    about.classList.add("hidden")
    const chart = document.getElementById("container")
    chart.classList.remove("hidden")
}






//    load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values

  let six = 0
  let one = 0
  let seven =0
  let eight = 0
  let nine = 0
  let ten = 0
  let eleven = 0
  let twelve = 0
  let two = 0
  let three = 0

  const date =  document.getElementsByClassName("date")
  const dat =  date
  for (let i = 0; i < dat.length; i++) {
    const element = dat[i].innerHTML;
    const fil = element.split('/')
    if (fil[1]==="06") {
        six = six + 1
    }else if (fil[1] === '01') {
        one = one + 1
    } else if(fil[1] === '07'){
        seven = seven+1
    }else if (fil[1] === '08') {
        eight = eight + 1
    } else if(fil[1] === '09'){
        nine = nine+1
    }else if (fil[1] === '10') {
        ten = ten + 1
    } else if(fil[1] === '11'){
        eleven = eleven + 1
    }else if (fil[1] === '12') {
        twelve = twelve + 1
    } else if(fil[1] === '02'){
        two = two+1
    }else{
        three = three +1
    }
    
  }



  function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Export', 'per month'],
    ['June', parseInt(six)],
    ['July', parseInt(seven)],
    ['August', parseInt(eight)],
    ['September', parseInt(nine)],
    ['October', parseInt(ten)],
    ['November',parseInt(eleven)],
    ['December',parseInt(twelve)],
    ['January', parseInt(one)],
    ['february',parseInt(two)],
    ['march',parseInt(three)]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    // var options = {'title':'Average exports per month from june 2022 to march 2023', 'width':910, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    

    const window = screen.width
    if (window > 550) {
       
        var options = {'title':'Average exports per month from june 2022 to march 2023', 'width':910, 'height':400};
        var chart = new google.visualization.PieChart(document.getElementById('container'));
    chart.draw(data, options);
    }else{
        var options = {'title':'Average exports per month from june 2022 to march 2023', 'width':350, 'height':400};
        var chart = new google.visualization.PieChart(document.getElementById('container'));
        chart.draw(data, options);
        const largeCard = document.getElementById("largeCard")
        largeCard.classList.add("hidden")
    }
  }


//   counting animation

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 2);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


// main oage graph aniamtion

let animation = anime.timeline({
    duration: 500, 
    easing: 'easeInOutQuad',
    direction: 'alternate', 
    loop: false
  });           
    
  animation.add({
    targets: '.one',
    width: '40%',
  
  }).add({
    targets: '.two',
    width: '75%',
    
  }).add({
    targets: '.three',
    width: '60%',
    
  });


  anime({
    targets: '#aniTable',
    translateX: {
        value:250,
        duration: 800
      },
      rotate: {
        value: 360,
        duration: 800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 1,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250 // All properties except 'scale' inherit 250ms delay
  });




  

  

//   anime({
//     targets: '.targetC',
//     translateX: function(el) {
//       return el.getAttribute('data-x');
//     },
//     translateY: function(el, i) {
//       return 50 + (-50 * i);
//     },
//     scale: function(el, i, l) {
//       return (l - i) + .25;
//     },
//     rotate: function() { return anime.random(-360, 360); },
//     borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
//     duration: function() { return anime.random(1200, 1800); },
//     delay: function() { return anime.random(0, 400); },
//     direction: 'alternate',
//     loop: true
//   });






//   const price =  document.getElementsByClassName("price")
//   for (let i = 0; i< price.length; i++) {
//   const element = price[i].innerText;
//   const priceData = element
//   if (i % 2 != 0 ) {
//     console.log(priceData);
//     // const pasedData = parseInt(priceData)
//     const parsedData =  parseInt(priceData);
//     console.log(parsedData);
//   }else{
//     continue
//   }
// }

