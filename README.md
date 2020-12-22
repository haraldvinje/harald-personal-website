<h1 align="center">
  Baseline - React & TypeScript
  <br>
  <img src="https://jordy.app/_next/static/images/header-image-35c957288a5759161d321bcba4423e7f.png" alt="React TypeScript" title="React TypeScript" width="300">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Baseline for å bygge prosjekter med basis i React med TypeScript</p>

<hr />

## Problemet

Oppsett av prosjekter er noe som må gjøres alt for ofte. Hva om man kunne spare noen timer på hvert prosjekt ved å ha et ferdig oppsatt prosjekt å ta utgangspunkt i?

## Løsning

Baseline er løsningen for deg ❤️
Klon dette prosjektet, ta i bruk det du ønsker, og skap verdi!

## Bruk

Dette prosjektet benytter seg av npm og må klones for å benyttes.

```
git clone https://git.jrc.no/baselines/react-ts-baseline.git
cd react-ts-baseline
npm install 
npm start
```
## Hva er med i denne baselinen?

### Components
Baselinen kommer med en eksempelkomponent, ExampleComponent. 

```
import React from 'react';

interface ExampleComponentProps {}

const ExamplePage: React.FC<ExampleComponentProps> = () => {
  return <p>Dette er en eksempelkomponent</p>;
};

export default ExamplePage;

```

### Routes
Routes ligger inne i navigation mappen, og er hvordan applikasjonen styrer routing. Denne blir importert inn i index.tsx.
```
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import ExamplePage from '../pages/ExamplePage';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/example">
          <ExamplePage />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
```

### Hooks
Custom hooks har fått en egen undermappe med en useFetch hook som eksempel. Denne kan brukes til å forenkle kall mot API'er.
```
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url: string): any => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, isLoading, error };
};

```

### Pages
Baselinen tar utgangspunkt i at man har en egen undermappe for sider. ExamplePage er lagt ved.
```
import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

interface ExamplePageProps {}

const ExamplePage: React.FC<ExamplePageProps> = () => {
  return (
    <div>
      <h1>Velkommen til en eksempelside</h1>
      <ExampleComponent />
    </div>
  );
};

export default ExamplePage;

```

### Context
Et eksempel på hvordan context skal settes opp er inkludert i context/ExampleContext.tsx. Om prosjektet benytter context kan denne endres på, og hvis ikke kan context mappen slettes. Index.tsx må da oppdateres til å ikke benytte context.
```
import React, { createContext, useState, useMemo } from 'react';

interface ExampleContextProps {
  exampleProvider: ExampleValue;
}

interface ExampleValue {
  example: any | null;
  setExample: (val: any) => void;
}

export const ExampleContext = createContext<ExampleContextProps | null>(null);

const ExampleProvider: React.FC = ({ children }) => {
  const [example, setExample] = useState<any | null>(null);

  const exampleProvider = useMemo(() => ({ example, setExample }), [example]);

  return (
    <ExampleContext.Provider
      value={{
        exampleProvider,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleProvider;

```

### Docker
Docker er satt opp med en egen Dockerfile. Denne er satt opp slik at prosjektet kan serves som et docker-image kjøre på en eventuell webserver.
```
FROM node:12-alpine
RUN npm install -g serve
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

```

### Prettier & Eslint & Editorconfig
Prosjektet kommer med configurert pretter, eslint og editorconfig. Disse kan tweakes etter preferanse.
