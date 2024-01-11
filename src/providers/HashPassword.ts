import { Injectable } from '@nestjs/common';
import {hash, compare} from 'bcryptjs'

@Injectable()
class HashPassword {
    public async generateHash(payload: string): Promise<string> {
      return hash(payload, 8);
  }
  public async compareHash(payload: string, hashed: string): Promise<boolean> {
         return await compare(payload, hashed);
      }
}

export default HashPassword;