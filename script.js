// Получить случайное число от 0 до size-1
var getRandomNumber = function (size) {
   return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
   var diffX = event.offsetX - target.x;
   var diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
// Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
   var numberOfAttempts = 20
   if (distance < 10) {
      return "Обожжешься! осталось " + (numberOfAttempts - clicks) + " кликов";
   } else if (distance < 20) {
      return "Очень горячо, осталось " + (numberOfAttempts - clicks) + " кликов";
   } else if (distance < 40) {
      return "Горячо, осталось " + (numberOfAttempts - clicks) + " кликов";
   } else if (distance < 80) {
      return "Тепло, осталось " + (numberOfAttempts - clicks) + " кликов";
   } else if (distance < 160) {
      return "Холодно, осталось " + (numberOfAttempts - clicks) + " кликов";
   } else if (distance < 320) {
      return "Очень холодно, осталось " + (numberOfAttempts - clicks) + " кликов";
   } else if (distance < 500) {
      return "Очень-очень холодно, осталось " + (numberOfAttempts - clicks) + " кликов";
   } else {
      return "Замерзнешь! осталось " + (numberOfAttempts - clicks) + " кликов";
   }
};
// Создаем переменные
var width = 400;
var height = 400;
var clicks = 0;
// Случайная позиция клада
var target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height)
};
// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
   clicks++;
   // Получаем расстояние от места клика до клада
   var distance = getDistance(event, target);
   // Преобразуем расстояние в подсказку
   var distanceHint = getDistanceHint(distance);
   // Записываем в элемент #distance новую подсказку;
   $("#distance").text(distanceHint);
   // Если клик был достаточно близко, поздравляем с победой
   if (distance < 8) {
      alert("Клад найден! Сделано кликов: " + clicks);
   }
   if (clicks >= numberOfAttempts) {
      alert("КОНЕЦ ИГРЫ, число попыток привысило: " + clicks)
   }
});