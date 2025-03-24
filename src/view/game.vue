<template>
    <div id="view">

        <div id="game">


        </div>
    </div>

</template>

<script>
export default {
    mounted() {
        this.creategame(4)
    },
    methods: {
        creategame(numb_of_pair) {

            let GoodNumb = [];
            let pair = this.getpair(numb_of_pair)
            let selectOrFound = false
            let findNUmb = 0
            let pointOfPlayer = 0;
            let pairIndex;
            let tabOfColor = []

            for (let i = 0; i < pair.length; i++) {
                let rgb_rand_max = (255 / pair.length) * i;
                let rgb_rand_min = (255 / pair.length) * (i - 1);
                let random_color = "rgba("
                    + Math.floor(Math.random() * (rgb_rand_max - rgb_rand_min) + rgb_rand_min) + ","
                    + Math.floor(Math.random() * (rgb_rand_max - rgb_rand_min) + rgb_rand_min) + ","
                    + Math.floor(Math.random() * (rgb_rand_max - rgb_rand_min) + rgb_rand_min) + ","
                    + Math.random().toFixed(3) + ")";
                tabOfColor.push(random_color)
            }
            for (let i = 0; i < numb_of_pair * 2; i++) {
                let button = document.createElement("button")
                button.id = i
                let gaming_zone = document.getElementById("game")
                gaming_zone.appendChild(button)
                button.addEventListener("click", () => {
                    let other_numb = JSON.parse(JSON.stringify(pair));
                    pairIndex = other_numb.findIndex(paire => paire.includes(i))
                    button.style.backgroundColor = tabOfColor[pairIndex]
                    button.innerHTML = i
                    other_numb.forEach(paire => {
                        if (paire.includes(i)) {
                            paire.splice(paire.indexOf(i), 1)

                            //au premier clique on va récuperer la seconde valeur de la paire
                            if (selectOrFound === false) {
                                findNUmb = paire[0]

                                //au second on va vérifier si le joueur a trouver la bonne valeur
                            } else {
                                // vérifie si l'id correspond a la paire du sous tableau  si elle est vrai alors ajouter les valeur du tableau qui sont egal au id des boutons au tableau goodnumb
                                if (i === findNUmb) {
                                    pointOfPlayer++;

                                    pair[pairIndex].forEach(value => {
                                        GoodNumb.push(value)
                                    })
                                    //sinon attendre 1seconde puis changer le texte a l'interieur des boutons si les id ne font pas partie des valeurs du tableau goodnumb
                                } else {
                                    setTimeout(() => {
                                        document.querySelectorAll("button").forEach(value => {
                                            if (!GoodNumb.includes(Number(value.id))) {
                                                value.innerHTML = "";
                                                value.style.backgroundColor = "white"
                                            }
                                        });
                                    }, 1000)

                                }

                            }
                            selectOrFound = !selectOrFound
                        }
                    });
                })
            }
        },
        getpair(numberOfPair) {
            let arrayForNumbRand = [];

            for (let i = 0; i < numberOfPair * 2; i++) {
                arrayForNumbRand.push(i)
            }
            let ArrayOfPair = [];
            for (let j = 0; j < numberOfPair; j++) {
                let first_index = Math.floor(Math.random() * arrayForNumbRand.length)
                let first_value = arrayForNumbRand[first_index]
                arrayForNumbRand.splice(first_index, 1)
                let second_index = Math.floor(Math.random() * arrayForNumbRand.length)
                let second_value = arrayForNumbRand[second_index]

                //ma couleur random est ici
                //
                arrayForNumbRand.splice(second_index, 1)
                let pair = [first_value, second_value]
                ArrayOfPair.push(pair)
            }
            return ArrayOfPair


        },

    }
}

</script>

<style>
#game {
    height: 90vh;
    width: 90vh;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

button {
    height: 15%;
    width: 15%;
}

#view {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

button {
    background-color: aqua;
}
</style>