# log - функция для работы с историей изменений

<# 
Аргументы:
    develop-feature1 - ветка, изменения которой нас интересуют
    ^ - модификатор отрицания
    ^master ^develop - без этих веток
    --pretty - задает формат вывода сообщения
        %an - имя автора
        %s - сообщение
    --since - фильтрация по времени
    --date-order - упорядочить по времени (сначала новые) 
#>
git log develop-feature1 ^master ^develop --pretty='Author: %an Message:%s' --since='3 hours' --date-order

<# 
Аргументы:
    develop master - ветки, изменения которых нас интересуют
    --pretty - задает формат вывода сообщения
        %an - имя автора
        %s - сообщение
        %ad - дата
    --grep - задает шаблон фильтрации сообщения коммита
    --date-order - упорядочить по времени (сначала новые) 
#>
git log develop master --pretty='Author: %an Message:%s Date:%ad' --grep='231' --date-order