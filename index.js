const { LinkedList } = require("./linkedLists");

function swapNodes(list, leftIdx, rightIdx) {
   // Given a linked list, swap the two nodes present at the left index and the right index

   //if both positions are the same
   if(leftIdx === rightIdx) {
      return list;   
   }

   //set up references for left and right nodes
   let leftNodeCurrent = null;
   let leftNodePrev = null;

   let rightNodeCurrent = null;
   let rightNodePrev = null;

   let currentIdx = 0;
   let currentNode = list.head;

   let newList = null;

   // step through the linked list
   while(currentNode) {
      // store left node
      if(currentIdx === leftIdx) {
         leftNodeCurrent = currentNode; 
      } else if(currentIdx === rightIdx) {
         rightNodeCurrent = currentNode;
         break;
      }

      //set previous reference if left node is not matched yet
      if(!leftNodeCurrent) {
         leftNodePrev = currentNode;
      }

      //set previous reference if right node is not matched yet
      rightNodePrev = currentNode;
      
      //increment current node and current index
      currentNode = currentNode.next;
      currentIdx += 1;
   }
 
   // set the references for the left node
   rightNodePrev.next = leftNodeCurrent;
   let temp = leftNodeCurrent.next;
   leftNodeCurrent.next = rightNodeCurrent.next;
   rightNodeCurrent.next = temp;

   //if the node at the left index is the head
   if(!leftNodePrev) {
      newList = rightNodeCurrent
   } else {
      leftNodePrev.next = rightNodeCurrent;
      newList = list.head;
   }
   
   return newList;
}

module.exports = {
   swapNodes 
}