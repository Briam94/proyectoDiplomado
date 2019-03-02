import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'

import Root from '../imports/ui/Root.js';

Meteor.startup(() => {
  render(<Root />, document.getElementById('root'));
});
