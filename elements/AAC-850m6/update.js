function(instance, properties, context) {
    
	const height = properties.bubble.height();
    const width = properties.bubble.width();
	const swiftxr_url = properties.swiftxr_published_project_link;
            
        
    if (swiftxr_url != null) {
        instance.data.frame.src = swiftxr_url;
    }
    else {
		instance.data.frame.src = "https://swiftxr-default.swiftxr.app";
    }

}