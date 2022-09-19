/*
    Map the Debris
    According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

    T=2πa3μ−−−√
    
    a  is the orbit's semi-major axis
    μ=GM  is the standard gravitational parameter
    G  is the gravitational constant,
    M  is the mass of the more massive body.
    Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

    The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

    The values should be rounded to the nearest whole number. The body being orbited is Earth.

    The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    var newArr = [];
    for(let i=0; i<arr.length; i++){
      // console.log(arr[i].avgAlt);
      const c = arr[i].avgAlt
      const b = Math.pow(earthRadius+c,3);
      // console.log(a*Math.sqrt(b/GM))
      // console.log(Math.round(a*Math.sqrt(b/GM)))
      var orbitalPeriod = Math.round(a*Math.sqrt(b/GM));
      newArr.push({name: arr[i].name, orbitalPeriod: orbitalPeriod})
      // return Math.ceil(a*Math.sqrt(b/GM))
    }
    console.log(newArr)
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);