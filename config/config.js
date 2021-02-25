const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'REPLACE_WITH_ZOOM_API_KEY',
		APISecret : 'REPLACE_WITH_ZOOM_API_SECRET',
        	accountSid : 'AC9d76dd023b4bab63cc62ea0326176b21',
        	authToken : 'df0a8d46bb4dc3e6f931f040f9fb2303'
	},
	production:{	
		APIKey : 'REPLACE_WITH_ZOOM_API_KEY',
		APISecret : 'REPLACE_WITH_ZOOM_API_SECRET',
       	        accountSid : 'AC9d76dd023b4bab63cc62ea0326176b21',
        	authToken : 'df0a8d46bb4dc3e6f931f040f9fb2303'
	}
};

module.exports = config[env]
