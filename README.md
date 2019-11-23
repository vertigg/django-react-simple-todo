# Django-React simple TODO app

Yet another `TODO` map created using Django 2 and React

## Some features

- React application is placed inside django app
- Not only Django provides API endpoints, it also serves React webpage (see `frontend` app)
- Token based authentication using `knox`

## Great tutorial for this kind of stuff

This project is based on amazing [Traversy Media Tutorial](https://www.youtube.com/playlist?list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60)

## How to launch this thing

- `pipenv install` (if you don't have it, install it with `pip3 install pipenv` first)
- `pipenv shell`
- `python manage.py migrate`
- `npm install && npm run build`
- `python manage.py runserver`
- Visit `localhost:8000`
