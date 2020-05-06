# find_pet
Полезные команды после клона:
Запуск приложения.
python manage.py runserver
Миграции чтобы создать существующие таблицы.
python manage.py migrate
Создание админа
python manage.py createsuperuser
Доступные страницы:
Логин/Логоут
http://127.0.0.1:8000/accounts/login/
http://127.0.0.1:8000/accounts/logout/
Панель администратора
http://127.0.0.1:8000/admin
Главная страница приложения
http://127.0.0.1:8000/pets
создание нового пользователя через запрос
http://127.0.0.1:8000/pets/signup/?name=test&email=test500@mail.ru
