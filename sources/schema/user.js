/** @format */

const types = `

    union UserResult= User | ErrorClass

    type User{
        id:ID
        name:String
        username:String
        gmailAuthMail:String
        clubAccess:[AccessLevel]
        instituteId:String
        mobile:String
        emergencyContact:String
        displayPicture:String
    }
    input UserInputType{
        name:String
        username:String
        gmailAuthMail:String
        instituteId:String
        mobile:String
        emergencyContact:String
        displayPicture:String
    }
    
`;

const queries = `
    users(
        name:String
        username:String
        gmailAuthMail:String
        instituteId:String
        mobile:String
        emergencyContact:String
    ):[UserResult]
    userByUsername(username:String):UserResult
    userById(id:String):UserResult
`;

const mutations = `
    authUser(user:UserInputType):UserResult
    updateUser(user:UserInputType):UserResult
    deleteUser(id:ID):Response
`;

module.exports = { types, queries, mutations };
