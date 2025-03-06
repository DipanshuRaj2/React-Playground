--Dom: Document Object Model
-Tree like Structure that represents elements of a webpage
-When we use Simple Js if we update the webpage(like updating text or adding a button) it reload the entire webpage than will be very slow.


--VirtualDom: 
-It is the light wight of real DOM.
-It exists only in memory and does not directly affect the webpage.

--How it is work?
-When the UI changes, React creates a new Virtual DOM.
-It compares the new Virtual DOM with the previous one.
-React identifies the smallest necessary changes and updates only those parts in the real DOM.
-This process is faster than directly updating the entire DOM, making React efficient.
-This process is called Reconciliation.
-Reconciliation is an algorithm


React Fiber 
It is an reconciliation algorithm.



Concept 	
What It Does?	                        
Virtual DOM: Creates a copy of the real DOM to improve performance.
How It Works?
React updates the Virtual DOM first and later syncs changes to the real DOM.



Reconcilitation:
What It Does?	                        
Reconciliation	Compares old and new Virtual DOMs and applies only necessary changes to the real DOM.
How It Works?
Uses a diffing algorithm to update only changed elements.


what it Does?
Fiber	A new reconciliation algorithm that optimizes UI updates.	
How it works?
Splits work into small units, making updates asynchronous and prioritized.


