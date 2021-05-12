import { GenderEnum } from "./enums/gender.enum";
import { PtObjectBase } from "./pt-object-base.model";

export interface PtUser extends PtObjectBase {
  fullName: string;
  avatar: string;
  gender: GenderEnum;
}
