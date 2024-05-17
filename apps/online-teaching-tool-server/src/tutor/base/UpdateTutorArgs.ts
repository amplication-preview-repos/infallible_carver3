/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TutorWhereUniqueInput } from "./TutorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TutorUpdateInput } from "./TutorUpdateInput";

@ArgsType()
class UpdateTutorArgs {
  @ApiProperty({
    required: true,
    type: () => TutorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TutorWhereUniqueInput)
  @Field(() => TutorWhereUniqueInput, { nullable: false })
  where!: TutorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TutorUpdateInput,
  })
  @ValidateNested()
  @Type(() => TutorUpdateInput)
  @Field(() => TutorUpdateInput, { nullable: false })
  data!: TutorUpdateInput;
}

export { UpdateTutorArgs as UpdateTutorArgs };
