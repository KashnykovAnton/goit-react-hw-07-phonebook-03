Устранение ошибок после npm i:

1. $ npm i @babel/core (последняя версия babel)
2. $ npm i typescript (последняя версия typescript)
3. $ npm i fsevents@latest -f --save-optional (нужно установить fsevents в
   качестве необязательной зависимости)

---

Еще одно решение, не пробовал пока: package.json считается с ключом
optionalDependencies Вы можете добавить fsevents к этому объекту, и если вы
обнаружите, что устанавливаете пакеты на другой платформе, чем MacOS, fsevents
будет пропущен либо yarn , либо npm .

"optionalDependencies": { "fsevents": "2.1.2" },
