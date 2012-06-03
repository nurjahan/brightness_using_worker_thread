Boundary Detection using Brightness:
Pass smallest image of the current web-page from content script to background page. Background page creates a canvas and do boundary detection using brightness feature and return the image contains boundary to the web page it came.

I used worker thread.It reduced execution time to half than normal.