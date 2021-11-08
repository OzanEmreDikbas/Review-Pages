// Objects in Array
const painters = [{
        id: 1,
        name: 'Vincent Van Gogh',
        country: 'Netherlands',
        img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://blog.konusarakogren.com/wp-content/uploads/2020/07/8472392-3x2-700x467-1.jpg',
        text: 'he was born in the Netherlands in 1853. In his youth, he did various jobs from teaching to missionary. Influenced by the Impressionist movement, he made paintings filled with vivid colors. With its unique style, it has announced its name in a short time. He gave his known works in the last decade of his life. in 1888, after his friendship with the painter Paul Gaugin broke down, he cut off part of his left ear and committed suicide as a result of his deteriorating mood. He was considered one of the pioneers of Impressionism and was born in the 20th century. Dec is a name that almost everyone hears among the world-famous painters.'
    },
    {
        id: 2,
        name: 'Pablo Picasso',
        country: 'Spanish',
        img: 'https://icdn.ensonhaber.com/crop/320x241-85/resimler/diger/kok/2019/04/09/picasso_1.jpg',
        text: 'Vincent Pablo Picasso, whose father was also a painter, was born in Spain in 1881. At an early age, his talent was discovered and he was sent to the School of Fine Arts. In his early works, he painted ordinary people, circus clowns, acrobats. He is the pioneer of the art of painting, in which geometric shapes are used and is called Cubism. Picasso is the most prolific recognized artist. It has been entered into the Guiness Book of Records. The most famous work of the world-famous painter is his work Guernica, which tells about the bombing of the town of Guernica by the German armies.'
    },
    {
        id: 3,
        name: 'Salvador Dali',
        country: 'Spanish',
        img: 'https://blog.baruthotels.com/assets/imgs/upload/5fb7aea518c3cunlu-ressam-salvador-dalinin-dikkat-cekici-hayat-hikayesi.jpg',
        text: 'Dali, a representative of surrealism, was born in Spain in 1904. His best-known work is The Persistence of Memory. He has adopted narration with images. He attracted attention with his style of clothing, behavior and words, as well as with his art. He has also done sculpture, photography and filmmaking. During his lifetime, he painted more than 1500 paintings. He criticized power and state orders; he was closely interested in science.'
    },
    {
        id: 4,
        name: 'Leonardo Da Vinci',
        country: 'Italy',
        img: 'https://media-cdn.t24.com.tr/media/library/2019/09/1569857533418-da-vinci.png',
        text: "Born in Italy in 1452, he is also a mathematician, architect, engineer, sculptor and musician. His most well-known works are The Last Supper with the Mona Lisa. He is the most realistic painter of the human body. There are works that reveal the human anatomy, tell about the november of bones and muscles with each other. He lived in a mansion prepared right next to the Royal Palace with the great admiration of the king of France for him. Leonardo da Vinci, who suffered a stroke to his right arm, has focused more on scientific studies than painting. He died at his home in Amboise on 2 May 1519, aged 67."
    },
    {
        id: 5,
        name: 'Osman Hamdi Bey',
        country: 'Turkey',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Osman_Hamdi_Bey.jpg/220px-Osman_Hamdi_Bey.jpg',
        text: 'He was born on 12.30.1842 in Istanbul and died on 02.24.1910 in Istanbul. December 30, 1842 was born in Istanbul, Turkey. He is an Ottoman archaeologist, museologist, painter and the first mayor of Kadikoy. He is the son of Ibrahim Ethem Pasha, one of the Ottoman grand viziers of Greek descent, who came to Chios for adoption at a young age. He is considered the first Turkish archaeologist. He assumed control of all archaeological studies and ensured the foundation of modern archaeological science in the Ottoman Empire.The most important archaeological excavations were carried out at the Sayda King Cemetery (Lebanon). During these excavations, he found the world-famous Alexander Sarcophagus.'
    },
    {
        id: 6,
        name: 'Abidin Dino',
        country: 'Turkey',
        img: 'https://icdn.ensonhaber.com/resimler/diger/kok/2018/12/07/abidin-dino_5556.jpg',
        text: 'He was born on 03.23.1913 in Istanbul and died on 12.07.1993 in Paris. Turkish painter, cartoonist, writer, film director. He is one of the pioneers of contemporary Turkish painting. He became one of the pioneers of the art communities referred to as Group D and Yeniler Group in the history of Turkish painting. In addition to Turkey, he has opened exhibitions in countries such as France, Algeria, the United States, and has performed such duties as "Honorary President of the French Plastic Arts Association", "Consultant of the New York World Art Exhibition" abroad. After living in exile in Turkey for a while due to his political thoughts, he continued his life in Paris from 1952.'
    }
];

// Get the Elements

const img = document.getElementById('#card-foto');
const painter = document.getElementById('#card-title');
const country = document.getElementById('#card-country');
const info = document.getElementById('#card-text');
// const after = document.querySelector(".image-container::after");
// const after = document.querySelector(".image-container");

const prevBtn = document.querySelector('.previus-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// The first object of the array will be shown when the page loads

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() { // Sayfa yuklendiginde calismasi istenen fonksiyon
    const item = painters[currentItem];
    img.src = item.img;
    painter.textContent = item.name;
    country.textContent = item.country;
    info.textContent = item.text;

});

// The informations of the relevant object will be shown
function showPerson(person) {
    const item = painters[person];
    img.src = item.img;
    painter.textContent = item.name;
    country.textContent = item.country;
    info.textContent = item.text;
}

// Show the next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > painters.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show the previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = painters.length - 1;
    }
    showPerson(currentItem);
});

// Show the random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * painters.length);
    showPerson(currentItem);
});