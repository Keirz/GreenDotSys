GREENDOTSYS V.A.1.0
![Image](https://drive.google.com/file/d/1I_L6QnXAt4OrwGyDyMmwgo7VITWDB78e/view?usp=sharing)

[GreenDotSys] é um sistema de Interface e tratamento de dados feito inicialmente para aplicação em Hotelarias e Pousadas.
O sistema consiste de um Dashboard, pagina de Login e Cadastro, Tabelas e Gráficos visuais e responsivos para demonstração e tratamento de dados sobre a sustentabilidade da Conta-Hotel cadastrada.

O GreenDotSys tem como o maior diferencial o controle, alerta e integração do sistema de Sensores de controle de energia das células(quartos) dos hotéis. Ao sair e remover a chave do console, o hospede automaticamente se reporta como Ausente e se o Sensor identificar algum Consumo de Energia, ele irá ativar um alerta no sistema para avisar do Consumo indesejado de Energia.

O produto possui, além disso, sistema de cadastro de contas de luz e seu consumo para controle interno e verificação, dentro do banco de dados através de algoritmos próprios, de até mesmo contadores de Redução de CO², Carvão e Desmatamento de Arvores evitados.

Acreditamos, que, ao apresentarmos, de maneira visual, interativa e melhor estruturada, o usuário(Hotel) seja incentivado a tomar políticas internas em seu total controle e forma e personalização para que seu negócio comece a entrar no ramo da sustentabilidade/economia de energia.

O sistema utiliza-se de materiais Free(MIT) disponibilziados pelo BootStrap, FontAwesome, entre outros, utilizando-se de elementos gráficos como cards-box para melhor visualização.



## Estrutura dos dados HTML-Front-end

```
html v.alpha.1.0
    ├── assets
    │   ├── css
    │   ├── fonts
    │   ├── img
    │   ├── js
    │   │   ├── core
    │   │   ├── plugins
    │   │   └── material-dashboard.js
    │   │   └── material-dashboard.js.map
    │   │   └── material-dashboard.min.js
    |   |   └── function-alert.js
    |   |   └── aside.js
    │   └── scss
    │       ├── material-dashboard
    │       └── material-dashboard.scss
    |
    |──────billing.html
    |──────dashboard.html
    |──────profile.html
    |──────sign-in.html
    |──────sign-up.html
    |──────tables.html
    |──────visual-reality-html
```


## Responsividade

- Atualmente o Sistema Suporta completa Suportividade comportando até mesmo uma versão em VR(Virtual Reality) o seu HUB/Dashboard.

## Technical Support / FAQ

- O sistema foi desenvolvido para atender o MVP do HackinRio2022, porém, suas funcionalidades plenas foram simuladas com dados simulados.

- A implementação completa do sistema requisitaria completo suporte de Hardware nos Hotéis? Sim e não. Fizemos questão de manter uma função manual de controle de Saída/Sensores para Hótes/Pousadas que não automatizaram seu sistema ainda.

