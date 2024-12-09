# react-20241107-2

### ДЗ-1

- Зарегистрироваться на гитхабе (если нет аккаунта) и создать публичный репозиторий для домашнего проекта - https://github.com/
- В качестве ide советую использовать vs code - https://code.visualstudio.com/. Если уже есть ide (например, webstorm), можете продолжать использовать
- поставить node.js - https://nodejs.org/en
- Крэш курс по гиту - https://www.youtube.com/playlist?list=PLDyvV36pndZEgSRzWGuXFrTRUFuAAMciE

### ДЗ-2

1. поставить расширение prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode и форматировать свой код. В vs code можно настроить прогон на сохранения файла
2. создать ветку для ДЗ - hw-2
3. создать проект с помощью vite - https://vitejs.dev/guide/#scaffolding-your-first-vite-project (можете использовать любой пакетный менеджер)
4. почистить проект и установить зависимости
5. скопировать к себе моковые данные из этого проекта (materials/mock.js)
6. Отобразить все рестораны из моковых данных (импортируем константу в main.jsx и используем данные). Отображаем рестораны друг за другом. Логику отрисовки массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
   1. Название ресторана
   2. Заголовок - Меню (h3)
   3. Список названий блюд (используем тег ul и li)
   4. Заголовок - Отзывы (h3)
   5. Список текстов отзывов (используем тег ul и li)
7. сделать коммит и запушить
8. открыть ПР из ветки с ДЗ в основную ветку
9. отправить ссылку на ПР в ветку ДЗ-2

### ДЗ - 3

- установить расширение eslint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- установить react расширение для браузера - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

**обязательная часть**

- разбить приложение на компоненты
- необходимо в блюдо добавить счетчик. Минимальное значение 0, максимальное 5, по умолчанию 0. Кнопки +-
- добавить условный рендеринг, где могут отсутствовать данные
- реализовать компонент лейаута с хедером, футером и обернуть приложение
- вывод eslint должен быть пустым

**дополнительная часть**

Реализовать табы - кнопки с названием ресторана, по одной на каждый ресторан

- Кнопки отображаем между хедером и рестораном
- Единовременно отображаем только 1 ресторан
- По умолчанию - отображаем первый
- По клику на кнопку отображаем соответствующий ей ресторан. При повторном клике на активную кнопку ничего не происходит.

### ДЗ - 4

- сделать форму отзыва **ReviewForm**: имя, текст, рейтинг (от 1 до 5). Добавить кнопку “clear”, по клику на которую форма сбрасывается в изначальное состояние. Использовать хук useReducer
- форма рисуется после всех отзывов о ресторане
- переиспользовать компонент счетчика **Counter** между блюдом и отзывом. Важно, именно компонент, который отвечает за UI, логика счетчика блюда лежит отдельно. Можно создать **DishCounter** и в нем реализовать необходимую логику, но использовать для UI компонент **Counter**
- Размножить активный ресторан, чтобы на странице появился длинный скролл и сделать "скролл прогресс". Логику реализовать в отдельном компоненте **ProgressBar** и добавить его в **Layout**. Демо тут - https://www.cssscript.com/demo/scroll-progress-bar/

### ДЗ - 5

- стилизовать приложение, используя css модули (в свободном формате, на ваше усмотрение). Еще раз подумать над разбивкой UI по отдельным компонентам (ресторан, меню, блюдо, отзыв и тд)
- для удобства предлагается использовать библиотеку classnames, чтобы подключать условно несколько классов - https://www.npmjs.com/package/classnames
- подключить корневой ccs файл, чтобы почистить ненужные стили
- для удобства работы с модулями стилей установить расширение - https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules. Будет подсвечить поля в объекте стиля
- проанализировать рендеринг в приложении: состояние хранится максимально близко к потребителю, добавлены key пропы, где необходимо

### ДЗ - 6

- Добавляем контекст темы. Кнопка переключения темы в шапке. По клику на кнопку все кнопки меняют тему (стили с дефолтных на альтернативные).
- Добавляем контекст пользователя. В шапке делаем кнопку войти, по клику на кнопку добавляем в контекст мок-пользователя (просто имя любое). Если пользователь авторизован (есть в контексте имя), то кнопку войти меняем на имя пользователя и кнопку выйти, по клику на выйти убираем пользователя из контекста и снова рисуем кнопку войти. Кнопки +/- у блюда и форма отзыва рисуются только для авторизованного пользователя.

### ДЗ - 7

- установить библиотеки redux-toolkit, react-redux - https://redux-toolkit.js.org/introduction/getting-started#an-existing-app
- установить redux расширения для браузера - https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
- сконфигурировать стор
- скопировать к себе в репозиторий нормализованные моковые данные (materials/normalized-mock.js в этом проекте)
- создать слайсы данных (рестораны, блюда, отзывы, юзеры) и отказаться от моковых данных (перейти на механизмы rtk)
- репозиторий с кастомным редаксом - https://github.com/zubkov7/custom-redux

### ДЗ - 8

- реализовать компонент корзины: добавляем блюда из ресторанов по кнопкам +- в каунтере. Текущее значение берем из слайса данных с корзиной
- добавить RRD - https://reactrouter.com/en/main
- сделать страницу HomePage (контент на ваше усмотрение)
- компонент корзины отображается над футером на всех страницах
- сделать страницу /restaurants. На ней рисуем табы ресторанов
- по клику на таб открываем подстраницу restaurants/:restaurantId с названием ресторана и двумя табами - меню и отзывы. Дефолтно открыт таб меню
- по клику на табы меню, отзывы открываем подстраницу с меню или отзывами. restaurants/:restaurantId/menu и restaurants/:restaurantId/reviews
- по клику на блюдо открываем отдельную страницу блюда. На ней отображаем инфу о блюде и количество с кнопками. Страница блюда не является подстраницей ресторана. ее путь dish/:dishId

### ДЗ - 9

- скопировать директорию сервера **simple_api** в корень проекта (**materials/simple_api** в этом проекте)
- установить зависимости сервера (любым менеджером зависимостей внутри папки сервера)
- скопировать в основной **package.json** команду **start-server** (из **package.json** лекционного проекта)
- запустить сервер
- перестать использовать моковые данные и начать использовать данные с сервера. Удалить моковые константы, чтобы было явно видно
- на странице списка ресторанов **/restaurants** грузить данные о ресторанах (**api** /restaurants). Добавить проверку на наличие данных и если в сторе уже есть данные, то не грузить их
- на странице ресторана **restaurants/:restaurantId** грузить данные о ресторане (**api** /restaurant/:restaurantId). Если в сторе уже есть нужный ресторан, то не грузить данные
- на странице меню ресторана **restaurants/:restaurantId/menu** грузить блюда ресторана (**api** /dishes?restaurantId=restaurantId)
- на странице отзывов ресторана **restaurants/:restaurantId/reviews** грузить отзывы ресторана (**api** /reviews?restaurantId=restaurantId) и пользователей (**api** /users. Добавить проверку на пользователей, если они есть в сторе, то не грузить)
- на странице блюда **dish/:dishId** грузить данные о блюде (**api** /dish/:dishId). Добавить проверку на наличие данных и если в сторе уже есть данные, то не грузить их
- использовать **createEntityAdapter**
- В компонентах необходимо отображать состояния загрузки и ошибки. Создать **requestSlice** и оттуда брать статус запроса. Для статусов запроса сделать константы

### ДЗ - 10

- перейти на RTK query: запрос данных и подход работы с данными в компонентах
- реализовать форму добавления отзыва о ресторане
- User id брать из контекста пользователя (захардкодим, так как для создания отзыва требуется пользователь)
- при отправке отзыва необходимо перезапросить текущие отзывы, для этого использовать механизм разметки тегов
- со звездочкой: реализовать изменение отзыва
