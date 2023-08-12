import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import HotelList from './components/HotelList';
import HotelDetails from "./components/HotelDetails";

const client = new QueryClient();

function App () {

  return (
    <>
      <QueryClientProvider client={ client }>
        <Switch>
          <Route path="/" component={ HotelList } />
          <Route path="/hotel/:id" component={ HotelDetails } />
        </Switch>
      </QueryClientProvider>
    </>
  );
}

export default App;
