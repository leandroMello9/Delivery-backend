
export abstract class AuthInterface {
    auth: (user_email: string, user_password: string) => Promise<any>;
}