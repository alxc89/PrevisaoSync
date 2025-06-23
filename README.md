# 🌤️ WeatherApp

Aplicação para consultar a previsão do tempo de cidades e salvar favoritas para acesso rápido.

## 🚀 Funcionalidades

### 🔍 Buscar previsão por nome da cidade

- Permite ao usuário digitar o nome de uma cidade e obter:
  - Temperatura atual
  - Condições climáticas (ex: nublado, ensolarado)
  - Umidade, vento e sensação térmica
  - Previsão para os próximos dias

### ⭐ Adicionar cidades aos favoritos

- Após buscar uma cidade, o usuário pode marcá-la como favorita
- As cidades favoritas são salvas localmente (ex: em banco ou storage local)
- É possível visualizar a lista de favoritos em uma aba separada
- O sistema evita cidades duplicadas na lista de favoritos

## 🛠️ Tecnologias utilizadas

- **Frontend**: Angular
- **Backend**: .NET Framework 4.5
- **API de Clima**: OpenWeatherMap (ou similar)

## ✅ Como usar

1. Busque o nome de uma cidade no campo de pesquisa
2. Clique no ícone de lupa para "Buscar"
3. Veja os detalhes da previsão
4. Clique no ícone de "Coração" para adicionar aos favoritos

## 📦 Executando localmente

### Backend

```bash
# No diretório do projeto .NET
Abra no Visual Studio e execute o projeto
```

### Frontend

```bash
# No diretório do Angular
npm install
ng serve
```

Acesse em: http://localhost:4200

## 📌 Observações

- As previsões são baseadas na API de clima integrada. É necessário configurar a chave de acesso (`API Key`) no backend.
- Para testes locais, a cidade `São Paulo` pode ser usada como exemplo.

### 🔗 Servindo o frontend com o backend .NET

Após gerar o bundle da aplicação Angular, o conteúdo será servido diretamente pelo backend .NET.

#### 1. Gere o bundle do frontend:

```bash
ng build --configuration production
```

O build será gerado na pasta `dist/`.

#### 2. Baixe o projeto disponível no GitHub

Clone o repositório com o backend .NET:

```bash
git clone https://github.com/alxc89/BackEnd.PrevisaoSync.git
```

Abra o projeto no Visual Studio.

#### 3. Copie os arquivos do build para a pasta pública do backend

Copie o conteúdo da pasta `dist/PrevisaoSync` para uma pasta acessível no seu projeto .NET (ex: `App_Data/wwwroot` ou similar).

#### 4. Configure o backend para servir os arquivos estáticos

No arquivo `Web.config` ou via código, configure o `StaticFileHandler` para servir os arquivos da pasta onde estão os arquivos do Angular.

#### 5. Acesse a aplicação

Com isso, ao acessar o backend (ex: `http://localhost:5000`), a aplicação frontend será carregada diretamente.