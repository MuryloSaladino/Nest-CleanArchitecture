export interface Paginated<TData> {
    results: TData[];
    page: number;
    size: number;
    maxPage: number;
}
