/** @format */

// TODO: Unified Date Time format across the project
// TODo: Change time to unified UTC format in Model and Schema

const types = `
    type StartTime{
        hours: Int
        minutes: Int
    }
    input StartTimeInput{
        hours: Int!
        minutes: Int!
    }
    type SlotInfo{
        name: String
        course: Course
        startTime: StartTime
        duration: Int
        day: Int
    }
    input SlotInfoInput{
        name: String!
        course: ID!
        startTime: StartTimeInput!
        duration: Int!
        day: Int!
    }
    type Timetable{
        id:ID
        user : User
        identifier : String
        slotInfo : [SlotInfo]
        expiry : Boolean
    }
    input TimetableInputType{
        identifier : String!
        slotInfo : [SlotInfoInput!]
    }
`;

const queries = `
    timetableByIdentifier(identifier:String!):[Timetable]
    timetableById(id:ID!):Timetable
`;

const mutations = `
addTimetable(timetable:TimetableInputType!):Timetable
`;

module.exports = { types, queries, mutations };

// Add Timetable
// Delete Timetable
// Move a course to new slot
// Delete Course from timetable
// Add Course course to timetable
// Make as timetable as expired