let data = [7, 4, 45, -23, 4, 1, 54, 24, 3, -1, -13, 14]
let goal = 0

export default function Algo() {

  let closest = data.reduce(function(prev, curr) {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
  })

  console.log(closest)
}

