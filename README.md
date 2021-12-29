# API TYPE-SCRIPT

## About the API
This API was made by me to pratice my skill's in TypeScript, SQL Relations and S.O.L.I.D Principles.

Database Used: Mysql
ORM Used: Type ORM

## Business Rule
- User Registration

		[ x ] It's not Allowed to Register two or more Users with the same E-mail.

		[ x ] It's not Allowed to Register a User without a E-mail.


- Tag Registration

		[ x ] It's not Allowed to Register two or more Tag with the same Name.

		[ x ] It's not Allowed to Register a User without a E-mail.

		[ x ] It's not Allowed to Register a Tag through a non Admin User.


- Compliment Registration

		[ x ] It's not Allowed a User Register a Compliment with the Field "user_sender" being a different value from his own id.

		[ x ] The User is not Allowed to Register a Compliment to himself.

		[ x ] It's not Allowed to Register a Compliment to an Invalid User.

		[ x ] A logged out User cannot make a Compliment.
