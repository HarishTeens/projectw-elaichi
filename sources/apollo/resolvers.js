const User = require('./users/user.resolver.js');
const Event = require('./events/event.resolver.js');
const Club = require('./clubs/club.resolver.js');
const AccessLevel = require('./accessLevels/accessLevel.resolver.js');
const Story = require('./stories/story.resolver.js');
const Course = require('./courses/course.resolver.js');
const Timetable = require('./timetables/timetable.resolver.js');
const { GraphQLDateTime } =require ("graphql-iso-date");

const FieldResolver = {};
const Query = {};
const Mutation = {};

const schemas = [User, Event, Club, AccessLevel,Story, Course, Timetable];
schemas.forEach((s) => {
	Object.assign(FieldResolver, s.fieldResolvers);
	Object.assign(Query, s.queries);
	Object.assign(Mutation, s.mutations);
});

//Custom Resolver for Date object
const CustomScalarResolver = { 
  Date: GraphQLDateTime
};

const exportResolvers = {
	Query,
	Mutation
};
Object.assign(exportResolvers, FieldResolver);
Object.assign(exportResolvers, CustomScalarResolver);
module.exports = exportResolvers;
