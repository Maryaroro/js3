# js3

Вопросы 💎

1. Сколько детей (дочерних DOM-узлов) у элемента `<ul>` в примере ниже:

   ```jsx
   <ul>
     <li>Привет</li>
     <li>Мир</li>
   </ul>
   ```

   Ответ:2

2. Есть такой элемент: `<input id= "input" value = "Привет">`. Какой вызов поменяет значение в нём?

   Ответ:input.setAttribute("value" , "Привет всем")

3. Сколько потомков будет у `<div>` после кода ниже?

   ```jsx
   <div id="div"></div>
   <p id="p">Привет</p>

   <script>
     div.append(p);
     div.append(p);
   </script>
   ```

   Ответ:1

4. В каких случаях для элемента elem не верно `elem.firstChild == elem.lastChild`?

Ответ:Когда у elem два или более потомков.

5. Какое свойство задает класс элемента?

   Ответ: className.Классы позволяют CSS и Javascript выбирать и получать доступ с помощью селекторов класса или функций, таких как методы DOM document.

6. Для чего используется запись: `setAttribute(name, value)`?

   Ответ:Устанавливает значение атрибута

7. Назовите метод добавления текста к документу.

   Ответ:Метод document. write

8. Как получить HTML-содержимое DOM-элемента elem?

   Ответ:elem.innerHTML

9. Что такое объект события и какие у него могут быть свойства?

   Ответ:Объект Event описывает событие, произошедшее на странице. Одной из причин возникновения событий являются действия пользователя, такие как клики мышкой MouseEvent или ввод с клавиатуры KeyboardEvent. Существует множество различных событий с разным набором информации.
   Свойства:
   bubbles — является ли данное событие всплывающим.
   cancelable — является ли событие отменяемым.
   currentTarget — указывает на элемент, на котором установлен обработчик события.
   defaultPrevented — отменено ли поведение события по умолчанию.
   eventPhase — указывает на фазу срабатывания события.
   isTrusted — указывает на происхождение события, будет в значении true, если событие инициировано действиями пользователя. false — если событие инициировано из кода с помощью dispatchEvent().
   target — ссылка на объект, которым было инициировано событие. Например, если событие произошло на поле ввода, мы получим ссылку на этот DOM элемент.
   timeStamp — время возникновения события в миллисекундах.
   type — тип события.

10. Что такое BOM и DOM?
    Объектная модель документа (DOM) — объект document,через который осуществляется доступ к содержимому страницы. Объектная модель браузера (BOM) — объекты, методы и свойства для работы с браузером. BOM — это объекты для работы с чем угодно, кроме документа.
11. Есть вот такая страница:

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <form name="search">
          <label>Поиск: <input type="text" name="search" /> </label>
          <input type="submit" value="Search!" />
        </form>
        <hr />
        <form name="search-person">
          Поиск по посетителям:
          <table id="age-table">
            <tr>
              <td>Возраст:</td>
              <td id="age-list">
                <label>
                  <input type="radio" name="age" value="young" />до 18</label
                >
                <label>
                  <input type="radio" name="age" value="mature" />18-50</label
                >
                <label>
                  <input type="radio" name="age" value="senior" />старше
                  50</label
                >
              </td>
            </tr>
            <tr>
              <td>Дополнительно:</td>
              <td>
                <input type="text" name="info" />
                <input type="text" name="info" />
                <input type="text" name="info" />
              </td>
            </tr>
          </table>
          <input type="button" value="Search!" />
        </form>
      </body>
    </html>
    ```

    Как найти в ней:

    1. Таблицу с `id="age-table"`

    Ответ: let table = document.getElementById('age-table');

    2. Все элементы `label` **внутри** этой таблицы (их три)

    Ответ: let lable = table.getElementsByTagName('label')

    3. Форму `form` с именем `name="search-person"`

    Ответ: let form = document.getElementsByName('search-person')

12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?

    Ответ:Для перехода к указанной веб-странице можно воспользоваться событием onclick, добавляя его к элементу <button>. Внутри onclick пишем document. location, а в качестве значения адрес желаемой веб-страницы
