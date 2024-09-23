import { classValidatorFields } from '@/shared/infrastructure/domains/validators/class-validator-fields'
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'
import { UserProps } from '../entities/user.entity'

class UserRules {
  @MaxLength(225)
  @IsString()
  @IsNotEmpty()
  name: string

  @MaxLength(225)
  @IsString()
  @IsNotEmpty()
  email: string

  @MaxLength(225)
  @IsString()
  @IsNotEmpty()
  password: string

  @IsDate()
  @IsOptional()
  createdAt: Date

  constructor({ email, createdAt, name, password }: UserProps) {
    Object.assign(this, { email, createdAt, name, password })
  }
}

export class UserValidator extends classValidatorFields<UserRules> {
  validate(data: UserProps): boolean {
    return super.validate(new UserRules(data ?? ({} as UserProps)))
  }
}

export class UserValidatorFactory {
  static create(): UserValidator {
    return new UserValidator()
  }
}
