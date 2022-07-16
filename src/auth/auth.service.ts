import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() {}
    signup() {
        return {'msg' : 'Signup'}
    }

    signin() {
        return {'msg' : 'Signin'}
    }
}
