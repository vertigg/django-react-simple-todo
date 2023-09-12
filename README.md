# Django-React simple TODO app

Yet another `TODO` map created using Django 2 and React

## Some features

- React application is placed inside django app
- Not only Django provides API endpoints, it also serves React webpage (see `frontend` app)
- Token based authentication using `knox`

## Great tutorial for this kind of stuff

This project is based on amazing [Traversy Media Tutorial](https://www.youtube.com/playlist?list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60)

## How to launch this thing

- `python3 -m venv .venv`
- `source .venv/bin/activate`
- `pip install -r requirements.txt`
- `./manage.py migrate`
- `./manage.py runserver`

In separate console:

- `npm i`
- `npm run dev`

Visit `localhost:8000`
