document.getElementById('displayButton').addEventListener('click', function() {
  // Массив заранее заготовленных строк
  const messages = [
      'Я не смогу прийти на футбол, потому что я Козлов...',
      'Я не смогу прийти на футбол, потому что у меня тренировка 12 ног...',
      'Я не смогу прийти на футбол, потому что старый...',
      'Я не смогу прийти на футбол, потому что живу в Нижнем Новгороде...',
      'Я не смогу прийти на футбол, потому что не смог найти носки...'
  ];

  // Выбор случайного сообщения
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Отображение сообщения в поле вывода
  document.getElementById('output').innerText = randomMessage;
});
