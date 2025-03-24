<template>

    <div id="view">
        <div id="view_journal">
            <p>vos articles</p>
            <div id="article">

            </div>
        </div>
        <div id="param">
            <div id="paiment">
                <p>Mode de payment :</p>
                <form>
                    <label for="">
                        <input type="radio" name="payment" id="cb">
                        <img src="../assets/img/visa1.svg" alt="">
                        <img src="../assets/img/mastercards.svg" alt="">
                        <img src="../assets/img/amex.svg" alt="">
                    </label>
                    <label>
                        <input type="radio" name="payment" id="pp">
                        <img src="../assets/img/pay-pal.svg" alt="">
                    </label>
                    <label>
                        <input type="radio" name="payment" id="">
                        <img src="../assets/img/apple_pay.svg" alt="">
                        <img src="../assets/img/google_pay.svg" alt="">
                    </label>
                    <router-link to="/game"> clique ici pour jouer</router-link>
                </form>


            </div>
            <div id="price">
                <div class="annonce">
                    <p>total des articles:</p>
                    <p>0.00$</p>
                </div>
                <div class="slash"></div>
                <div id="allprice">
                    <div class="annonce">
                        <p>Sous total</p>
                        <p>0.00$</p>
                    </div>
                    <div class="annonce">
                        <p>frais de livraison</p>
                        <p>0.00$</p>
                    </div>
                    <div class="annonce">
                        <p>taxe</p>
                        <p>0.00$</p>
                    </div>
                </div>
                <div class="slash"></div>
                <div class="annonce">
                    <p>total (2 articles)</p>
                    <p>0.00$</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

#article{
    border: solid 1px;
    margin-right: 10vw;
    border-radius: 70px;
    height: 500px;
}
#allprice {
    width: 100%;
    gap: -10;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

#allprice .annonce {
    height: 30px;
}

.slash {
    height: 1px;
    width: 90%;
    background-color: black;
}

.annonce {
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}



label {
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    align-items: center;
    width: 70%;
    margin: 10px;

}

#paiment p {
    margin-left: 20px;
    font-family: "Cormorant Garamond";
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}



label p {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 40px;
    height: 40px;

    border: 2px solid #999;
    transition: 0.2s all linear;
    margin-right: 5px;

    position: relative;
    top: 4px;
}



input:checked {
    border: 20px solid black;
}

#paiment {
    margin-top: 50px;
    width: 70%;
    border: solid 2px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}

#price {
    width: 70%;
    margin-top: 50px;
    height: 250px;
    border: solid 2px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#price p {
    font-family: "Cormorant Garamond";
}

#view {
    height: 90vh;
    width: 100vw;
    background-image: url("../assets/img/background.svg");
    display: flex;
    flex-direction: row;
    justify-content: end;
}

#view_journal {
    width: 60vw;
}

#view_journal p{
    font-family: "Cormorant Garamond";
    font-size: 32px;
}

#param {
    height: 100%;
    width: 30vw;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-left: solid 1px;
}
</style>