## Инициализация проекта
npm install -y (можно сразу добавить опцию -y что бы согласится на установку всех допов)

## Список того что нужно установить:
Примечание!! Для установки компонентов проекта следует использовать команду -> npm install <имя_пакета> --save-dev, также следует не забыть устанавливать все компоненты как дев зависемости т.е. не глобально а для каждого проекта отдельно так более правильно. Так же гораздо удобнее использовать краткую форму для установки пакетов.

<!-- Для работы webpack -->
npm i -D webpack  
npm i -D webpack-cli
<!-- Для работы стилей -->
npm i -D css-loader
npm i -D style-loader
npm i -D mini-css-extract-plugin

## Полезные команды npm
npm list
npm update
npm uninstall <имя_пакета>

## Настройка webpack
[1 - Как разрешить установку модулей](https://code.mu/ru/tool/webpack/basis/es-modules/)
[2 - Начальная настройка сборщика Webpack](https://code.mu/ru/tool/webpack/basis/initial-config/)  
[3 - Настройка запуска сборки Webpack](https://code.mu/ru/tool/webpack/basis/build-launch-config/)  
[4 - Плагины в Webpack](https://code.mu/ru/tool/webpack/basis/plugins/)  
[Будет полезно - Автоматическая сборка в Webpack](https://code.mu/ru/tool/webpack/mode/watch/)  
[5 - Лоадеры для CSS стилей в Webpack](https://code.mu/ru/tool/webpack/css/styles-loaders/)  
[6 - Настройка сборки CSS в бандл в Webpack](https://code.mu/ru/tool/webpack/css/css-bundle-config/)  
[Будет полезно - Работа с LESS в Webpack](https://code.mu/ru/tool/webpack/css/less-compilation/)  
[Будет полезно - Работа с SASS в Webpack](https://code.mu/ru/tool/webpack/css/sass-compilation/)  
