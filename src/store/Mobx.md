## MobX

### THis is an alternative to Redux

Here is an example of a mobx store:

```js
import { observable, action, computed, runInAction, flow } from 'mobx';
import EventsService from '../services/EventsService';

class EventsStore {
  EventsService = null;
  @observable events = new Map();

  constructor(EventsService) {
    this.EventsService = EventsService;
  }

  byId(id) {
    return this.events.find(event => event.id === id);
  }

  fetchEvents = flow(function*() {
    const response = yield this.EventsService.all();

    response.data.forEach(event => {
      this.events.set(event.id, event);
    });
  });
}

const eventStore = new EventsStore(EventsService);

export default eventStore;
```

And here is how you import / provide it:

```js
import React from 'react';
import './App.css';

import { Provider } from 'mobx-react';
import eventsStore from './stores/EventsStore';
import bettingSlipStore from './stores/BettingSlipStore';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Events from './pages/Events/Events';
import Event from './pages/Event/Event';

function App() {
  return (
    <Provider eventsStore={eventsStore} bettingSlipStore={bettingSlipStore}>
      <Router>
        <Route exact path="/events" component={Events} />
        <Route path="/events/:eventId" component={Event} />
      </Router>
    </Provider>
  );
}

export default App;
```

And here is how you inject it:

```js
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import WithBettingSlip from '../../hocs/WithBettingSlip/WithBettingSlip';
import InlineEvent from './InlineEvent/InlineEvent';

@inject('eventsStore')
@observer
class Events extends Component {
  componentDidMount() {
    this.props.eventsStore.fetchEvents();
  }

  render() {
    const events = this.props.eventsStore.events;
    const inlineEvents = [];

    for (const [id, event] of events) {
      inlineEvents.push(<InlineEvent {...event} key={id} />);
    }

    return (
      <div className="w-full flex">
        <WithBettingSlip>{inlineEvents}</WithBettingSlip>
      </div>
    );
  }
}

export default Events;
```
