import { type Part } from '@shared/constant/part';
import { type Grade } from '@shared/constant/grade';
import { type Subject } from '@shared/constant/subject';
import { type AffiliationCategoryKey } from '@shared/constant/affiliation';

export interface PostsCreateRequest extends Record<string, unknown> {
  title: string;
  content: string;
  imageUrls: string[];
  part: Part;
  grade: Grade;
  topic: Subject;
  affiliation: AffiliationCategoryKey;
}

export interface MediaUrl extends Record<string, unknown> {
  mediaUrl: string[];
}
