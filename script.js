window.document.onload = function (e) {
  const btnVision = document.querySelector('.vision')
  const btnNext = document.querySelector('.next')
  const btnEng = document.querySelector('.eng')
  const btnRus = document.querySelector('.rus')
  const holdBot = document.querySelector('.hold')
  const word = document.querySelector('.current')
  const translate = document.querySelector('.translate')
  const visionHold = document.querySelector('.holdWords')
  const holdData = document.querySelector('.holdData')

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const data = [
    { translate: 'enviroment', word: 'окружающая среда' },
    { translate: 'wide', word: 'широкий' },
    { translate: 'advantages', word: 'приемущества' },
    { translate: 'reliable', word: 'надёжный' },
    { translate: 'apperance', word: 'внешний вид' },
    { translate: 'allay', word: 'сплав' },
    { translate: 'compound', word: 'соединение' },
    { translate: 'factory', word: 'фабрика' },
    { translate: 'near', word: 'близко' },
    { translate: 'employees', word: 'работник' },
    { translate: 'employeses', word: 'нанимать' },
    { translate: 'expensive', word: 'дорогой' },
    { translate: 'plenty', word: 'много' },
    { translate: 'supple', word: 'поставка' },
    { translate: 'advert', word: 'реклама' },
    { translate: 'manufactur', word: 'производство' },
    { translate: 'negotiations', word: 'переговоры' },
    { translate: 'suggestions', word: 'предложения' },
    { translate: 'seem', word: 'кажется' },
    { translate: 'during', word: 'в течении (времени)' },
    { translate: 'equipment', word: 'оборудование' },
    { translate: 'abviously', word: 'очевидно' },
    { translate: 'opportunities', word: 'возможности' },
    { translate: 'probably', word: 'возможно' },
    { translate: 'growing', word: 'растущий' },
    { translate: 'however', word: 'однако' },
    { translate: 'often', word: 'часто' },
    { translate: 'perhaps', word: 'возможно' },
    { translate: 'consumer', word: 'потребитель' },
    { translate: 'wish', word: 'желание' },
    { translate: 'definition', word: 'определение' },
    { translate: 'reduce', word: 'уменьшить' },
    { translate: 'almost', word: 'почти' },
    { translate: 'nap', word: 'вздремнуть' },
    { translate: 'evidence', word: 'доказательства' },
    { translate: 'fault', word: 'ошибка' },
    { translate: 'judje', word: 'судья' },
    { translate: 'half', word: 'половина' },
    { translate: 'above', word: 'сверху' },
    { translate: 'suggest', word: 'предлогать' },
    { translate: 'early', word: 'рано' },
    { translate: 'otherwise', word: 'иначе (думаю)' },
    { translate: 'prefer', word: 'предпочитать' },
    { translate: 'both', word: 'оба' },
    { translate: 'improve', word: 'улачшать' },
    { translate: 'explain', word: 'объяснять' },
    { translate: 'topic', word: 'рассказ' },
    { translate: 'cheap', word: 'дешёвый' },
    { translate: 'below', word: 'ниже' },
    { translate: 'gestures', word: 'жесты' },
    { translate: 'nervouse', word: 'нервный' },
    { translate: 'summarise', word: 'итог' },
    { translate: 'intorduce', word: 'вводить' },
    { translate: 'to sum up', word: 'подытожить' },
    { translate: 'conclusion', word: 'заключение' },
    { translate: 'pronunciation', word: 'произношение' },
    { translate: 'prepare', word: 'подготовить' },
    { translate: 'rest', word: 'остальное' },
    { translate: 'involved', word: 'вовлеченный' },
    { translate: 'justice', word: 'справедливость' },
    { translate: 'entertament', word: 'развлечения' },
    { translate: 'civil servants', word: 'гос. служащий' },
    { translate: 'spokesperson', word: 'секретарь' },
    { translate: 'responsibility', word: 'ответственность, обязаность' },
    { translate: 'daily', word: 'каждый день' },
    { translate: 'spend', word: 'тратить' },
    { translate: 'emergency', word: 'срочно, непредвиденная ситуация' },
    { translate: 'disaster', word: 'катастроф' },
    { translate: 'desire', word: 'желание' },
    { translate: 'intention', word: 'намерения' },
    { translate: 'gift', word: 'подарок' },
    { translate: 'become', word: 'становиться' },
    { translate: 'according', word: 'согластно (иследованию)' },
    { translate: 'arrive', word: 'прибывать' },
    { translate: 'beside', word: 'рядом' },
    { translate: 'meantime', word: 'промежуток (времни), тем времнем' },
    { translate: 'blame', word: 'обвинять' },
    { translate: 'audience', word: 'аудитория' },
    { translate: 'joke', word: 'шутка' },
    { translate: 'vocabulary', word: 'запас слов' },
    { translate: 'adverts', word: 'отношение' },
    { translate: 'adverts', word: 'портативный' },
    { translate: 'портативный', word: 'ошибка' },
    { translate: 'available', word: 'доступный, в наличии' },
    { translate: 'launched', word: 'запускать' },
    { translate: 'quite', word: 'довольно, действительно' },
    { translate: 'rarely', word: "редко" },
    { translate: 'journey', word: 'путешествие' },
    { transalate: "excited", word: "взыолнованный" },
    { transalate: "frequently", word: "часто" },
    { transalate: "conversation", word: "беседа" },
    { transalate: "suffer", word: "страдать" },
    { translate: 'able', word: 'способный' },
    { translate: 'relationship', word: 'отношения (взаимосвязь)' },
    { translate: 'particular', word: 'определенный, конкретный' },
    { translate: 'weak', word: 'слабый' },
    { translate: 'efficient', word: 'эффективный' },
    { translate: 'venue', word: 'место встречи, место сбора' },
    { translate: 'facilities', word: 'оборудование,приспособления' },
    { translate: 'instance', word: 'пример (example)' },
    { translate: 'embarrassed', word: 'смущенный' },
    { translate: 'abroad', word: 'за границей' },
    { translate: 'apply', word: 'применять,использоват' },
    { translate: 'degree', word: 'степень, уровень' },
    { translate: 'guess', word: 'догадываться' },
    { translate: 'knowledge', word: 'знания' },
    { translate: 'accommodation', word: 'размещение,жилье' },
    { translate: 'mild', word: 'мягкий' },
    { translate: 'accommodation', word: 'влажный' },
    { translate: 'against', word: 'против' },
    { translate: 'several', word: 'несколько' },
    { translate: 'drought', word: 'засуха' },
    { translate: 'flood', word: 'наводнение' },
    { translate: 'bloom', word: 'цветение' },
    { translate: 'wheat', word: 'пшеница' },
    { translate: 'grain', word: 'зерно' },
    { translate: 'cause', word: 'причина' },
    { translate: 'lack', word: 'отсутствие' },
    { translate: 'shortage', word: 'нехватка' },
    { translate: 'consequences', word: 'последствия' },
    { translate: 'pollution', word: 'загрязнение' },
    { translate: 'exact', word: 'точный' },
    { translate: 'jar', word: 'банка (как варенье)' },
    { translate: 'pot', word: 'стаканчик (как йогурт)' },
    { translate: 'waste', word: 'отходы' },
    { translate: 'government', word: 'правительство' },
    { translate: 'rubbish', word: 'мусор' },
    { translate: 'untidy', word: 'неопрятный' },
    { translate: 'funding', word: 'финансирование' },
    { translate: 'proposal', word: 'предложение,заявка' },
    { translate: 'benefits', word: 'выгода' },
    { translate: 'annual', word: 'ежегодный' },
    { translate: 'evaluate', word: 'оценивать' },
    { translate: 'persuade', word: 'убеждать' },
    { translate: 'dedicated', word: 'посвященный' },
    { translate: 'suddenly', word: 'внезапно' },
    { translate: 'steadily', word: 'непрерывно' },
    { translate: 'significant', word: 'существенный' },
    { translate: 'aim', word: 'цель,задачa' },
    { translate: 'shaving', word: 'бритье' },
    { translate: 'despite', word: 'несмотря на' },
    { translate: 'competition', word: 'соревнование' },
    { translate: 'advice', word: 'совет' },
    { translate: 'turgently', word: 'срочно' },
    { translate: 'confidence', word: 'уверенность' },
    { translate: 'regard', word: 'уважение' },
    { translate: 'regret', word: 'сожаление' },
    { translate: 'generous', word: 'щедрый' },
    { translate: 'regard to', word: 'в отношении чего либо' },
    { translate: 'patient', word: 'терпеливый' },
    { translate: 'wise', word: 'мудрый' },
    { translate: 'jolly', word: 'веселый' },
    { translate: 'handsome', word: 'beautifull для мужчины' },
    { translate: 'bossy', word: 'властный' },
    { translate: 'moody', word: 'угрюмый' },
    { translate: 'sensitive', word: 'чувствительный' },
    { translate: 'thoughtful', word: 'заботливый, внимательный' },
    { translate: 'divide', word: 'делить' },
    { translate: 'reserved', word: 'скрытный, замкнутый' },
    { translate: 'measure', word: 'мера, степень' },
  ]

  let i = 1
  const shaffleData = shuffle(data)

let lang
const holdWords = []

btnEng.addEventListener('click',()=>lang='eng')
btnRus.addEventListener('click',()=>lang='rus')

  btnNext.addEventListener('click', () => {
    const words = shaffleData[i]
    if(lang==='eng'||lang===undefined){
      word.innerHTML = words.word
      translate.innerHTML = words.translate
      translate.classList.add('hide')
    i++} else {
      word.innerHTML = words.translate
      translate.innerHTML = words.word
      translate.classList.add('hide')
      i++
    }
  })
  btnVision.addEventListener('click', () => {
    translate.classList.remove('hide')
  })

  holdBot.addEventListener('click',()=>holdWords.push(shaffleData[i-1]))
  visionHold.addEventListener('click',()=>{
    for(let j=0; j<holdWords.length; j++){
      holdData.innerHTML += `
      <div>
      ${holdWords[j].word} : ${holdWords[j].translate}
      </div>`
    }
  })
}

window.document.onload()