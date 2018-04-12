if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log("Service worker registered");
    });
}else{
    console.log('Service worker not founc');
}