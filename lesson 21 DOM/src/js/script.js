/*/!*1. Выбрать элемент на странице и добавить ему клас “homework”;*!/
let content = document.querySelector('._ford54 span');
content.classList.add('homework');

/!*2.	Выбрать элемент на странице и скрыть его*!/
let houseHide = document.querySelector('._1cb9q3xq').style.display = "none";
houseHide

/!*3.	Выбрать элемент на странице и удалить у него все содержимое*!/

let list = document.getElementsByClassName('_4bd0nd');
for (let i = 0; i < list.length; i++){
    list[i].remove();
}
console.log(list);

/!*4.	Выбрать элемент на странице и удалить у него атрибут класс*!/

let button = document.querySelector('._18gv8ts a').removeAttribute('class');
button

/!*5.	Выбрать элемент на странице и изменить цвет бэкграунда*!/

let color = document.querySelector('._6tbg2q').style.backgroundColor = 'green';

let color = document.querySelector('._6tbg2q');
color.style.backgroundColor = 'green';

/!*6. Выбрать элемент на странице и вставить в него <div>POWERCODE</div> и сделать скриншот*!/

let newDiv = document.createElement("div");
newDiv.innerHTML = "<h2>POWERCODE</h2>";
my_div = document.querySelector('._1en9mvc');
my_div.appendChild(newDiv);*/

let security = [
			{
				title: "Avira",
				text: "Це проста програма захистить від троянських вірусів і докучливих рекламних шкідників. На відміну від конкурентів, антивірус може йти в хмарні технології. Це додатковий захист від новинок вірусної індустрії.",
				price: 190,
				iconSrc: "https://gadgetshelp.com/wp-content/uploads/images/cdnwrep/content/uploads/2016/10/Avira-Free-Security-Suite-2017.jpg"
			},
			{
				title: "Norton",
				text: "Norton, комплексная защита устройств, в которую входят антивирусные программы, Password Manager, резервное копирование в облаке для ПК‡‡, 4 и многое другое. Все в одном решении.",
				price: 240,
				iconSrc: "https://img.compkkart.com/img/reviews/196/symantec-norton-360-deluxe.jpg"
			},
			{
				title: "Panda",
				text: "Програма гарантує надійний захист стаціонарного або портативного ПК від троянських варіантів вірусів, а також вірусів, які моніторяться в режимі реального часу.",
				price: 160,
				iconSrc: "https://www.logolynx.com/images/logolynx/b9/b99cf513f2ce151bc81fc81ffa4a04a4.jpeg"
			},
			{
				title: "Bitdefender",
				text: "Особливість цієї ефективної програми в тому, що вона не стане заважати користувачеві постійними запитами про свою роботу. Адже вікна не вискакують, як в інших антивірусах. Але методи захисту пропонується на досить високому рівні.",
				price: 210,
				iconSrc: "https://logowik.com/content/uploads/images/bitdefender-antivirus.jpg"
			}
		]

/*
<div class="av__item mega-sale">
            <img src="https://klike.net/uploads/posts/2019-06/1560329641_2.jpg" alt="">
            <h3>Котенок ГАВ</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, aut cumque delectus deleniti dicta dignissimos dolores eum eveniet harum illo molestiae nemo numquam possimus quibusdam quos rem unde voluptatum!</p>
            <a class="special" href=""></a>
        </div>
        */

let antivirusContainer = document.getElementById('antivirus-container');


for (let i = 0; i < security.length; i++){
    let newItem = document.createElement('div');
    newItem.classList.add('av__item');
    if (security[i].price <= 200){
        newItem.classList.add('mega-sale');
        newItem.classList.add('special');
    }
    //Картинка
    let itemImg  = document.createElement('div');
    itemImg.style.backgroundImage = 'url(' + security[i].iconSrc + ')';
    itemImg.classList.add('item__img');
    newItem.appendChild(itemImg);
    //Заголовок
    let itemTitle  = document.createElement('h3');
    itemTitle.innerText = security[i].title;
    newItem.appendChild(itemTitle);
    //Параграф
    let itemText  = document.createElement('p');
    itemText.innerText = security[i].text;
    newItem.appendChild(itemText);
    //Ссилка/ціна
    let itemLink = document.createElement('a');
    itemLink.setAttribute('href', security[i].price);
    itemLink.innerText = 'Цена сегодня: ' + security[i].price;
    newItem.appendChild(itemLink);

    antivirusContainer.appendChild(newItem)

}



