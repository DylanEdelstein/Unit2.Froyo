prompt('please enter your flavors below separated by commas')

const froyo = 'different flavors'

const flavors = {
    vanilla: true,
    strawberry: true,
    coffee: true, 
    chocolate: false,
    superman: false,

}
console.table(flavors) 


//const flavors = {}

for (let i =0; i< froyo.length; i++){
  let currentLetter = froyo[i]
  if (currentLetter in flavors){
    flavors[currentLetter] += 1
  } else {
    flavors[currentLetter] = 1
  }
}
console.table(flavors)