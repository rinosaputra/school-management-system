
This script creates a new Firebase Admin user with a predefined UID, display name, email, and password.

Steps performed by the script:
1. Generates a unique user ID (UID) using the `uuid` library.
2. Uses the Firebase Admin SDK (`adminAuth`) to create a new user with the following properties:
   - UID: Generated unique identifier.
   - Display Name: "Admin"
   - Email: Taken from the environment variable `APP_EMAIL_ADMIN`.
   - Email Verified: Set to `true`.
   - Password: "Admin1234"
3. Upon successful user creation, sets a custom user claim `role: "super"` for the new user.
4. Logs the UID of the created user and the status of setting custom claims.
5. Handles and logs any errors that occur during user creation or while setting custom claims.

Usage:
Run the script with the following command:

    node --import=tsx admin/auth/index.ts

Prerequisites:
- Ensure the environment variable `APP_EMAIL_ADMIN` is set with the admin email address.
- Requires Firebase Admin SDK and `uuid` package.
