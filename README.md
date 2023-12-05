Просмотреть готовую версию тестового можно на https://reduxtodoes.vercel.app/
Тестовое написал на Redux , использовал следующие библиотеки :
"@reduxjs/toolkit": "^1.9.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "framer-motion": "^10.16.9",
    "nanoid": "^5.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-loader-spinner": "^5.4.5",
    "react-redux": "^8.1.3",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.1",

    Для развертывания локально проекта выполните команду npm install и далее npm start
    О проекте: 
      использовал https://jsonplaceholder.typicode.com/todos/ , но так как он не позволяет удалять, обновлять, добавлять Приходилось делать не правильно то есть при ошибке обновлять.
      Я понимаю что это не правильно но хотел сделать максимально приблеженное к реальности хорошего API
    1. Есть тогл изменения темы приложения темной/светлой
    2. С помощью формы можно добавить toDo  оба поля обязательны
    3. Есть фильтрация по юзеру
    4. Пагинация так же есть
    5. Чтобы редактировать toDo необходимо кликнуть по ней и появиться модалка в которой есть форма редактирования toDo
    6. Есть два блока - Completed и Not Completed в которык фильтруются по статусу
    7. Изменить стату можно нажав на кнопку Change status и toDo переместится в блок другой
    8. удалить можно нажав на крестик
    9. Со стилями не заморачивался , стили для разных устройств прописал минимально
    10. Протестировал ... вроде бы все ок
    11. Некоторые блоки можно было вынести в отдельные компоненты и переиспользовать, но время поджимает...
    12. В коде коментарии прописывал максимально
    На все вопросы отвечу с удовольствием на собеседовании или при дальнейшем разговоре

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
