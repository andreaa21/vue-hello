/* 

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo

*/


const { createApp } = Vue;

createApp({
    data(){
        return{
            text: 'questo è un messaggio',
            miaClasse: 'rosso',
            path: './img/',
            imgName: 'jumbo.png',
            imgName2: 'boolando.png',
            imgClasse: 'bianconero',
            isHidden: 'false',
            altraClasse: 'sottolinea'
        }
    },
    methods:{
        cambiaColore(colore){
            this.miaClasse = colore;
        },
        nascondiImmagine(){
            console.log(this.isHidden);
            this.isHidden = !this.isHidden
        },
        cambiaImmagine(){
            this.imgName = this.imgName2;
        }
    }
}).mount('#app')