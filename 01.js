function whoPlaying(names){

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = name[randomPersonPosition];

    return randomPerson + "is going to buy lunch today";
}