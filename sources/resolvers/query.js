/** @format */

const User = require('./user.js');
const Event = require('./event.js');
const Club = require('./club.js');
const Venue = require('./venue.js');
const Story = require('./story.js');


const queries = {};

const schemas = [User, Event, Club, Venue,Story];

schemas.forEach((s) => {
	Object.assign(queries, s.queries);
});

module.exports = queries;
