# In this lecture I learn about Reconciliation,Virtual Dom ,Diffing Algorithm ,about cross origin resource sharing and how search functionality implemented

# What is Reconcilition ?
    - 1. React reconciliation is the process through which react updates the browser dom.
    - 2. It makes the Dom updates faster in react.
    - 3. It updates the virtual dom first and then uses the diffing algorithm to make efficient and optimized update in Real DOM
 # Reconcilation working concepts :-
        - 1. Virtual DOM : React render JSX components to the Browser DOM but keeps a copy of the actual DOM to itself.This copy is called virtual DOM.
            The following action takes place by the react
                - 1. React stores a copy of Browser DOM which is called vitual DOM .
                - 2. When we make changes or add data.React creates a new virtual DOM and compares it with previous one.
                - 3. Camparison is done by diffing algorithm.The cool fact is a;; thses comparison take place in the memory and nothing yet changed in the browser.
        
        - 2. Diffing ALgorithm : How does the virtaual DOm caompares itself with previous version ?
            - This is where the diffing algorithm comes into the picture 
            - some concepts used by Algorithm are : 
                1. Two elements of different types will produce different tree.
                2. Breadth-first search (BFS) is applied beacuse if a node is changed it will re-render the entire subtre hence,Depth first approch is not excatly optimal.

# What is Cors ?
    - Cors is stands for cross-origin resource sharing .
    - cors is a mechanism that allows restricted resources on a web page to be accessed from another domain outside the domain from which the first resource was served
    
        