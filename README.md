# Burger Builder

Учебный проект на React/Redux. Выполнялся по мере прохождения [этого курса на Udemy](https://www.udemy.com/react-the-complete-guide-incl-redux/). Можно собрать бургер из имеющихся ингредиентов, сделать заказ и он появятся в разделе Orders. В качестве бэкэнда был использован Firebase. Что бы посмотреть заказы необходимо зарегистрироваться используя ЛЮБОЙ почтовый ящик. Проверки при регистрации нет, так что, что бы посмотреть на работу приложения, можно ввести несуществующие данные.

## Реализовано:
1. Базовые концепции react(Lifecycle hooks, hoc, etc.)
2. Роутинг
3. Асинхронные запросы на сервер
4. Валидация данных форм
5. Адаптивность
6. Lazy-loading

## Использованные технологии

**Create react app** - для сборки и разработки

**Sass** - препроцессор css  

**React-router** - для роутинга 

**Redux, react-redux** - для управления состоянием приложения  

**Axios + react-thunk** - для асинхронных запросов

## Отличия от проекта автора курса
Все отличия, в основном, появились в результате использования автором более старой версии React. Например:
1. В своем проексте, автор создает кастомный hoc для вывода списка компонентов. В 16-й версии React был добавлен React.Fragment, которым я и воспользовался.
2. Вместо css был использован Sass, за некоторыми исключениями.
3. CSS/SASS modules подключались без eject, так как React-create-app позволяют использовать эту технологию просто назвав файл *.module.sass(css)

## Установка и просмотр
Просто клонируйте репозиторий и установите зависимости и запустите webpack в необходимом режиме:
```
git clone https://github.com/calvuscaput/burger-builder.git
cd burger-builder
npm i
npm start //Для разработки
npm run build //Для сборки
```



Посмотреть онлайн можно  [здесь](https://calvuscaput.github.io/burger-builder/)


