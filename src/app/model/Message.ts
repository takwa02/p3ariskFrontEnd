import { TpCategory } from './TpCategory';

export class Message {
    tpCategorys: TpCategory[];
    totalPages: number;
    pageNumber: number;
    pageSize: number;
}