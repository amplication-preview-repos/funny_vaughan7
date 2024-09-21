/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogEventWhereInput } from "./BlogEventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BlogEventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BlogEventWhereInput,
  })
  @ValidateNested()
  @Type(() => BlogEventWhereInput)
  @IsOptional()
  @Field(() => BlogEventWhereInput, {
    nullable: true,
  })
  every?: BlogEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => BlogEventWhereInput,
  })
  @ValidateNested()
  @Type(() => BlogEventWhereInput)
  @IsOptional()
  @Field(() => BlogEventWhereInput, {
    nullable: true,
  })
  some?: BlogEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => BlogEventWhereInput,
  })
  @ValidateNested()
  @Type(() => BlogEventWhereInput)
  @IsOptional()
  @Field(() => BlogEventWhereInput, {
    nullable: true,
  })
  none?: BlogEventWhereInput;
}
export { BlogEventListRelationFilter as BlogEventListRelationFilter };
