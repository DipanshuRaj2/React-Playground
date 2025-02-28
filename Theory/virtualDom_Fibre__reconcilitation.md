--Dom: Document Object Model
-Tree like Structure that represents elements of a webpage
-When we use Simple Js if we update the webpage(like updating text or adding a button) it reload the entire webpage than will be very slow.


--VirtualDom: 
-It is the light wight of real DOM.
-It exists only in memory and does not directly affect the webpage.

--How it is work?
-When someone changes in the UI, React Updates the virtual DOM first.
-It compare the new virtual DOM with the old one.
-And find the smallest changes needed only those part in the real DOM.
-It is faster as compare to DOM


