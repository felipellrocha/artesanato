# Installation

Install elasticsearch:

```
  brew install elasticsearch
  brew services start elasticsearch
```

Install, and run charmander service:

```
  cd charmander
  virtualenv env
  . ./env/bin/activate
  pip install -r requirements
  ./app.py
```

Install, and run squitle service:
  
```
  cd squirtle
  yarn install
  yarn start
```

App should be served on:
  
```
  http://localhost:3333/
```
