function Node(val) {
  this.value = val
  this.left = null
  this.right = null
}
//
const rootNode = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node5 = new Node(5)
const node17 = new Node(17)
const node12 = new Node(12)
//
rootNode.left = node3
rootNode.right = node5
node3.left = node2
node3.right = node17
node5.left = node12

function getTreeAsArray(root, nodeaArr = []) {
  const stack = [root]
  
  while (stack.length > 0) {
    let curr = stack.pop()
    
    curr.left && stack.push(curr.left)
    curr.right && stack.push(curr.right)
    
    nodeaArr.push(curr.value)
   }
  return nodeaArr
}

const k = 2
const sortedNodeArr = quickSort(getTreeAsArray(rootNode))
const kthLargest = sortedNodeArr[k-1]
console.log(kthLargest)

function quickSort(arr) {
  if(arr.length <= 1) return arr
  
  let pivot = arr[0]
  const greater = []
  const less = []
  const newArray = []
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i])
  } 
  return newArray.concat(quickSort(greater), pivot, quickSort(less));
}
