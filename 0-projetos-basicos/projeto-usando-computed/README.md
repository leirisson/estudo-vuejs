# projeto-usando-computed

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Explicação simples:
Ele observa variáveis do data() (ou outros computed).

- Quando essas variáveis mudam, ele recalcula o valor sozinho, sem você precisar chamar nada!
- É ótimo para cálculos ou transformações de dados (como filtrar uma lista ou juntar nomes).

Por que usar?
- Performance: Ele só recalcula quando algo muda (não toda hora).
- Código limpo: Você não precisa ficar chamando funções manualmente.