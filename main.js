window.onload = function() {
    window.setTimeout(function(){
        document.getElementById("text-box").style.display ="none";
    }, 2000);
};

function onshow(target) {
    const myFunc = function(){

        const target = document.getElementsById(target);
        const position = Math.floor(window.innerHeight * .75);
    
        for (let i = 0; i < target.length; i++) {
            let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
    
            if (offsetTop < position) {
                window.setTimeout(function(){
                    document.getElementById(target).style.display ="none";
                }, 2000);
            }
        }
    }
    //スクロールイベントリスナーに登録
    window.addEventListener('scroll', myFunc, false);
}