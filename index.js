function getValue(){
    var x = setInterval(function(){
            var name = document.getElementById('name').value;
            var year = document.getElementById('year').value;
            var month = document.getElementById('month').value;
            var day = document.getElementById('day').value;
            var DOB = (month + " " + day + "," + " "  + year);
            var milliBirth = Date.parse(DOB);
            var milliNow = Date.now();
            var age = milliNow - milliBirth;
            // var millisecondsPassed = age;
            // var secondsPassed = millisecondsPassed/1000;
            // var minutesPassed = secondsPassed/60;
            // var hoursPassed = minutesPassed/60;
            // var daysPassed = hoursPassed/24;
            // var yearsPassed = daysPassed/365;
            // var ageInYear = yearsPassed;
            // var ageInFloor = Math.floor(ageInYear)
            // var monthsInFloor = Math.floor(ageInYear%12)
            // document.getElementById('your age').innerHTML = DOB;
            var agee = age/31557600000;
            var af = Math.floor(agee);
            var ages = (((agee-(Math.floor(agee)))*365)%365);
            var df = Math.floor(ages);
            var hAge = (((ages-(Math.floor(ages)))*24)%24);
            var hf = Math.floor(hAge);
            var minAge = (((hAge-(Math.floor(hAge)))*60)%60);
            var mf = Math.floor(minAge);
            var secsAge = (((minAge-(Math.floor(minAge)))*60)%60);
            var sf = Math.floor(secsAge);
            var milAge = (((secsAge-(Math.floor(secsAge)))*1000)%1000);
            var mif = Math.floor(milAge);
            // console.log(ageInFloor,monthsInFloor,daysInFloor);
            document.getElementById('your age').innerHTML = af + " Years " + df + " Days " + hf + " Hours " + mf + " Minutes " + sf +" Seconds "+ mif + " Milliseconds ";
    },100);
}