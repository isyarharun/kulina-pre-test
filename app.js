/*
Isyar answer for Kulina preliminary test
*/

// Algorithm 1 sockMerchant function
function sockMerchant(totalSocks, sockColors) {
  let pairAndColors = [];
  let totalPairs = 0;
  if (
    totalSocks > 0 &&
    totalSocks < 101 &&
    (Array.isArray(sockColors) && sockColors.length === totalSocks)
  ) {
    for (let i = 0; i < sockColors.length; i++) {
      let current = sockColors[i];
      if (pairAndColors.findIndex(a => a.color === current) === -1) {
        let pairs = sockColors.filter(a => a === current);
        if (pairs.length > 1) {
          let result = {
            color: current,
            pairs: parseInt(pairs.length / 2)
          };
          pairAndColors.push(result);
        }
      }
    }
    for (let i = 0; i < pairAndColors.length; i++) {
      totalPairs += pairAndColors[i].pairs;
    }
    return totalPairs;
  }
}

// Algorithm 2 countingValleys function
function countingValleys(steps, path) {
  let result = 0;
  if (steps >= 2 && steps <= 10) {
    let isValley = false;
    let paths = path.split(" ");
    if (paths.length === steps) {
      let currentValue = 0;
      for (let i = 0; i < paths.length; i++) {
        let pathValue = paths[i] === "D" ? -1 : paths[i] === "U" ? 1 : 0;
        if (pathValue != 0) {
          currentValue = currentValue + pathValue;
          if (currentValue === -2 && !isValley) {
            // A valley is a sequence of consecutive steps below sea level,
            isValley = true;
          } else if (isValley && currentValue === 0) {
            // and ending with a step up to sea level.
            isValley = false;
            result++;
          }
        }
      }
    }
    return result;
  }
}

// Algorithm 3 printer function
function printer(input) {
  let stringInput = input.toString().split("");
  for (let i = 0; i < stringInput.length; i++) {
    let current = stringInput[i];
    let toPrint = current + repeat("0", stringInput.length - (i + 1));
    console.log(toPrint);
  }
}

// Algorithm 4 lampSwitch function
function getAllLampSwitched(totalTrips) {
  let results = [];
  for (let y = 1; y <= totalTrips; y++) {
    let lampOn = 0;
    for (let i = totalTrips; i >= 1; i--) {
      if (i % y === 0) {
        lampOn++;
      }
    }
    let result = {
      trips: y,
      lampOn: lampOn
    };
    results.push(result);
  }
  return results;
}

// Helper
function repeat(str, count) {
  let array = [];
  for (let i = 0; i < count; ) {
    array[i++] = str;
  }
  return array.join("");
}

function runAll() {
  const test = [1,2];
 let test3 = test;
  console.log(
    `sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) result: ${sockMerchant(
      9,
      [10, 20, 20, 10, 10, 30, 50, 10, 20]
    )}`
  );
  console.log(
    `countingValleys(8, "U D D D U D U U") result: ${countingValleys(
      8,
      "U D D D U D U U"
    )}`
  );
  printer(1345679);

  let allLamps = getAllLampSwitched(100);
  let trip100Result = allLamps.find(a => a.trips === 100);
  console.log(
    `total lamp switched on in trips 100: ${trip100Result.lampOn} lamp/s`
  );
}

runAll();
