Boundary Detection using Brightness with worker thread:
Pass smallest image of the current web-page from content script to background page. Background page creates a canvas and do boundary detection using brightness feature and return the image contains boundary to the web page it came.

I used worker thread in 'background.html' to do several tasks parallelly which are independent to each other  .It reduced execution time to half than the execution time for single thread.