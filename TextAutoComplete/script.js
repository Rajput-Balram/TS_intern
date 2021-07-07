var targetInput = document.getElementById("country"),
    results = document.getElementById("autocomplete-results"),
    countryList = ['Alaska', 'Armenia', 'Argentina', 'Albania', 'Colombia', 'Cuba', 'Chili', 'India', 'indonesia', 'Iran', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales'],
    matches = [],
    resultsCursor = 0;

targetInput.focus();

//add event Listner for the input keydown
targetInput.addEventListener('keydown', function (event) {//ok
    if (event.keyCode == '13')
        event.preventDefault();
});
//add eventListener for input keyup
targetInput.addEventListener('keyup', function (event) {//ok
    /*
    Enter:13
    Arrow up:38
    Arrow down:40
    */

    results.innerHTML = "";
    toggleResults("hide");

    if (this.value.length > 0) {
        matches = getMatches(this.value);

        if (matches.length > 0) {
            displayMatches(matches);
        }
    }
    if (results.classList.contains('visible')) {
        switch (event.keyCode) {
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults('hide');
                resultsCursor = 0;

                break;
            case 38:
                if (resultsCursor > 0) {
                    resultsCursor--;

                    moveCursor(resultsCursor);
                }

                break;
            case 40:
                if (resultsCursor < (matches.length - 1)) {
                    resultsCursor++;

                    moveCursor(resultsCursor);
                }

                break;
        }
    }
});


//define fun for toggling result here
function toggleResults(action) {//ok
    if (action == "show") {
        results.classList.add("visible");
    } else if (action == "hide") {
        results.classList.remove("visible");
    }
}


function getMatches(inputText) {//ok
    var matchList = [];

    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }
    return matchList;
}


function displayMatches(matchList) {//ok
    var j = 0;

    while (j < matchList.length) {
        results.innerHTML += '<li class ="result">' + matchList[j] + '</li>';
        j++;
    }
    moveCursor(resultsCursor);

    toggleResults("show");
}


function moveCursor(pos) {//ok
    for (let i = 0; i < results.children.length; i++) {
        results.children[i].classList.remove('highlighted');
        
    }
    results.children[pos].classList.add('highlighted');
}
//https://www.youtube.com/watch?v=ResWVWI333o