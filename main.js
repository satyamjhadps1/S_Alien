function startClass(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/MPD7z5Ixq/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
        conf = document.getElementById("result_confidence");
        conf.innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        r = (Math.random()*255) + 1;
        g = (Math.random()*255) + 1;
        b = (Math.random()*255) + 1;
        document.getElementById("result_label").style.color = "rgb("+ r + "," + " " + g + "," + " " + b + ")";
        document.getElementById("result_confidence").style.color = "rgb("+ r + "," + " " + g + "," + " " + b + ")";
        i1 = document.getElementById("alien1");
        i2 = document.getElementById("alien2");
        i3 = document.getElementById("alien3");
        i4 = document.getElementById("alien4");
        if(results[0].label == "Clap"){
            i1.src = "aliens-01.gif";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.png";
        }else if(results[0].label == "Bell"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.gif";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.png";
        }else if(results[0].label == "snap"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.gif";
            i4.src = "aliens-04.png";
        }else if(results[0].label == "Background Noise"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.gif";
        }
    }
}