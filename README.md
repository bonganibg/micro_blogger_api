## BBlogger

A training project for a microblogging application similar to Mastodon but without the blockchain stuff.

### Requirements
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [passport](https://www.npmjs.com/package/passport)
- [passport-jwt](https://www.npmjs.com/package/passport-jwt)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [uuid](https://www.npmjs.com/package/uuid)

### Running

#### Clone the Repo
``` shell
git clone https://github.com/bonganibg/micro_blogger_api <new-name>
```

#### Running 
1. Get into the directory
``` shell
cd micro_blogger_api
```

2. Run the API (using nodemon)
``` shell
npm run start
```


## Why Does This Project Exist
The sole purpose of this project is for me to practice app security and database modelling. A social media platform is good for practicing these skills in my opinion particularly for database modelling. A social media applications requires a fast database that can store large amounts of data, a good challenge for a novice data modeler like myself.

## Approach
This system is not 'important' in the grand scheme of things, so there is no upfront planning for how this will end, but the current (This will evolve overtime) approach is as follows:

##### Timeline
1. Bare minimum system.
	- Implement authentication
	- Implement authorization 
	- All users will be on a single channel
	- Users can post to a channel
	- Users can edit their posts
2. Improved Auth
	- Implement account recovery and 2FA
	- Improve channel authorization 
3. Update Channel and Post databases
	- Build more performant database models

##### Techincal Stuff
Because this is a training excerise, I will abstain from using libraries that do too much work. What is too much work? too much work would be something like implementing Auth0 to handle everything related to user authentication and authorization

## Contrbutions 
You can feel free to create an [issue](https://github.com/bonganibg/micro_blogger_api/issues) and for thing I should consider changing or adding. Alternatively you can hit me up on [Twitter](https://www.twitter.com/bonganibg) for any direct attacks on my work.
