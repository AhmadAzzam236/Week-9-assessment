function animal(animalName, type){
        this.animalName = animalName;
        this.type = type;

        this.animalName = function(){return this.animalName;}
        this.createElement = function(){let newElement = document.createElement('div')}
}



let newAnimalClass = new animal('Typo', 'Dog');


