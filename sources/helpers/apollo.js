const { ApolloError} = require('apollo-server');

const responseResolver=(name)=>{
    return {
		__resolveType: (obj) => {
			return obj.__typename == 'ErrorClass' ? 'ErrorClass' : name;
		},
	}
}

const resolverHelper=(graphqlError,requiredPermission,permissions)=>{
	if(graphqlError){
		throw new ApolloError(graphqlError.message,graphqlError.code);
	}else if (permissions.find((permission) => permission == requiredPermission)) {
		return true;
	} else {
		return false;
	}
}

module.exports={
	responseResolver,
	resolverHelper
}