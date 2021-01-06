/** @format */
// linksMap needs to be finalized
const types = `

type ContactInfoObj{
    name: String,
    designation: String
    mobileNo: String
    email: String
}

input ContactInfoObjInput{
    name: String,
    designation: String
    mobileNo: String
    email: String
}

type Club{
    id:ID
    clubName:String
    memberAccess:[AccessLevel]
    facAd:String
    logo:String
    events:[Event]
    society:String
    domain:String
    links: String
    backgroundColor: String
    contactInfo:[ContactInfoObj]
}
input ClubInputType{
    clubName:String
    memberAccess:[AccessLevelInputType]
    facAd:String
    logo:String
    events:[ID]
    society:String
    domain:String
    links:  String
    backgroundColor: String
    contactInfo:[ContactInfoObjInput]
}
`;

const queries = `
    clubs(
        id:ID
        clubName:String
        facAd:String
        logo:String
        society:String
        domain:String
    ):[Club]
    clubByName(name:String):Club
    clubById(id:String):Club
`;

const mutations = `
    addClub(club:ClubInputType):Club,
    updateClub(id:ID,club:ClubInputType):Club,
    deleteClub(id:ID):Club,
`;

module.exports = { types, queries, mutations };
