module.exports = {

	//"database_host": '127.0.0.1',
	"database_host": '192.168.122.28',
	"database_port": '27017',
	"database_name": 'authbase',
	"id_length": 8,
	"auth_length": 64,
	"activation_pad_length": 16,
	"cookie": {
		"domain": "cobol.speechmarks.com",
		"secret": "I actually do not think cookies are great, but they are more fun when eaten in secret!",
		"loginFailUrl": "/user/session",
		"loginSuccessUrl": "/",
		"logoutSuccessUrl": "/"
	},
	"auth_collection": "user_auth",
	"user_email_collection": "user_email",
	"user_password_collection": "user_password",
	"user_facebook_collection": "user_facebook", 
	"user_collection": "user",
	"integration": {
		"auth": {
			"facebook": {
				"appId": "xxx",
				"appSecret": "xxx",
				"callback": "/user/facebook"
			}
		}
	},
	"messages": {
		"wrong_username_password": "Wrong email address or password"
	},
	"email": {
		"register": {
			"from": "mistersync@AT@keyboardwritescode.com",
			"subject_tempate": "Thanks for registering...",
			"text_template": "Hi {{name}},\nThanks for registering /user/{{_id}}/activate/{{activationPad}}"
		},
		"reactivation": {
			"from": "mistersync@AT@keyboardwritescode.com",
			"subject_tempate": "Password reminder...",
			"text_template": "Hi {{name}},\nClick here to reset password /user/{{_id}}/activate/{{activationPad}}"
		}
	}
};
