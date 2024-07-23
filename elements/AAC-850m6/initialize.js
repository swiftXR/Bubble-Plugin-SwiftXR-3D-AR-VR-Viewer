function(instance, context) {
                
    const frame = document.createElement('iframe');
    frame.width = "100%";
    frame.height = "100%";
    frame.title = "SwiftXR Embed Iframe";
    frame.src= '';
    
    //Supporting Properties
    
    frame.setAttribute("frameborder",0);
    frame.setAttribute("allow","fullscreen; autoplay; vr; camera; midi; encrypted-media");    
    frame.setAttribute("allowfullscreen",true);    
    frame.setAttribute("mozallowfullscreen",true);    

    
    frame.setAttribute("xr-spatial-tracking",true);    
    frame.setAttribute("execution-while-out-of-viewport",true);
    frame.setAttribute("execution-while-not-rendered",true);    
    frame.setAttribute("web-share",true);


    //Add Iframe to Instance data and make it available and referencible across the domain
    instance.data.frame = frame;
    
    //Append the frame to the canvas
    instance.canvas.append(frame);
    
    }