

const fileSistem =      require('fs'),
      pathPl =            require('path'),      
      /* Подключает модуль fileSistem встроенный в nodejs */
      path =            pathPl.join(__dirname, '../tasks'), 
      /* путь к нашей папки */
      arrayPathFills =  fileSistem.readdirSync(path).map(cell => cell = path+'/'+cell) 
      /* Перебираем полученный массив с названием файлов и добавляем к каждой ячейки приписку из константы path */
      /* .readdirSync() - метод объекта fileSistem который отдает в синхронном запросе название всех файлов в папке */

      
module.exports = arrayPathFills 

/* Экспортируем полученный массив */