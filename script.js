window.document.onload = function (e) {
  const btnVision = document.querySelector('.vision')
  console.log('object')
  const btnNext = document.querySelector('.next')
  const word = document.querySelector('.word')
  const translate = document.querySelector('.translate')

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const data = [
    { word: 'enviroment', translate: 'окружающая среда' },
    { word: 'wide', translate: 'широкий' },
    { word: 'advantages', translate: 'приемущества' },
    { word: 'reliable', translate: 'надёжный' },
    { word: 'apperance', translate: 'внешний вид' },
    { word: 'allay', translate: 'сплав' },
    { word: 'compound', translate: 'соединение' },
    { word: 'factory', translate: 'фабрика' },
    { word: 'near', translate: 'близко' },
    { word: 'employees', translate: 'работник' },
    { word: 'employeses', translate: 'нанимать' },
    { word: 'expensive', translate: 'дорогой' },
    { word: 'plenty', translate: 'много' },
    { word: 'supple', translate: 'поставка' },
    { word: 'advert', translate: 'реклама' },
    { word: 'manufactur', translate: 'производство' },
    { word: 'negotiations', translate: 'переговоры' },
    { word: 'suggestions', translate: 'предложения' },
    { word: 'seem', translate: 'кажется' },
    { word: 'during', translate: 'в течении (времени)' },
    { word: 'equipment', translate: 'оборудование' },
    { word: 'abviously', translate: 'очевидно' },
    { word: 'opportunities', translate: 'возможности' },
    { word: 'probably', translate: 'возможно' },
    { word: 'growing', translate: 'растущий' },
    { word: 'however', translate: 'однако' },
    { word: 'often', translate: 'часто' },
    { word: 'perhaps', translate: 'возможно' },
    { word: 'consumer', translate: 'потребитель' },
    { word: 'wish', translate: 'желание' },
    { word: 'definition', translate: 'определение' },
    { word: 'reduce', translate: 'уменьшить' },
    { word: 'almost', translate: 'почти' },
    { word: 'nap', translate: 'вздремнуть' },
    { word: 'evidence', translate: 'доказательства' },
    { word: 'fault', translate: 'ошибка' },
    { word: 'judje', translate: 'судья' },
    { word: 'half', translate: 'половина' },
    { word: 'above', translate: 'сверху' },
    { word: 'suggest', translate: 'предлогать' },
    { word: 'early', translate: 'рано' },
    { word: 'otherwise', translate: 'иначе (думаю)' },
    { word: 'prefer', translate: 'предпочитать' },
    { word: 'both', translate: 'оба' },
    { word: 'improve', translate: 'улачшать' },
    { word: 'explain', translate: 'объяснять' },
    { word: 'topic', translate: 'рассказ' },
    { word: 'cheap', translate: 'дешёвый' },
    { word: 'below', translate: 'ниже' },
    { word: 'gestures', translate: 'жесты' },
    { word: 'nervouse', translate: 'нервный' },
    { word: 'summarise', translate: 'итог' },
    { word: 'intoduce', translate: 'вводить' },
    { word: 'to sum up', translate: 'подытожить' },
    { word: 'conclusion', translate: 'заключение' },
    { word: 'pronunciation', translate: 'произношение' },
    { word: 'prepare', translate: 'подготовить' },
    { word: 'rest', translate: 'остальное' },
    { word: 'involved', translate: 'вовлеченный' },
    { word: 'justice', translate: 'справедливость' },
    { word: 'entertament', translate: 'развлечения' },
    { word: 'civil servants', translate: 'гос. служащий' },
    { word: 'spokesperson', translate: 'секретарь' },
    { word: 'responsibility', translate: 'ответственность, обязаность' },
    { word: 'daily', translate: 'каждый день' },
    { word: 'spend', translate: 'тратить' },
    { word: 'emergency', translate: 'срочно, непредвиденная ситуация' },
    { word: 'disaster', translate: 'катастроф' },
    { word: 'desire', translate: 'желание' },
    { word: 'intention', translate: 'намерения' },
    { word: 'gift', translate: 'подарок' },
    { word: 'become', translate: 'становиться' },
    { word: 'according', translate: 'согластно (иследованию)' },
    { word: 'arrive', translate: 'прибывать' },
    { word: 'beside', translate: 'рядом' },
    { word: 'meantime', translate: 'промежуток (времни), тем времнем' },
    { word: 'blame', translate: 'обвинять' },
    { word: 'audience', translate: 'аудитория' },
    { word: 'joke', translate: 'шутка' },
    { word: 'vocabulary', translate: 'запас слов' },
    { word: 'adverts', translate: 'отношение' },
    { word: 'adverts', translate: 'портативный' },
    { word: 'портативный', translate: 'ошибка' },
    { word: 'available', translate: 'доступный, в наличии' },
    { word: 'launched', translate: 'запускать' },
  ]


  let i = 1
  const shaffleData = shuffle(data)
console.log(shaffleData)
  btnNext.addEventListener('click', () => {
    const words = shaffleData[i]
    translate.innerHTML = words.word
    translate.innerHTML = words.translate
    translate.classList.add('hide')
    i++
  })
  btnVision.addEventListener('click', () => {
    word.classList.remove('hide')
  })


  // function randomInteger(min, max) {
  //   let rand = min - 0.5 + Math.random() * (max - min + 1);
  //   return Math.round(rand);
  // };

}

window.document.onload()