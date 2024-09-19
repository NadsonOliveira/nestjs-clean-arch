export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsINterface<propsValidated> {
  errors: FieldsErrors
  validatedData: propsValidated
  validate(data: any): boolean
}
