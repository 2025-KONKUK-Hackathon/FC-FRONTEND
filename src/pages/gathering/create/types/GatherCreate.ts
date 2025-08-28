import { type ClassCategoryKey } from '@shared/constant/class';

export interface GatherCreateRequest extends Record<string, unknown> {
  meetingName: string;
  content: string;
  category: ClassCategoryKey;
  recruitNumber: number;
  recruitStartDate: string;
  recruitEndDate: string;
  actualStartDate: string;
  actualEndDate: string;
  imageUrls: string[];
}
