const tmi = require('tmi.js');
//const sql = require('sqlite');

// Для сохранения инфы
const fs = require('fs');

const NinjaAPI = require("poe-ninja-api-manager");

var ninjaAPI = new NinjaAPI({
  league: "Heist"
});


// Define configuration options
const opts = {
  identity: {
    username: 'BotPoebot',
    password: 'oauth:0bxsxzd9h1ipojkw918jfjt3koj9ia'
  },
  channels: [
    'Yumichi',
    'askariot'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);
const fetch = require("node-fetch");
const { AsyncLocalStorage } = require('async_hooks');

const allowed = ['Yumichi', 'Askariot'];
//var db = new sql.Database('./db/voting.db');
//sql.open("./db/voting.db");
//sql.open("./database.sqlite");
// db.each("SELECT * FROM users", function(err, row) {
//     console.log(row);
// });

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
async function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  console.log(commandName);
  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `Вы заролили ${num}`);
    console.log(`* Executed ${commandName} command`);
  }
  // Удача императора
  if (commandName === '!emperors_luck' || commandName === '!el') {
    const num = rollEmpLuck();
    client.say(target, `${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  // Сокеты
  if (commandName === '!sockets' || commandName === '!sk') {
    const num = rollSockets();
    client.say(target, `/me ${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  // Линки
  if (commandName === '!fusing' || commandName === '!fs') {
    const num = rollLinks();
    client.say(target, `/me ${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  //Команда Сиськи
  if (commandName === '!сиськи') {
    client.say(target, `( • )( • )ԅ(≖‿≖ԅ)`);
    console.log(`* Executed ${commandName} command`);
  } 
  // Антоха
  if (commandName.indexOf('антоха') >= 0 || commandName.indexOf('Антоха') >= 0) {
    client.say(target, `Картоха`);
    console.log(`* Executed ${commandName} command`);
  } 
  // ICQ
  
  // КГ
  if (commandName === '!кг'){
    let random = ~~(Math.random() * 600) + 1; 

    if(random <= 200){
      client.say(target, `Сегодня ты весишь ${random} кг, ты хоть разминочку делай а Kappa`);
    } 
    if(random > 300 && random < 400){
      client.say(target, `Сегодня ты весишь ${random} кг, тут разминочка уже не поможет Kappa`);
    }
    if(random >= 400){
      client.say(target, `Сегодня ты весишь ${random} кг, брат, тут только пересадка жопы поможет Kappa` );
    }
    
  }

  if(context['custom-reward-id'] == '256efe5e-1b95-4bd7-b28a-58b35db0e29f'){
    client.say(target, `!sr ` + msg);
  }
  //Команда Сиськи
  if (commandName === '!диван') {
    const divan = rollDivan();
    client.say(target, divan);
    console.log('do something' + flags);
    console.log(`* Executed ${commandName} command`);
  } 
  // Тупой\Тупик
  if (commandName.indexOf('тупой') >= 0 || commandName.indexOf('Тупой') >= 0) {
    client.say(target, `Стримлер не тупой SMOrc`);
    console.log(`* Executed ${commandName} command`);
  }
  if( commandName.indexOf('я тупик') >= 0){
    client.say(target, `Нет, я тупик SMOrc`);
    console.log(`* Executed ${commandName} command`);
  } else if(commandName.indexOf('тупик') >= 0 || commandName.indexOf('Тупой') >= 0){
    client.say(target, `Слыш, сам ты тупик SMOrc`);
    console.log(`* Executed ${commandName} command`);
  }

  // Майнкрафт
  if (commandName.indexOf('майнкрафт') >= 0 || commandName.indexOf('мэйн') >= 0 || commandName.indexOf('майнкампф') >= 0) {
    client.say(target, `Майнкрафт мая жизнь SMOrc`);
    console.log(`* Executed ${commandName} command`);
  }

  //
  if (commandName === '!join') {
    // Имя
    const user = context['display-name'];
    var number = 0;
    var x = false;
    // Читаем
    fs.readFile('test.txt','utf8', function read(err, data) { if (err) { throw err; }
      // Получаем инфрмацию с файла
      const content = JSON.parse(data);
      //console.log(content);
      // Проверка пустой ли файл
      if (content.length === 0){
        // Если пустой - создаем
        // Пушим в ррей
        content.push({"id": 0, "username": user, "number": number});
        // Конверирует
        var jsonData = JSON.stringify(content);
        // Добавляем в файл
        fs.writeFile("test.txt", jsonData, function(err) { if (err) { console.log(err); } });
      } else {
        // Если не пустой - добавляем
        content.forEach(element => {
          // Если юзера нет в файле
          if(element['username'] != user && x === false){

            var last = content[content.length - 1];
            var last_id = last['id'] + 1;
            //console.log(last['id']);
            // Пушим его в аррей
            content.push({"id": last_id, "username": user, "number": number});
            // Конвертируем аррей
            var jsonData = JSON.stringify(content);
            // Добавляем аррей в файл
            fs.writeFile("test.txt", jsonData, function(err) { if (err) { console.log(err); }
            x = true;
            });
          } 
        });
      }
    });
  }


  //Офф
  if( commandName.indexOf('я офф') >= 0){
    client.say(target, `Ну и вали! SMOrc`);
    console.log(`* Executed ${commandName} command`);
  } else if(commandName.indexOf('офф') >= 0 || commandName.indexOf('Офф') >= 0){
    client.say(target, `Сам ты офф SMOrc`);
    console.log(`* Executed ${commandName} command`);
  }

  // Чайник
  if( commandName.indexOf('я чайник') >= 0){
    client.say(target, `Посвести еще тут SMOrc`);
    console.log(`* Executed ${commandName} command`);
  } else if(commandName.indexOf('чайник') >= 0 || commandName.indexOf('Чайник') >= 0){
    client.say(target, `Свистит чайник, вырубай быстрее SMOrc`);
    console.log(`* Executed ${commandName} command`);
  }
  // Комманда профиль // commandName === '!персонажи'
  if( commandName.startsWith("!персонажи")){

    var input = commandName.split(' ')[1];
    //var input = commandName.split("\"")[1];
    var char = await getChars(target, input);

    client.say(target, char);
    await console.log( char );
  }

  // Комманда профиль // commandName === '!персонажи'
  if( commandName.startsWith("!уникцена")){

    //var input = commandName.split(' ')[1];
    var input = commandName.split("\"")[1];
    console.log(input);
    //var links = commandName.split("\"")[2];
    //console.log(links);
    //var item = await getInfo();

    await ninjaAPI.update()
    .then((result) => {
      //console.log("Updated data, here are the results of the requests:", result);
      return ninjaAPI.save();
     })
    .then((success) => {
      //console.log("Saved data", success);
      return ninjaAPI.getItem(input, {links: 6 }); //{links: 5, variant: "ES"});
    })
    .then((item) => {
      //var rdy = JSON.stringify(item);
      //console.log(rdy);
      console.log("An item matching the query was found", item[0].chaosValue);
      //return item[0].chaosValue;
      var test = JSON.stringify(item[0].chaosValue).toString();
      clientSaySMTH(target, test);
    })
    .catch((err) => {
      console.log(err);
      clientSaySMTH(target, "А нима такой шмоточки SMOrc");
    });
    //client.say(target, item[0].chaosValue);
    //console.log(item);
    //client.say(target, char);
    //console.log( char );
  }

  if( commandName.startsWith("!валютка")){

    //var input = commandName.split(' ')[1];
    var input = commandName.split("\"")[1];
    //var item = await getInfo();

    await ninjaAPI.update()
    .then((result) => {
      //console.log("Updated data, here are the results of the requests:", result);
      //return ninjaAPI.save();
     })
    .then((success) => {
      //console.log("Saved data", success);
      return ninjaAPI.getItem(input, {variant: null }); //{links: 5, variant: "ES"});
    })
    .then((item) => {
      //var rdy = JSON.stringify(item);
      //console.log(rdy);
      console.log("An item matching the query was found", item[0].chaosValue);
      //return item[0].chaosValue;
      var test = JSON.stringify(item[0].chaosValue).toString();
      clientSaySMTH(target, test);
    })
    .catch((err) => {
      console.log(err);
      clientSayERROR(target, err);
    });
    //client.say(target, item[0].chaosValue);
    //console.log(item);
    //client.say(target, char);
    //console.log( char );
  }
  

  // // Голосовалка
  // if (commandName === '!голосовалка') {

  //   // Берем опрос с базы
  //   const votes = await sql.get(`SELECT * FROM votes`);

  //   // Название опроса
  //   var vote_name = votes.vote_name;
  //   // Варианты ответов
  //   var vote_options = votes.vote_options;
  //   // Делим варианты в аррей
  //   var arr = vote_options.split(",");
  //   //console.log(vote_name, vote_options);

  //   var fix_vote_name = vote_name + " Варианты: " + " _______________________________ ";
  //   var options_array = [fix_vote_name];
  //   var i = 1;
  //   // Перебираем все варианты
  //   for(var z=0; z < arr.length; z++){
  //     var number = 0;

  //     const num_votes = await sql.all(`SELECT * FROM users WHERE votedOption =${i}`); //await getVotes(i);
  //     if(num_votes){
  //       number = num_votes.length;
  //     } else {
  //       number = 0;
  //     }

  //     var test = i + ")" + arr[z] + " | Голосов: "+ number + " _______________________________ ";
  //     i++;
  //     options_array.push(test);
  //   }

  //   console.log(options_array);

  //   client.say(target, options_array.join("") );

  // }
  // if (commandName.startsWith('!создать_опрос')){

  //   // Проверка на доступ к созданию
  //   if(allowed.includes(context['display-name'])){
  //     // Название опроса
  //     var vote_name = commandName.split("\"")[1];
  //     // Вся информация
  //     var all_info = commandName.split("\"");
  //     // Выделяем Варианты ответа
  //     var arr_answers = all_info.splice(2, all_info.length);
  //     // Убираем лишниее с вариантво овтета
  //     var filtered_answers = arr_answers.filter(function(str) {
  //       return /\S/.test(str);
  //     });

  //     // Передаем данны для записи в базу.
  //     addVoteToDatabase(target, vote_name, filtered_answers);
  //   } else {
  //     client.say(target, "А тебе низя PunOko"); 
  //   }

  // }

  // // Голосовать
  // if (commandName.startsWith('!голос')){

  //   var vote_option = commandName.split(' ')[1];
  //   var voter_name =  JSON.stringify(context['display-name']).toString();

  //   // Берем опрос с базы
  //   const vote = await sql.get(`SELECT * FROM votes`);
  //   if(vote != ""){
  //     // Макс вариант ответа
  //     var max_number = vote.vote_options.split(",").length;
  //     // Проверка существует ли опрос.
  //     if (vote_option <= max_number){
  //       // Выбираеем юзера с базы
  //       const user = await sql.all(`SELECT * FROM users WHERE name=${voter_name}`);
  //         if(user != ""){
  //           // Если юзаер есть - возвращаем.
  //           client.say(target, "Вы уже голосовали SMOrc");
  //         } else {
  //           // Если юзера нет - создаем и добавляем
  //           sql.run(`INSERT INTO users(id_user, name, isVoted, votedOption) VALUES(1, ${voter_name}, true, ${vote_option})`);
  //           client.say(target, "Ваш голос учтен SeemsGood");
  //         }
  //     } else {
  //       // Если вариант ответа не верен
  //       client.say(target, "Вариант опроса не верен SMOrc");
  //     }
  //   } else { 
  //     // Если опросов нет - выдает сообщение
  //     client.say(target, "На данный момент нет опросов PunOko"); 
  //   }
  // }
  // // Добавить вариант
  // if (commandName.startsWith('!добавить_вариант')){
  //   // Новый вариант
  //   var new_option = commandName.split(' ')[1];
  //   // Берем текущий опрос
  //   const vote = await sql.get(`SELECT * FROM votes`);
  //   var options_array = vote.vote_options;
  //   // Раздлелям и добавляем туда новый вариант
  //   var splited_options = vote.vote_options.split(",");
  //   splited_options.push(new_option);
  //   // Обьединяем и конвертируем в джсон стринг
  //   var joined_new_arr = splited_options.join(",");
  //   var new_options_arr_json = JSON.stringify(joined_new_arr).toString();
  //   // Обновляем базу
  //   sql.run(`UPDATE votes SET vote_options = ${new_options_arr_json}`);
  //   client.say(target, "Вариант ответа добавлем SeemsGood"); 

  // }

  if (commandName === '!сундук') {
    const divan = openChest();
    const user = context['display-name'];
    client.say(target, "@" + user +" " + divan);
    console.log(context);
    console.log(`* Executed ${commandName} command`);
  } 


  if(commandName === '!iq'){
    const icq = calibrateIQ();
    const user = context['display-name'];

    if(user == "Anton_lpc"){
      client.say(target, "@" + user +" " + "Тоха брат, твой Айсикью не помещается в сообщении Kappa");
    } else if(user == "Mir0ng"){
      if(icq <= 50){
        client.say(target, "@" + user +" " + "Больше 50 Kappa");
      } else {
        client.say(target, "@" + user +" " + icq);
      }
      
    }else {
      client.say(target, "@" + user +" " + icq);
    }

    //client.say(target, "@" + user +" " + icq);
  }

  // Ножи
  if(commandName === '!ножи'){
    const user = context['display-name'];

    const response = await fetch('https://tmi.twitch.tv/group/user/yumichi/chatters');
    const content = await response.json()

    var user_arr = [];

    for(var k in content['chatters']['broadcaster']) {
      user_arr.push(content['chatters']['broadcaster'][k]);
    }
    for(var k in content['chatters']['moderators']) {
      user_arr.push(content['chatters']['moderators'][k]);
    }
    for(var k in content['chatters']['viewers']) {
      user_arr.push(content['chatters']['viewers'][k]);
    }
    const knifeTarget = user_arr[Math.floor(Math.random() * user_arr.length)];

    client.say(target, "@" + user + " бросил 🔪🔪🔪🔪 и попал в " + "@" + knifeTarget);
  }

  // Лиса
  if (commandName === '!лиса') {
    const { image } = await fetch('https://randomfox.ca/floof/').then(response => response.json());

    client.say(target, `🦊 Лиса - ` + image);
    console.log(`* Executed ${commandName} command`);
  } 
}
async function clientSayERROR(target,value){
  client.say(target, value );
}
async function clientSaySMTH(target, value){
  client.say(target, value + " Хавосов");
}

function calibrateIQ(){
  let random = ~~(Math.random() * 300) + 1;
  if(random == 1){
    return "Твой ICQ равен '" + random + "' - о, ты тоже анимешник? TehePelo ";
  } else if(random > 1 && random <= 50){
    return "Твой ICQ равен '" + random + "' - ну хоть на стрим смог зайти BrokeBack";
  } else if(random > 50 && random <= 100){
    return "Твой ICQ равен '" + random + "' - для начала ниче, небойсь в доту гоняешь SMOrc";
  } else if(random > 100 && random <= 200){
    return "Твой ICQ равен '" + random + "' - Смотрите какой умный тут у нас PunOko";
  } else if(random > 200 && random <= 299){
    return "Твой ICQ равен '" + random + "' - Сверхразумов вызывали? PogChamp";
  } else if(random == 300){
    return "Твой ICQ равен '" + random + "' Да тут в сумме у чата столько не будет Kappa";
  }
}

function openChest(){
  var number = Math.random();
  console.log(number);
  if (number < 0.01) {
    return "Открыл сундук и получил САБКУ!1 PogChamp";
  }else if (number < 0.02){
    return "Открыл сундук и получил Заказ игры!1 PogChamp";
  }else if (number < 0.07){
    return "Открыл сундук и получил Смену названия канала Kappa";
  }else if (number < 0.2){
    return "Открыл сундук и получил Челендж стримеру! TehePelo";
  }else if (number < 0.3){
    return "Открыл сундук и получил Возврат поинтов! PunOko";
  }else if (number < 0.8){
    return "Открыл сундук и получил Мяу от стримлера PunOko";
  }else if (number < 0.9){
    return "Открыл сундук и получил Водичку PunOko";
  } else {
    return "Открыл сундук и получил... не получил SMOrc";
  }
}

async function getInfo(item_name){
  //if (typeof fetch == 'undefined') return

  await ninjaAPI.update()
  .then((result) => {
    //console.log("Updated data, here are the results of the requests:", result);
    //return ninjaAPI.save();
   })
  .then((success) => {
    //console.log("Saved data", success);
    return ninjaAPI.getItem("Atziri's Splendour", {links: 5, variant: "ES"});
  })
  .then((item) => {
    //var rdy = JSON.stringify(item);
    //console.log(rdy);
    console.log("An item matching the query was found", item[0].chaosValue);
    return item[0].chaosValue;
  })
  .catch((err) => {
    console.log(err);
  });

  //return "Нима персонажей BibleThump";
}

async function getChars(target, msg){
  if (typeof fetch == 'undefined') return

  const response = await fetch('https://www.pathofexile.com/character-window/get-characters?accountName=' + msg );
  const content = await response.json()

  console.log({ content })

  var arr = ["Персонажи "+ msg + "                                               "];

  for(var k in content) {
    if(content[k].league == 'Heist'){
      arr.push(content[k].name + " | " + content[k].class + " | Lvl:" + content[k].level + "                                               ");
    }
  }
  var arr_join = arr.join(" ");

  if(arr == arr_join){
    return "Нима персонажей BibleThump";
  } else {
    return arr_join;
  }
  
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  // Подключаемся к базе.
  //connectSQL();

  //getInfo();

  console.log(`* Connected to ${addr}:${port}`);

}

// async function connectSQL(){

//   //let db = new sql.Database('./db/voting.db', (err) => {

//     sql.run('CREATE TABLE IF NOT EXISTS users(id_user string, name text, isVoted text, votedOption text)');
//     sql.run('CREATE TABLE IF NOT EXISTS votes(id_votes string, vote_name text, vote_options text)');

//     console.log('Connected to the database...');
//   //});

// }

// async function addVoteToDatabase(target, vote_name, answers_arr){
//   // Убираем лишние сомволы с аррея ответов
//   var filtered_arr = answers_arr.toString().replace(/"/g, ``);
//   // Название опроса
//   var rdy_vote_name = JSON.stringify(vote_name).toString();
//   // "ДЖсоним" варианты ответов 
//   var rdy_arr_options = JSON.stringify(filtered_arr).toString();

//   // Берем опрос с базы.
//   const votes = await sql.get(`SELECT * FROM votes`);
//   console.log(votes);
//   if(votes){
//     // Если опрос есть - обновляем его
//     sql.run(`UPDATE votes SET vote_name = ${rdy_vote_name}, vote_options =  ${rdy_arr_options}`);
//     // Удаляем юзеры-ответы
//     sql.run(`DELETE FROM users`);
//     // Отправляем сообщение в чат
//     client.say(target, "Опрос обновлен SeemsGood");
//   } else {
//     // Если опроса нет - создаем
//     sql.run(`INSERT INTO votes(id_votes, vote_name, vote_options) VALUES(1, ${rdy_vote_name}, ${rdy_arr_options})`);
//     // Удаляем юезры-ответы
//     sql.run(`DELETE FROM users`);
//     // Отправляем сообщение в чат
//     client.say(target, "Опрос создан SeemsGood");
//   }

// }

// Используется для тестов коллбэка базы
function callback(row) { 
  console.log("R:" + row); 
  return row;
}

// async function getVotes(i){
//   const num_votes = await sql.get(`SELECT * FROM users WHERE votedOption =${i}`);

//   return num_votes;
// }




























function rollDivan(){
  var d = Math.random();
    console.log(d);
    if (d < 0.1) {
      return "Кожаный и черный PogChamp";
    }else if (d < 0.4){
      return "Кожаный, но не черный Kappa";
    }else if (d < 0.6){
      return "Мясной диван TehePelo";
    }else if (d < 0.7){
      return "Веганский диван PunOko";
    }else if (d < 0.8){
      return "Деревянный диван PunOko";
    } else {
      return "А не диван ты SMOrc";
    }
}

function rollEmpLuck(){
  var d = Math.random();
  console.log(d);
  if (d < 0.005) {
    //1%
    return "Вы получили Mirror of Kalandra PogChamp";
  }else if (d < 0.1){
    //10%
    return "Вы получили Exalted Orb BloodTrail ";
  }else if (d < 0.2){
    //20%
    return "Вы получили Divine Orb SMOrc";
  }else if (d < 0.3){
    //30%
    return "Вы получили Blessed Orb Keepo";
  }else if (d < 0.4){
    //40%
    return "Вы получили Regal Orb CoolCat";
  }else if (d < 0.5){
    //50%
    return "Вы получили Chaos Orb TehePelo";
  }else if (d < 0.6){
    //60%
    return "Вы получили Orb of Alchemy SeemsGood";
  }else if (d < 0.7){
    //70%
    return "Вы получили Chromatic Orb PunOko ";
  }else if (d < 0.8){
    //80%
    return "Вы получили Orb of Transmutation MingLee ";
  }else if (d < 0.9){
      //90%
      return "Вы получили Armourer's Scrap! NotLikeThis";
  } else {
      return "А ниче не получил";
  }

}

function rollSockets(){
var s = Math.random();
console.log(s);
if(s < 0.1){
  // 6
  return "6 сокетов PogChamp";
} else if(s < 0.2){
  // 5
  return "5 сокетов CoolCat";
} else if(s < 0.3){ 
  // 4
  return "4 сокета TehePelo";
} else if(s < 0.5){
  //3
  return "3 сокета PunOko";
} else if(s < 0.7){ 
  //2
  return "2 сокета NotLikeThis";
} else if(s < 1){ 
  //1
  return "1 сокет LUL";
} else {
  return "Ну зачем ломать шмотку то SMOrc";
}
}

function rollLinks(){
var l = Math.random();
console.log(l);
if(l < 0.05){
  // 6
  return "6-линк! PogChamp";
} else if(l < 0.1){
  // 5
  return "5-линк CoolCat";
} else if(l < 0.3){ 
  // 4
  return "4-линк TehePelo";
} else if(l < 0.5){
  //3
  return "3-линк PunOko";
} else if(l < 0.7){ 
  //2
  return "2-линк NotLikeThis";
} else if(l < 1){ 
  //1
  return "1-линк LUL";
} else {
  return "Ну зачем ломать шмотку то SMOrc";
}
}

// Function called when the "dice" command is issued
function rollDice () {
const sides = 6;
return Math.floor(Math.random() * sides) + 1;
}



