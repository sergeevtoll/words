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
    { translate: 'intoduce', word: 'вводить' },
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
  ]


  let i = 1
  const shaffleData = shuffle(data)
console.log(shaffleData)
  btnNext.addEventListener('click', () => {
    const words = shaffleData[i]
    word.innerHTML = words.word
    translate.innerHTML = words.translate
    translate.classList.add('hide')
    i++
  })
  btnVision.addEventListener('click', () => {
    translate.classList.remove('hide')
  })


  // function randomInteger(min, max) {
  //   let rand = min - 0.5 + Math.random() * (max - min + 1);
  //   return Math.round(rand);
  // };

}

window.document.onload()